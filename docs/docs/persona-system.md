# Qelva Persona System

Personas are isolated wallet identities inside a single Qelva account.  
Each persona derives its own keypair and maintains its own balance, settings, and transaction history.

---

## 1. Why Personas Exist
- **Identity Separation**: Prevents all activity from being tied to a single address  
- **Enhanced Privacy**: Each persona has its own unlinkable address  
- **Risk Isolation**: A compromised persona does not affect others  
- **Use-Case Flexibility**: Trading, savings, payments, private spending, etc.  

---

## 2. Persona Structure
A persona contains:

- `id` — Unique identifier  
- `name` — User-defined label  
- `address` — Solana public key  
- `encryptedPrivateKey` — Private key encrypted with the user’s PIN  
- `balance` — SOL balance  
- `isHighPrivacy` — Default private transaction mode  
- `notes` — Optional user notes  
- `createdAt` — Timestamp  
- `derivationIndex` — Key derivation index from mnemonic  

---

## 3. Key Derivation Model
Personas use deterministic generation:

mnemonic + derivationIndex → seed → keypair

This allows full recovery using only the recovery phrase.

---

## 4. Creating a Persona
1. User enters name + PIN  
2. Qelva decrypts mnemonic locally  
3. Derives new keypair using next index  
4. Encrypts private key  
5. Stores persona under user namespace  

No private key ever leaves the device.

---

## 5. Persona Security
- Mnemonic and keys are always encrypted with PIN  
- LocalStorage is namespaced per user  
- Private keys are only decrypted in-memory  
- PIN is required for key export  
- No persona data is sent to any server  

---

The persona system is the core of Qelva’s privacy model — enabling multi-identity usage, unlinkable on-chain behavior, and safer operational boundaries.
