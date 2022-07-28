import { spawnSync } from 'child_process';

const MAX_BUFFER_SIZE = 10 * 1024 * 1024;

export function shell(command: string, ...args: string[]): string {
  const proc = spawnSync(command, args, { maxBuffer: MAX_BUFFER_SIZE, encoding: 'utf-8' });

  if (proc.error) {
    throw new Error(proc.error.message);
  }

  if (proc.status !== 0) {
    throw new Error(`non-zero exist code ${proc.status}: ${proc.stdout} ${proc.stderr}`);
  }

  return proc.stdout;
}