# Threat Model (High-Level)

## Purpose
This document outlines the primary threats considered in Qelva’s design and the corresponding mitigation strategies.  
It is intended to guide development decisions and set realistic security and privacy expectations.

This is a **living document** and will evolve as the system matures.

## Assumptions
- The underlying blockchain network is publicly observable.
- Adversaries can analyze transaction timing, routing, and metadata.
- Client devices may be compromised.
- Relayers may be curious or partially malicious.
- Privacy is probabilistic, not absolute.

## Assets to Protect
- Linkage between identity handles and execution addresses
- Correlation between multiple user actions
- Automation intent and behavioral patterns
- Session authorization material
- Execution constraints (fees, retries, limits)

## Adversary Classes

### Passive Observers
- Blockchain analysts
- Network traffic observers
- Data aggregators

**Capabilities**
- Observe transaction timing and frequency
- Correlate public execution data
- Perform pattern analysis over time

### Active Attackers
- Spam and replay attackers
- Trigger manipulation attempts
- Resource exhaustion attacks

**Capabilities**
- Submit malformed requests
- Attempt repeated execution or replay
- Flood relayer endpoints

### Malicious or Curious Relayer
- Observes execution plans
- Attempts metadata retention
- Tries to infer user behavior

**Capabilities**
- Access to execution-level data
- Control over timing and broadcast order

### Compromised Client
- Stolen device
- Malware or keylogger
- Session leakage

**Capabilities**
- Access local session data
- Trigger unauthorized actions if not protected

## Primary Attack Surfaces
- Transaction timing correlation
- Repeated routing patterns
- Automation trigger regularity
- Relayer logs and telemetry
- Long-lived or reusable session tokens

## Mitigation Strategies

### Identity Layer
- Persona separation to reduce linkage
- Short-lived local sessions
- Explicit lockout and auth attempt limits
- No assumption that handles are anonymous

### Automation Engine
- Deterministic validation (no dynamic logic)
- Bounded retries and execution limits
- Immutable execution plans
- Clear failure states

### Privacy Layer
- Timing windows and jitter
- Non-deterministic routing (when enabled)
- Explicit privacy modes
- Metadata minimization by default

### Relayer
- Minimal and ephemeral logging
- Coarse timestamps only
- Strict policy enforcement
- Replay protection and rate limiting

### Client
- Local-only session tokens
- No long-lived server-side sessions
- Explicit re-authorization for sensitive actions

## Non-Mitigation (Explicitly Out of Scope)
- Protection against fully compromised user devices
- Hiding all activity from global adversaries
- Perfect unlinkability guarantees
- Trustless anonymity under all conditions

## Residual Risks
- Advanced statistical correlation over long periods
- User behavior patterns revealing intent
- Relayer collusion or infrastructure compromise
- UX trade-offs reducing effective privacy usage

## Design Principles Reinforced
- Privacy is configurable and explicit
- Reliability must not be sacrificed silently
- No hidden trust assumptions
- Fail closed rather than degrade silently
- Avoid privacy theater

## Open Questions
- Quantitative privacy metrics or scoring
- Trust minimization strategies for relayers
- Optional user-operated relayers
- External audits and disclosure process

## Status
Active and evolving
