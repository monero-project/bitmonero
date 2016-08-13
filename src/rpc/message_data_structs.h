#pragma once

#include "crypto/hash.h"
#include "cryptonote_core/cryptonote_basic.h"
#include <unordered_map>
#include <vector>

namespace cryptonote
{

namespace rpc
{

  struct block_with_transactions
  {
    cryptonote::block block;
    std::unordered_map<crypto::hash, cryptonote::transaction> transactions;
  };

  struct transaction_info
  {
    cryptonote::transaction transaction;
    bool in_pool;
    uint64_t height;
  };

  struct output_key_and_amount_index
  {
    uint64_t amount_index;
    crypto::public_key key;
  };

  typedef std::vector<output_key_and_amount_index> outputs_for_amount;

  struct amount_with_random_outputs
  {
    uint64_t amount;
    outputs_for_amount outputs;
  };

  struct peer
  {
    uint64_t id;
    uint32_t ip;
    uint16_t port;
    uint64_t last_seen;
  };

  // hate to duplicate tx_memory_pool::tx_details here, but
  // including tx_pool.h seems unnecessarily heavy
  struct tx_in_pool
  {
    cryptonote::transaction tx;
    uint64_t blob_size;
    uint64_t fee;
    crypto::hash max_used_block_hash;
    uint64_t max_used_block_height;
    bool kept_by_block;
    crypto::hash last_failed_block_hash;
    uint64_t last_failed_block_height;
    uint64_t receive_time;

    // parameters present in tx_memory_pool::tx_details but
    // not in the old RPC.  May as well include.
    uint64_t last_relayed_time;
    bool relayed;
  };

}  // namespace rpc

}  // namespace cryptonote
