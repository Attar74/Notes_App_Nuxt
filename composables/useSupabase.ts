import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yduhsapbofncubmempjj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkdWhzYXBib2ZuY3VibWVtcGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNzM0MTEsImV4cCI6MjAyMjc0OTQxMX0.BsCUkS0g5Xzl-hSxVHVr6YO4SeNz23sYQQcT_DkVme4' ?? ''
const useSupabase = () => {
    const supabase = createClient(supabaseUrl, supabaseKey)

    return { supabase }
}

export default useSupabase