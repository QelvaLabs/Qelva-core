# Relayer Spec

## Goal
Provide a privacy-aware and reliable execution layer that submits transactions on behalf of users or automation tasks without exposing sensitive linkage or behavioral metadata.

The relayer is treated as an **execution service**, not a trusted custodian.

## Scope
- Receive execution plans from client or automation engine
- Enforce execution and privacy policies
- Broadcast transactions to the network
- Handle retries and confirmations
- Return standardized receipts

## Non-Goals
- Custody of user funds
- Arbitrary transaction modification
- Long-term storage of sensitive execution data
- Acting as a privacy guarantee on its own

## Core Concepts
- **Execution Plan**: Immutable instruction set produced upstream
- **Policy Check**: Verification of execution and privacy constraints
- **Broadcast Strategy**: Method used to submit transactions
- **Receipt**: Minimal execution result returned to caller

## Responsibilities
- Validate execution plan structure
- Enforce delay and routing instructions
- Submit transactions reliably
- Apply bounded retry logic
- Minimize logging and retained metadata

## Data Model (High-Level)

### ExecutionPlan
- `planId`: string
- `taskId`: string (optional)
- `personaId`: string
- `action`: object (resolved and deterministic)
- `privacyPolicy`: object (resolved)
- `constraints`: `{ maxRetries: number, maxFeeUnits: number }`

### ExecutionReceipt
- `planId`: string
- `status`: `success | failed | retried`
- `attempts`: number
- `submittedAt`: ISO string (coarse)
- `confirmedAt`: ISO string (coarse, optional)
- `errorCode`: string (optional)

## Flow
```mermaid
flowchart LR
A[Receive Execution Plan] --> B[Policy & Constraint Check]
B --> C[Optional Delay Applied]
C --> D[Broadcast Transaction]
D --> E[Confirm or Retry]
E --> F[Generate Receipt]
F --> G[Return to Caller]
