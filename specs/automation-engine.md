# Automation Engine Spec

## Goal
Enable users to define and execute automated actions in a deterministic and privacy-aware manner without exposing behavioral metadata or creating uncontrolled execution risks.

## Scope
- Task definition and validation
- Time- and condition-based triggers
- Execution planning (pre-relayer)
- Privacy control integration
- Failure handling and status reporting

## Non-Goals
- Fully autonomous AI agents in v1
- Infinite or unbounded execution loops
- Hidden or opaque automation behavior
- Custodial execution of user funds

## Core Concepts
- **Task**: A user-defined automation unit
- **Trigger**: Condition that activates a task
- **Action**: Operation performed when triggered
- **Execution Plan**: Deterministic plan derived from task definition
- **Constraint**: Limits applied to execution (fees, retries, delay)

## Data Model (High-Level)

### AutomationTask
- `taskId`: string
- `ownerIdentityId`: string
- `trigger`: TriggerDescriptor
- `action`: ActionDescriptor
- `constraints`: ConstraintPolicy
- `status`: `active | paused | completed | failed`
- `createdAt`: ISO string

### TriggerDescriptor
- `type`: `time | interval | event`
- `config`: object (type-specific)

### ActionDescriptor
- `type`: `send_tx | call_program`
- `params`: object (bounded and validated)

### ConstraintPolicy
- `privacyMode`: `standard | enhanced`
- `delayWindowSeconds`: number
- `maxFeeUnits`: number
- `maxRetries`: number

## Flow
```mermaid
flowchart LR
A[Define Task] --> B[Static Validation]
B --> C[Persist Task]
C --> D[Trigger Evaluation]
D --> E[Build Execution Plan]
E --> F[Apply Privacy Controls]
F --> G[Send to Relayer]
G --> H[Receipt + Status Update]
