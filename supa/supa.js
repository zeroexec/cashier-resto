import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://mxnaeepuydqkvtlzpxqk.supabase.co/rest/v1/'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im14bmFlZXB1eWRxa3Z0bHpweHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3Mjk2ODksImV4cCI6MjA5MjMwNTY4OX0.0DjJemqIoFWQhO9Tej9242BQk4mSnTl08uksV_ioeLI'

export const supabase = createClient(supabaseUrl, supabaseKey)