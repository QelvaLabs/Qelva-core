// Types used by the Private Transfer module

export type TransferMode = "normal" | "split_delay" | "relayer"

export interface SplitDelayConfig {
  parts: number        // number of split transactions
  minDelayMs: number   // minimum delay between parts
  maxDelayMs: number   // maximum delay between parts
}

export interface RelayerStatus {
  online: boolean
  endpoint?: string
  latencyMs?: number
}
