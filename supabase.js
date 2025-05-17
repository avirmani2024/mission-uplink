// supabase.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://amtttzheixlsfmqphlrq.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdHR0emhlaXhsc2ZtcXBobHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MTI3MjEsImV4cCI6MjA2MzA4ODcyMX0.Mbxy4h8ZR0uDEoKgpRMPh_nb6u1K3rIkaadd646WqU0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
