# How Qelva Works — Technical Overview

Qelva is a privacy-native identity and transaction system built on Solana.  
All core operations — key generation, persona derivation, encryption, privacy scoring, and transaction signing — are executed locally inside the user’s device. No private key, mnemonic, or sensitive identity data ever touches a backend.

---

## 1. Identity & Authentication Layer
Qelva uses a seedless onboarding flow:

- Username + 6-digit PIN  
- Local BIP39 mnemonic generation  
- Mnemonic encrypted with PIN and stored locally  
- Deterministic persona key derivation via `mnemonic + index`  

This model enables fast onboarding while preserving full self-custody.

---

## 2. Persona Architecture
Each persona is a fully isolated wallet identity with:

- Unique Solana address  
- Encrypted private key  
- Separate balance & activity history  
- Optional High Privacy mode  

Personas create unlinkable behavior patterns and reduce address clustering.

---

## 3. Storage System (Local-Only)
All data is stored inside browser LocalStorage, namespaced per user:

qelva_user_<username>
qelva_<username>personas
qelva<username>activity
qelva<username>_settings

This prevents cross-user leakage and keeps everything on the device.

---

## 4. Encryption Layer
Mnemonic and private keys are encrypted using a lightweight PIN-based XOR cipher wrapped in Base64.  
Decryption is only possible with the correct PIN.

No plaintext mnemonic or key is ever written to storage.

---

## 5. Blockchain Interaction
Qelva signs transactions locally and communicates directly with Solana RPC endpoints via a fallback mechanism (Alchemy → Ankr → Public RPC).

The system never proxies private keys or raw signatures through a backend.

---

## 6. Privacy Score Engine
A dynamic score (0–100) computed from:

- Activity Score (private vs normal transactions)  
- Persona Score (High Privacy usage + per-persona ratios)  

The score gives users feedback on how private their on-chain behavior is.

---

## 7. Roadmap Modules (In Development)
- Private Transfer (Split + Delay, relayer routing)  
- Mixer Module (client-side batching & mixing)  
- Automation Engine (local rule-based execution)  

---

Qelva is designed to operate as a fully client-side privacy layer, giving users complete control over identity, keys, and on-chain anonymity.
