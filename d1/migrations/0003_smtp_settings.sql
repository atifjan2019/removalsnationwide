-- Admin-managed SMTP configuration. The password is AES-GCM encrypted by the
-- application before it is stored; the encryption key remains a Worker secret.
alter table settings add column smtp_host text not null default '';
alter table settings add column smtp_port integer not null default 2525;
alter table settings add column smtp_username text not null default '';
alter table settings add column smtp_password_encrypted text not null default '';
alter table settings add column smtp_from_email text not null default '';
alter table settings add column smtp_from_name text not null default '';
