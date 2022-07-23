


# Apache superSet
 
  Clone Superset's repo 
 
  ```bash
  git clone https://github.com/apache/superset.git
  ```
 
 Navigate to to the folder created:  
 
```bash
 cd superset
```
 
Run the following command 
  
 ```bash 
sudo docker-compose -f docker-compose-non-dev.yml pull
```

Edit docker-compose-non-dev.yml
 
 ```bash 
 vim docker-compose-non-dev.yml
 ```
  
  in order to expose postgresql port 5432,  add this to the db section :
  
  ```bash
  ports:
    - "5432:5432"
  ```
  
  Start superset in as a backgroud process:

```bash
sudo docker-compose -f docker-compose-non-dev.yml up -d
```



Connect to postgresql 
```bash
sudo docker exec -it superset_db bash

psql -U superset

```

Create a database for our challenge 

```bash
CREATE DATABASE stakewars3;
```
Connect to  the database 

```bash
\c stakewars3;
```

Create 2 tables for our challenge : current_validators and prev_epoch_kickout.

```bash
CREATE TABLE current_validators(
  account_id VARCHAR ( 250 ) NOT NULL,
	public_key VARCHAR ( 255 )  NOT NULL,
	is_slashed BOOLEAN  NOT NULL,
	num_expected_blocks INT NOT NULL,
	num_produced_blocks INT NOT NULL,
	num_expected_chunks INT NOT NULL,
	num_produced_chunks INT NOT NULL,
	shards  INT  NOT NULL,
	stake decimal   NOT NULL,
	epoch_height INT  NOT NULL,
	rpc_timestamp TIMESTAMP NOT NULL
);
```


```bash
CREATE TABLE prev_epoch_kickout(
  account_id VARCHAR ( 250 ) NOT NULL,
  epoch_height INT  NOT NULL,
  rpc_timestamp TIMESTAMP NOT NULL
);

```


We are going to populate these two tables using a node js script that does calls  to RPC endpiont every epoch.

## Node JS

  npm install pg

