-- Drop the table if it exists (to start fresh)
DROP TABLE IF EXISTS public.bookmarks CASCADE;

-- Create bookmarks table
CREATE TABLE public.bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  companion_id UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, companion_id)
);

-- Add foreign key constraint to companions table
ALTER TABLE public.bookmarks
ADD CONSTRAINT bookmarks_companion_id_fkey
FOREIGN KEY (companion_id)
REFERENCES public.companions(id)
ON DELETE CASCADE;

-- Create index for faster queries
CREATE INDEX bookmarks_user_id_idx ON public.bookmarks(user_id);
CREATE INDEX bookmarks_companion_id_idx ON public.bookmarks(companion_id);

-- Disable Row Level Security (since you're using Clerk for auth, not Supabase Auth)
ALTER TABLE public.bookmarks DISABLE ROW LEVEL SECURITY;
