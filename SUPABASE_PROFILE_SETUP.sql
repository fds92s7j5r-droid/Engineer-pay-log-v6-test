-- Engineer Pay Log account profile setup
-- Run once in Supabase SQL Editor for the test project.

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  ibm_number text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

grant select, update on table public.profiles to authenticated;

create or replace function public.handle_new_engineer_pay_log_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (user_id, full_name, ibm_number)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'ibm_number', '')
  )
  on conflict (user_id) do update
    set full_name = excluded.full_name,
        ibm_number = excluded.ibm_number,
        updated_at = now();
  return new;
end;
$$;

drop trigger if exists on_engineer_pay_log_user_created on auth.users;
create trigger on_engineer_pay_log_user_created
after insert on auth.users
for each row execute procedure public.handle_new_engineer_pay_log_user();

-- Backfill profile rows for existing test accounts. Their name/IBM may remain blank
-- if those accounts were created before Engineer Pay Log collected profile details.
insert into public.profiles (user_id, full_name, ibm_number)
select
  id,
  coalesce(raw_user_meta_data ->> 'full_name', ''),
  coalesce(raw_user_meta_data ->> 'ibm_number', '')
from auth.users
on conflict (user_id) do nothing;
