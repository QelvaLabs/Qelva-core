# Privacy Layer Spec

## Goal
Reduce transaction linkage and behavioral metadata correlation while preserving execution reliability, user control, and predictable system behavior.

Privacy in Qelva is treated as a **configurable spectrum**, not a binary guarantee.

## Scope
- Transaction timing obfuscation
- Routing and relayer selection policy
- Persona-based separation
- Privacy mode enforcement
- Metadata minimization

## Non-Goals
- Absolute or provable anonymity under all threat models
- Zero-trust mixing guarantees in v1
- Obfuscation that breaks reliability or UX clarity
- Hiding user intent from the user themselves

## Core Concepts
- **Privacy Mode**: User-selected level of privacy behavior
- **Timing Window**: Controlled delay range applied before execution
- **Routing Policy**: Strategy for selecting execution relayers
- **Persona Separation**: Isolation between operational identities
- **Metadata Budget**: Limit on stored or exposed execution data

## Privacy Modes (Initial)

### Standard
- Minimal delay
- Deterministic routing preference
- Optimized for speed and reliability

### Enhanced
- Randomized delay within a bounded window
- Non-deterministic relayer selection
- Stronger persona separation

## Data Model (High-Level)

### PrivacyPolicy
- `mode`: `standard | enhanced`
- `delayWindowSeconds`: `{ min: number, max: number }`
- `personaStrategy`: `static | rotate`
- `routingStrategy`: `fixed | random`
- `metadataRetention`: `minimal`

## Flow
```mermaid
flowchart LR
A[Action or Task Triggered] --> B[Load Privacy Policy]
B --> C[Select Persona]
C --> D[Apply Delay Window]
D --> E[Select Routing Strategy]
E --> F[Send Execution Plan]
F --> G[Relayer Execution]
