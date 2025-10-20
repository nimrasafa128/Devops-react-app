// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Gets the quoted value
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Gets the quoted value

export const supabase = createClient(supabaseUrl, supabaseAnonKey);