import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { trackEvent } from '../../lib/analytics'
import { submitWaitlistEntry } from '../../lib/waitlistClient'
import Button from './Button'

const waitlistSchema = z.object({
  email: z.email({ message: 'Please enter a valid email address.' }),
  honeypot: z.string().max(0),
})

export default function WaitlistForm({ source = 'hero', className = '' }) {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: '',
      honeypot: '',
    },
  })

  const onSubmit = async (values) => {
    if (values.honeypot) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      await submitWaitlistEntry({
        email: values.email,
        source,
      })
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Submission failed. Please try again.'
      const isDuplicateEmail =
        typeof message === 'string' &&
        (message.toLowerCase().includes('duplicate') || message.toLowerCase().includes('unique'))
      setErrorMessage(
        isDuplicateEmail
          ? "You're already on the waitlist with this email."
          : message,
      )
      setStatus('error')
      return
    }

    setStatus('success')
    trackEvent('waitlist_submit_success', {
      source,
    })
    reset()
  }

  return (
    <div className={`w-full max-w-xl ${className}`}>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor={`waitlist-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          type="text"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="hidden"
          {...register('honeypot')}
        />
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            id={`waitlist-email-${source}`}
            type="email"
            placeholder="Enter your email"
            className="min-h-12 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-platinum placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandTeal"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={`waitlist-help-${source}`}
            {...register('email')}
          />
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="min-h-12 sm:min-w-40"
          >
            {status === 'loading' ? 'Joining...' : 'Join waitlist'}
          </Button>
        </div>
        {errors.email ? (
          <p className="text-sm text-red-400" role="alert">
            {errors.email.message}
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-red-400" role="alert">
            {errorMessage || 'Submission failed. Please try again.'}
          </p>
        ) : null}
        {status === 'success' ? (
          <p className="text-sm text-brandTeal" role="status">
            You&apos;re on the waitlist.
          </p>
        ) : null}
      </form>
      <p id={`waitlist-help-${source}`} className="mt-3 text-xs text-slate-400">
        By joining, you agree to our terms and privacy policy.
      </p>
    </div>
  )
}
