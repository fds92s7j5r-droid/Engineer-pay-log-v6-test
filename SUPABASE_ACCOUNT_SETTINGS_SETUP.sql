-- Engineer Pay Log account settings sync setup
-- TEST PROJECT ONLY for the V8.3.1 Cloud / Account Settings Sync milestone.
-- Run once in Supabase SQL Editor before testing the new build.

create table if not exists public.user_settings_v1 (
  user_id uuid not null references auth.users(id) on delete cascade,
  setting_key text not null,
  setting_value jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, setting_key)
);

alter table public.user_settings_v1 enable row level security;

drop policy if exists "Users can view own settings" on public.user_settings_v1;
create policy "Users can view own settings"
on public.user_settings_v1
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can insert own settings" on public.user_settings_v1;
create policy "Users can insert own settings"
on public.user_settings_v1
for insert
to authenticated
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update own settings" on public.user_settings_v1;
create policy "Users can update own settings"
on public.user_settings_v1
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete own settings" on public.user_settings_v1;
create policy "Users can delete own settings"
on public.user_settings_v1
for delete
to authenticated
using ((select auth.uid()) = user_id);

grant select, insert, update, delete on table public.user_settings_v1 to authenticated;
