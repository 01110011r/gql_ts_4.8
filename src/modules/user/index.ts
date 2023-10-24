import fs from 'fs';
import path from 'path';
import { resolvers } from './resolvers';

const td=fs.readFileSync(path.join(process.cwd(), "src", "modules", "user", "schema.gql"), "utf-8");



export default{td, resolvers};