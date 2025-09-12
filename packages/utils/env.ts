// import { readFileSync } from 'fs';
// import { resolve } from 'path';

// const envPath = resolve(process.cwd(), '.env');

// try {
//   const content = readFileSync(envPath, 'utf-8');
//   content.split('\n').forEach((line) => {
//     const trimmed = line.trim();
//     if (!trimmed || trimmed.startsWith('#')) return;

//     const eqIndex = trimmed.indexOf('=');
//     if (eqIndex === -1) return; // invalid line, ignore

//     const key = trimmed.slice(0, eqIndex).trim();
//     const value = trimmed.slice(eqIndex + 1).trim();

//     if (key) process.env[key] = value;
//   });
// } catch {
//   // ignore if it doesn't exist .env
// }
