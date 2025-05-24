-- Enable row level security for users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from authenticated users and service role
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON public.users;
CREATE POLICY "Allow insert for authenticated users"
ON public.users
FOR INSERT
TO authenticated, service_role
WITH CHECK (true);

-- Create policy to allow users to read their own data
DROP POLICY IF EXISTS "Users can view own data" ON public.users;
CREATE POLICY "Users can view own data"
ON public.users
FOR SELECT
TO authenticated
USING (auth.uid() = id);

-- Create policy to allow users to update their own data
DROP POLICY IF EXISTS "Users can update own data" ON public.users;
CREATE POLICY "Users can update own data"
ON public.users
FOR UPDATE
TO authenticated
USING (auth.uid() = id);

-- Create policy to allow service role to read all users
DROP POLICY IF EXISTS "Service role can read all users" ON public.users;
CREATE POLICY "Service role can read all users"
ON public.users
FOR SELECT
TO service_role
USING (true);

-- Add the users table to realtime publication
alter publication supabase_realtime add table public.users;