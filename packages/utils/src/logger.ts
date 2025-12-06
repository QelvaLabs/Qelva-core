// Minimal logger for Qelva (can be replaced with real logger later)

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export function log(level: LogLevel, message: string, meta?: unknown) {
  const ts = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`[${ts}] [${level.toUpperCase()}] ${message}`, meta ?? '');
}
