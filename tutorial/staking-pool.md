
# Configure a staking pool

 ## Deploy a Staking Pool Contract
  create a new staking pool with the specified name, and deploys it to the indicated accountId by calling the staking pool factory

  ```bash
  near call factory.shardnet.near create_staking_pool '{"staking_pool_id": "<pool id>", "owner_id": "<accountId>", "stake_public_key": "<public key>", "reward_fee_fraction": {"numerator": 5, "denominator": 100}, "code_hash":"DD428g9eqLL8fWUxv8QSpVFzyHi1Qd16P8ephYCTmMSZ"}' --accountId="<accountId>" --amount=30 --gas=300000000000000
  ```
  repalace  : 
  
  - <pool id> with your account-id monikor 
  - <accountId> with your complete account-id, ie : xxxxx.shardnet.near
  - <public key> with your node public key (the one in file .near/validator_key.json)

 In our case : 

  ```bash
  near call factory.shardnet.near create_staking_pool '{"staking_pool_id": "ouiouane-01", "owner_id": "ouiouane-01.shardnet.near", "stake_public_key": "ed25519:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "reward_fee_fraction": {"numerator": 3, "denominator": 100}, "code_hash":"DD428g9eqLL8fWUxv8QSpVFzyHi1Qd16P8ephYCTmMSZ"}' --accountId="ouiouane-01.shardnet.near" --amount=30 --gas=300000000000000
  ```

  if successful, you will see the following :
  
  ![node_04](assets/staking/staking_01.png "node_04") 
  
  

  You have  configured your Staking pool. You can see if your node is visible on https://explorer.shardnet.near.org/nodes/validators

  Deposit and Stake NEAR

  You can stake to your node by running the following command :

 ```bash
   ouiouane@Ubuntu-2004-focal-64-minimal:~/nearcore$ near call ouiouane-01.factory.shardnet.near deposit_and_stake --amount 1395 --accountId ouiouane-01.shardnet.near --gas=300000000000000
 ```
  if the staking transaction is successful , you will see the following output  :

![node_04](assets/staking/staking_02.png "node_04") 

  Ping 

 A ping should be issued each epoch to keep reported rewards current.

 to run a ping, use the following command:

   ```bash
   ouiouane@Ubuntu-2004-focal-64-minimal:~/nearcore$ near call ouiouane-01.factory.shardnet.near ping '{}' --accountId ouiouane-01.shardnet.near --gas=300000000000000
   ```

 if successful, you will see the following:

 ![node_04](assets/staking/ping_01.png "node_04") 
 


