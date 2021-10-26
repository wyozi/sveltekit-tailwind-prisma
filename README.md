<table>
<tr>
<td>
<h1>Development</h1>
Start dev: <code>pnpm dev</code>
</td>
<td>
<h1>Database</h1>

- Copy <code>.env.template</code> to <code>.env</code> and add connection string
  - Supabase: https://app.supabase.io/project/---project_id---/settings/database
- Generate Typescript client from schema.prisma: <code>pnpm db:generate</code>
- Push schema to remote db (dev only): <code>pnpm db:push</code>
</td>
</tr>
</table>