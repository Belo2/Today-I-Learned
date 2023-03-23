import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkrvapxbjlrgymyiyiji.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcnZhcHhiamxyZ3lteWl5aWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3NTgxNjcsImV4cCI6MTk5MzMzNDE2N30.uGe4M_-lt2JHUPbS877Kn2uEVue8egXWUQ7DLs4Yw68";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
