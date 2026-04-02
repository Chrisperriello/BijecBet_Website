import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabaseClient = null

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
}

function requireSupabase() {
  if (!supabaseClient) {
    throw new Error(
      'Waitlist backend is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.',
    )
  }
  return supabaseClient
}

export async function submitWaitlistEntry({ email, source }) {
  const client = requireSupabase()

  const { error } = await client.from('waitlist').insert({
    email,
    source,
  })

  if (error) {
    const submitError = new Error(error.message)
    submitError.code = error.code
    throw submitError
  }
}
