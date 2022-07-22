


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
    - "5433:5432"
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
CREATE DATABASE stakeWars_iii;
```
Connect to  the database 

```bash
\c stakeWars_iii
```

Create a table for our challenge : current_validators

```bash
CREATE TABLE current_validators (
	account_id VARCHAR ( 250 ) PRIMARY KEY,
	is_slashed BOOLEAN  UNIQUE NOT NULL,
	num_expected_blocks INT NOT NULL,
	num_produced_chunks INT NOT NULL,
	public_key VARCHAR ( 255 ) UNIQUE  NOT NULL,
	shards  INT  NOT NULL,
	stake VARCHAR ( 255 )  NOT NULL,
	rpc_timestamp TIMESTAMP NOT NULL,
);
```



## Node JS

  npm install pg

