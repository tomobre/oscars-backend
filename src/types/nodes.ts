interface FetchData {
  asn: string;
  id: number;
  jsonrpc: string;
}

export interface NodeInfo extends FetchData {
  result: NodesResult;
}

export interface BlockInfo extends FetchData {
  result: BlockResult;
}

interface NodesResult {
  block_hash: string;
  hardfork: number;
  height: number;
  service_node_states: Node[];
  snode_revision: number;
  status: string;
  target_height: number;
}

interface BlockResult {
  block_size_limit: number;
  block_size_median: number;
  block_weight_limit: number;
  block_weight_median: number;
  cumulative_difficulty: number;
  database_size: number;
  devnet: boolean;
  difficulty: number;
  hard_fork: number;
  height: number;
  immutable_block_hash: string;
  immutable_height: number;
  mainnet: boolean;
  nettype: string;
  offline: boolean;
  ons_counts: number[];
  pulse_ideal_timestamp: number;
  pulse_target_timestamp: number;
  status: string;
  status_line: string;
  target: number;
  target_height: number;
  testnet: boolean;
  top_block_hash: string;
  tx_count: number;
  tx_pool_size: number;
  untrusted: boolean;
  version: string;
}

export interface Node {
  active: boolean;
  contributors: unknown;
  decommission_count: number;
  earned_downtime_blocks: number;
  funded: boolean;
  last_reward_block_height: number;
  last_reward_transaction_index: number;
  last_uptime_proof: number;
  lokinet_first_unreachable: number[];
  lokinet_last_reachable: number;
  lokinet_last_unreachable: number;
  lokinet_reachable: boolean;
  lokinet_version: number[];
  operator_address: string;
  portions_for_operator: number;
  pubkey_ed25519: string;
  pubkey_x25519: string;
  public_ip: string;
  quorumnet_port: number;
  registration_height: number;
  registration_hf_version: number;
  requested_unlock_height: number;
  service_node_pubkey: string;
  service_node_version: number;
  staking_requirement: number;
  state_height: number;
  storage_lmq_port: number;
  storage_port: number;
  storage_server_first_unreachable: number;
  storage_server_last_reachable: number;
  storage_server_last_unreachable: number;
  storage_server_reachable: boolean;
  storage_server_version: number[];
  swarm_id: number;
  total_contributed: number;
  total_reserved: number;
}
