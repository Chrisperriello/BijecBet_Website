const variantStyles = {
  primary:
    'bg-brandTeal text-background hover:bg-brandTeal-hover focus-visible:ring-brandTeal',
  outline:
    'border border-brandTeal text-brandTeal hover:bg-brandTeal/10 focus-visible:ring-brandTeal',
  ghost: 'text-platinum hover:bg-slate-800 focus-visible:ring-brandTeal',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandTeal focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
