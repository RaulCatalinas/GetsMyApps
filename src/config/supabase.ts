// Supabase
import { createClient } from '@supabase/supabase-js'

// Constants
import { SUPABASE_API_KEY } from '@/constants/env'
import { SUPABASE_PROJECT_URL } from '@/constants/supabase'

export const supabaseClient = createClient(
  SUPABASE_PROJECT_URL,
  SUPABASE_API_KEY
)
