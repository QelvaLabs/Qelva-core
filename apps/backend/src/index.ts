import express, { Request, Response } from 'express';
import cors from 'cors';
import { TransferIntent } from '../../../packages/proto/src';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'qelva-backend',
    version: '0.1.0-beta'
  });
});

// In-memory store for intents (beta only)
const intents: TransferIntent[] = [];

// Helper: required keys
const REQUIRED_KEYS: (keyof TransferIntent)[] = [
  'id',
  'fromPersonaId',
  'toAddress',
  'tokenMint',
  'amountLamports',
  'createdAt'
];

// POST /intents/transfer
app.post('/intents/transfer', (req: Request, res: Response) => {
  const body = req.body as Partial<TransferIntent>;

  const missing = REQUIRED_KEYS.filter((key) => !body[key]);

  if (missing.length > 0) {
    return res.status(400).json({
      ok: false,
      error: 'INVALID_INTENT',
      missing
    });
  }

  const intent = body as TransferIntent;
  intents.push(intent);

  return res.status(201).json({
    ok: true,
    id: intent.id
  });
});

// GET /intents
app.get('/intents', (_req: Request, res: Response) => {
  res.json({
    count: intents.length,
    items: intents
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Qelva backend (TS) listening on http://localhost:${PORT}`);
});
