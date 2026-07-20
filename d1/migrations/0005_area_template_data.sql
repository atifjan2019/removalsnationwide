-- Structured content for CMS-created area pages using the canonical BoroughPage template.
alter table areas add column template_data text not null default '{}';
