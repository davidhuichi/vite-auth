import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://waqfvwlhsicybodrpkcr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhcWZ2d2xoc2ljeWJvZHJwa2NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NTM0MTcsImV4cCI6MjAzODAyOTQxN30.SZQb7WQSbGxs8dV2CxGwmINeSPlC4D3tLsmywX6QToA'
export const supabase = createClient(supabaseUrl, supabaseKey)