/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'node:fs';

import { getFiles } from './files.js';

export const readFileContent = (filePath: string) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const isBinary = buffer.includes(0); // Simple check for null byte; consider more robust method
    if (isBinary) {
      return {
        data: buffer.toString('base64'),
        encoding: 'base64',
      };
    }
    return {
      data: buffer.toString('utf8'),
      encoding: 'utf8',
    };
  } catch (error) {
    // @ts-ignore
    process.stderr.write(`Error reading file ${filePath}: ${error.message}\n`);
    return process.exit(1);
  }
};

export const getContent = async () => {
  try {
    const files = (await getFiles()).filter((f) => fs.existsSync(f));

    const content = files.map((file) => {
      const { data, encoding } = readFileContent(file);

      return {
        data,
        file,
        ...(encoding === 'base64' && { encoding }),
      };
    });

    return content;
  } catch (error) {
    //@ts-ignore
    process.stderr.write(`${error.message}\n`);
    return process.exit(1);
  }
};
