
# near-node-setup-shardnet

In this guide, we will show how to setup a running node in Near Shardnet network.

## Hardware


**[Stake Wars](https://medium.com/nearprotocol/join-stake-wars-to-become-a-chunk-only-producer-52cb67b19f19)** main objective is to set up validator nodes called Chunk-Only Producers whose main purpose is to produce [chunks](https://near.org/papers/nightshade/#nightshade) in a single shard (a network partition).

These validators can mount their nodes on machines with less constraining specifications compared to a full validating node [hardware requirement](https://near-nodes.io/validator/hardware) on the Near mainnet network.
For this guide, we are using a [Hetzner](https://hetzner.com) cloud server with the following specifications : 

  - Server AMD Ryzen™ 5 3600
  - CPU:  6 cores / 12 threads @ 3.6 GHz
  - 64 GB DDR4 RAM
  - 2 x 512 GB NVMe SSD (Raid1)
  - price : 36 euros/month



  ![server](assets/node/server_hetzner.png "server")






The present tutorial aims to guide us in setting up a validator node on the shardnet network through the following 3 steps:



* [Create a Shardnet wallet](https://github.com/abahmanem/near-node-setup-shardnet/blob/main/create-wallet.md)


* [Deploy the node](https://github.com/abahmanem/near-node-setup-shardnet/blob/main/deploy-node.md)


* [Configure a staking pool](https://github.com/abahmanem/near-node-setup-shardnet/blob/main/staking-pool.md)

