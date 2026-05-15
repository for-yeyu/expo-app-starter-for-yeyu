import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { z } from 'zod';

const envFileNames = ['.env.development', '.env.production'];

const publicEnvSchema = z.object({
  EXPO_PUBLIC_ENVIRONMENT: z.enum(['development', 'production']),
  EXPO_PUBLIC_API_BASE_URL: z.url().optional(),
});

for (const envFileName of envFileNames) {
  const envFilePath = resolve(process.cwd(), envFileName);

  if (!existsSync(envFilePath)) {
    throw new Error(`${envFileName} is required`);
  }

  const envText = readFileSync(envFilePath, 'utf8');
  const env = Object.fromEntries(
    envText
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#') && line.includes('='))
      .map((line) => {
        const separatorIndex = line.indexOf('=');
        const key = line.slice(0, separatorIndex);
        const value = line.slice(separatorIndex + 1).replace(/^['"]|['"]$/g, '');

        return [key, value];
      }),
  );

  publicEnvSchema.parse(env);
}
