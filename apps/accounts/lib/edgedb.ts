export { default as e } from 'dbschema/edgeql-js';
import * as edgedb from 'edgedb';

export const client = edgedb.createClient({
  instanceName: process.env.EDGEDB_INSTANCE,
  secretKey: process.env.EDGEDB_SECRET_KEY,
});
