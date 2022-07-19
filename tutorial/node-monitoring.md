# Node monitoring

 * Checking the version of your node 

You can check the version of your node against the shardnet network version to see if you are up to date.
```bash
diff <(curl -s https://rpc.shardnet.near.org/status | jq .version) <(curl -s http://127.0.0.1:3030/status | jq .version)
```


 * Node service status
 
 you can check if your node is up and runing by runing the followng command:
 
 ```bash
 abahmane@Ubuntu-2004-focal-64-minimal ~ # sudo systemctl status neard
 
 ```
 
 If the node is up, it will print the following 
 
 ```bash
 ● neard.service - NEARd Daemon Service
     Loaded: loaded (/etc/systemd/system/neard.service; enabled; vendor preset: enabled)
     Active: **active (running)** since Tue 2022-07-19 15:53:34 CEST; 6h ago
   Main PID: 2918447 (neard)
      Tasks: 85 (limit: 77021)
     Memory: 21.8G
     CGroup: /system.slice/neard.service
             └─2918447 /home/abahmane/nearcore/target/release/neard run

Jul 19 22:04:41 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:04:41.462522Z  INFO stats: # 1015961 Gu6VuArUKFS3Mm7vNwcxjgSrmmgyn7V8AkP7qoE57iBR Validator | 97 validators 34 peers ⬇ 397 kB/s ⬆ 685 kB/s 0.60 bps 21.1 Tgas/s>
Jul 19 22:04:41 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:04:41.462848Z DEBUG stats: EpochId(`GiKXd3r5VQdxrvCKdcreSmQseYMD5fAbbS4fknnbnrgW`) Blocks in progress: 48 Chunks in progress: 0 Orphans: 0
Jul 19 22:04:51 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:04:51.463444Z  INFO stats: # 1015968 547RiG7qR5aQCJ4sf71f2FDTtRr5jmGNwdP8SZnbS9VE Validator | 97 validators 34 peers ⬇ 399 kB/s ⬆ 698 kB/s 0.70 bps 39.0 Tgas/s>
Jul 19 22:04:51 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:04:51.463759Z DEBUG stats: EpochId(`GiKXd3r5VQdxrvCKdcreSmQseYMD5fAbbS4fknnbnrgW`) Blocks in progress: 48 Chunks in progress: 0 Orphans: 0
Jul 19 22:05:01 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:01.464763Z  INFO stats: # 1015976 3JogYkQp9GJQuZo85LedJEQMhRBKHs7ELUUNbqs1oXgw Validator | 97 validators 34 peers ⬇ 388 kB/s ⬆ 677 kB/s 0.80 bps 38.7 Tgas/s>
Jul 19 22:05:01 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:01.465106Z DEBUG stats: EpochId(`GiKXd3r5VQdxrvCKdcreSmQseYMD5fAbbS4fknnbnrgW`) Blocks in progress: 48 Chunks in progress: 0 Orphans: 0
Jul 19 22:05:11 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:11.465567Z  INFO stats: # 1015983 GVkX1QHfjEdqSNnEwt85bJiL8Prhm4CTQ2dGzSW2iq7q Validator | 97 validators 34 peers ⬇ 403 kB/s ⬆ 694 kB/s 0.70 bps 38.3 Tgas/s>
Jul 19 22:05:11 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:11.465891Z DEBUG stats: EpochId(`GiKXd3r5VQdxrvCKdcreSmQseYMD5fAbbS4fknnbnrgW`) Blocks in progress: 48 Chunks in progress: 0 Orphans: 0
Jul 19 22:05:21 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:21.466860Z  INFO stats: # 1015991 HR1bvjYMEzGJhnBg6VYRVgLMUdbAbd8hKxFFb4XzQTxr Validator | 97 validators 34 peers ⬇ 402 kB/s ⬆ 716 kB/s 0.80 bps 31.6 Tgas/s>
Jul 19 22:05:21 Ubuntu-2004-focal-64-minimal neard[2918447]: 2022-07-19T20:05:21.467190Z DEBUG stats: EpochId(`GiKXd3r5VQdxrvCKdcreSmQseYMD5fAbbS4fknnbnrgW`) Blocks in progress: 48 Chunks in progress: 0 Orphans: 0
 
 ```
 
 ## Monitor using Near-cli
  
 * Check if Node is active (not slashed)
 
 You can **use near-cli** to see if your node is currently active
 
  * Get the next Epoch set of active validators:
 
 ```bash
  abahmane@Ubuntu-2004-focal-64-minimal ~ # NEAR_ENV=shardnet  near validators next 
 ```
 
 * Get the current set of active validators:
 
 ```bash
  abahmane@Ubuntu-2004-focal-64-minimal ~ # NEAR_ENV=shardnet  near validators current 
 ```
 
 * Check if yours is amongst them 
  
 ```bash
  abahmane@Ubuntu-2004-focal-64-minimal ~ # NEAR_ENV=shardnet  near validators current | grep abahmane.factory.shardnet.near
 ```
 
 If your node is not slashed, this command will print a line corresponding to your staking pool id :
 
 ```bash
 | abahmane.factory.shardnet.near           | 45,317    | 1       | 91.57%   |             100 |             127 |            1638 |            1771 |
 ```
 
  * Check your current stake

  You can use this command to check you total stake
  
   ```bash
  near validators current | awk '/<pool-id/ {print $4}'
   ```bash
   
 Example:
 
 ```bash
 abahmane@Ubuntu-2004-focal-64-minimal ~ # near validators current | awk '/abahmane.factory.shardnet.near/ {print $4}'
45,317
 
 ```
 
 
 * Kickout Sate next Epoch?
 
 You can run this command to see if your node won't be in the actiev slot next Epoch
 
 near validators next | grep "Kicked out" | grep "<POOL_ID>"
 
 Example : 
 
 ```bash
 abahmane@Ubuntu-2004-focal-64-minimal ~ # near validators next | grep "Kicked out" | grep "abahmane.factory.shardnet.near"
| Kicked out | abahmane.factory.shardnet.near                | -                | -       |
 ```
 
 
 
 if you are not in the list of current active validator, that means you have been kicked ou (slashed)
 To know the reason, run this command:
 
 ```bash
 curl -s -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' 127.0.0.1:3030 | jq -c '.result.prev_epoch_kickout[] | select(.account_id | contains ("<POOL_ID>"))' | jq .reason
 ```

