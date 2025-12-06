# Qelva Core  
### Privacy-Native Identity & Transaction Layer for Solana  
**Status:** Beta • Under Active Development  

Qelva Core is the main monorepo powering the **Qelva privacy stack** — a minimal, practical, and developer-first identity & transaction system built for Solana.

This repository contains all modules required to run the Qelva architecture:

- **Backend API** (beta)
- **Client app** (placeholder)
- **Relayer node** (placeholder)
- **Shared proto types**
- **Future SDK packages**

Even though Qelva is currently in beta, every component is designed around **non-custodial privacy**, **multi-persona identity**, and **intent-based execution**.

---

## 🔐 Core Concepts

### Identity Layer *(coming soon)*  
- Username + PIN onboarding  
- Local-only key generation  
- No seed phrase exposure  
- Persona-scoped identity system  

---

## 🧩 Intent Model

Qelva runs on **intents**, not raw transactions.

### Minimal TypeScript Model

```ts
export interface TransferIntent {
  id: string;
  fromPersonaId: string;
  toAddress: string;
  tokenMint: string;
  amountLamports: string;
  createdAt: string;
}
Client (signs intent)
    ↓
Backend (validates + queues)
    ↓
Relayer (executes on Solana)

```ts

## Monorepo Structure (Current Beta)
qelva-core/
├─ apps/
│  ├─ backend/        → Backend API (Node/Express, TS target)
│  ├─ client/         → Web client (placeholder)
│  └─ relayer/        → Relayer node (placeholder)
│
├─ packages/
│  ├─ proto/          → Shared types (planned)
│  └─ utils/          → Shared helpers (planned)
│
├─ LICENSE
├─ README.md
└─ package.json

GET /health
POST /intents/transfer
Content-Type: application/json

Example (TypeScript):

const intent: TransferIntent = {
  id: 'intent-1',
  fromPersonaId: 'persona-main',
  toAddress: 'So11111111111111111111111111111111111111112',
  tokenMint: 'So11111111111111111111111111111111111111112',
  amountLamports: '1000000',
  createdAt: new Date().toISOString()

GET /intents
{
  "count": 1,
  "items": [...]
}

git clone https://github.com/QelvaLabs/Qelva-core.git
cd qelva-core
npm install
npm run dev:backend
```
**Docs:**
- [Docs index](./docs/README.md)
- [Threat model](./docs/privacy/0-threat-model.md)
- [Metadata & leakage](./docs/privacy/1-metadata-leakage.md)



