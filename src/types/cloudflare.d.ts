/**
 * The names the app has always used for its Cloudflare services. They used to
 * come from `wrangler types`; the app now reaches D1 and R2 over HTTP from
 * Vercel, and these aliases point the same names at the HTTP clients so the
 * data layer reads as it did.
 */
type D1Database = import("../lib/d1").D1HttpDatabase;
type D1PreparedStatement = import("../lib/d1").D1HttpPreparedStatement;
type R2Bucket = import("../lib/r2-client").R2HttpBucket;
