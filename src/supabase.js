import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sbvfpmslpfpynzpakdfn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNidmZwbXNscGZweW56cGFrZGZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MzA4MDksImV4cCI6MjAwNzUwNjgwOX0.QuCJJA0Vw9uri6K4BZZl_hcmRm9y8m2JeidEDtxVIEc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
