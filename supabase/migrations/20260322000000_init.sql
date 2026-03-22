create extension if not exists "pgcrypto";

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name text not null check (name in ('Max', 'Anna')),
  created_at timestamptz not null default now()
);

create table if not exists tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bg_color text not null,
  text_color text not null,
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

create type item_status as enum ('open', 'done', 'follow_up');

create table if not exists topics (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  notes text,
  tag_id uuid references tags(id),
  is_urgent boolean not null default false,
  proposed_date timestamptz,
  status item_status not null default 'open',
  created_by uuid references users(id),
  assigned_to uuid references users(id),
  parent_id uuid references topics(id),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  notes text,
  tag_id uuid references tags(id),
  is_urgent boolean not null default false,
  status item_status not null default 'open',
  created_by uuid references users(id),
  assigned_to uuid references users(id),
  parent_id uuid references tasks(id),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  subscription jsonb not null,
  created_at timestamptz not null default now()
);
