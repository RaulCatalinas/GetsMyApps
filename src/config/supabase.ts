// Supabase
import { createClient } from '@supabase/supabase-js'

// Constants
import { SUPABASE_PROJECT_URL } from '@/constants/supabase'

export const supabaseClient = createClient(
  SUPABASE_PROJECT_URL,
  import.meta.env.SUPABASE_API_KEY
)