## Monitor node using RPC endpoint
  
  Check if you will have a set in the next Eoch :

```bash
  curl -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' https://rpc.shardnet.near.org | jq -c '.result.next_validators[] | select(.account_id | contains ("<POOL_ID>"))'
  ```

Example: 
```bash
abahmane@Ubuntu-2004-focal-64-minimal ~ #```bash
 curl -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json'   https://rpc.shardnet.near.org | jq -c '.result.next_validators[] | select(.account_id | contains ("abahmane.factory.shardnet.near"))'
```

if the result is empty, you wont have a seat in the next active validator set.

If you are not in the current active slot, You can query the RCP endpoint about the last Epoch and see the reason why you were slashed :

```bash
 curl -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' https://rpc.shardnet.near.org | jq -c '.result.prev_epoch_kickout[] | select(.account_id | contains ("<pool-id>"))' | jq .reason
```

Example :

```bash
 abahmane@Ubuntu-2004-focal-64-minimal ~ # curl -d '{"jsonrpc": "2.0", "method": "validators", "id": "dontcare", "params": [null]}' -H 'Content-Type: application/json' \ https://rpc.shardnet.near.org | jq -c '.result.prev_epoch_kickout[] | select(.account_id | contains ("abahmane.factory.shardnet.near"))' | jq .reason
 ```
 
 gives :
 
 ```bash
 {
  "NotEnoughBlocks": {
    "expected": 619,
    "produced": 242
  }
}
 ```
 
# Grafana + Prometheus

