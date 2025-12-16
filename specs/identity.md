# Identity Module Spec

## Goal
Provide a privacy-first identity layer that lets users operate using a stable human-readable handle (e.g., `@name`) while minimizing wallet linkage and metadata correlation.

## Scope
- Handle registration & lookup (logical layer, not necessarily on-chain in v1)
- Local authorization (PIN / device auth) for sensitive actions
- Persona management for separation of activity
- Session creation & lifecycle (high-level)
- Recovery model (high-level, policy-based)

## Non-Goals
- Custody of user funds/keys by default
- Public social graph or follower system
- KYC / real-world identity binding
- Claiming “perfect anonymity”

## Core Concepts
- **Handle**: Human-readable identifier (e.g., `@qelva`)
- **Identity Context**: Internal record describing an identity’s policies and derived components
- **Persona**: Operational profile used to reduce activity linkage (rotation/separation)
- **Session**: Short-lived authorization context for actions (local/private)

## Data Model (High-Level)
- **HandleRecord**
  - `handle`: string
  - `identityId`: string
  - `createdAt`: ISO string
  - `status`: `active | suspended | migrated`

- **IdentityContext**
  - `identityId`: string
  - `personaPolicy`: `{ count: number, rotation: "manual" | "auto", minIntervalSeconds?: number }`
  - `authPolicy`: `{ method: "pin" | "device", maxAttempts: number, lockSeconds: number }`
  - `createdAt`: ISO string

- **PersonaDescriptor**
  - `personaId`: string
  - `label`: string
  - `status`: `active | archived`
  - `createdAt`: ISO string

- **SessionToken** (local-only)
  - `sessionId`: string
  - `identityId`: string
  - `issuedAt`: ISO string
  - `expiresAt`: ISO string

## Flow
```mermaid
flowchart LR
A[Choose Handle] --> B[Setup Local Auth]
B --> C[Create Identity Context]
C --> D[Create Personas]
D --> E[Issue Session Token]
E --> F[Use Qelva Features]
