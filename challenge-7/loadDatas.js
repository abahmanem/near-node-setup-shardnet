```java
const request = require('request');
const { Pool, Client } = require("pg");
const pool = new Pool({
  user: "superset",
  host: "xxx.xxx.xxx.xxx",
  database: "stakewars_iii",
  password: "xxxxxxxxxxxxx",
  port: 5432,
});

//RPC Call
let options = {
    url: "http://xxx.xxx.xxx.xxx:3030",
    method: "post",
    headers:
    {
     "content-type": "Application/json"
    },

    body: JSON.stringify( {"jsonrpc": "2.0", "id": "dontcare",  "method": "validators",  "params": [null]})
};


request(options, (error, response, body) => {
    if (error) {
        console.error('An error has occurred: ', error);
    } else {
           var data = JSON.parse(body);
           var current_validators= data['result']['current_validators'];

               const inserts = [
            "account_id",
            "public_key",
            "is_slashed",
            "num_expected_blocks",
            "num_produced_blocks",
            "num_expected_chunks",
            "num_produced_chunks",
            "shards",
            "stake",
            "rpc_timestamp"
                               ];

          current_validators.forEach(function(e){
         
          console.log('inserting new data for ', e['account_id']);
					let now_date = new Date();
					// current date
  				let date = ("0" + now_date.getDate()).slice(-2);
					// current month
					let month = ("0" + (now_date.getMonth() + 1)).slice(-2);
	  			// current year
					let year = now_date.getFullYear();
														
		  		// current hours
					let hours = now_date.getHours();
																			
			  	// current minutes
				  let minutes = now_date.getMinutes();
																				
					// current seconds
					let seconds = now_date.getSeconds();
																				
					var ts = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
					var values = "'"+e['account_id']+"','"+e['public_key']+"','"+e['is_slashed']+"','"+e['num_expected_blocks']+"','"+e['num_produced_blocks']+"','"+e['num_expected_chunks']+"','"+e['num_produced_chunks']+"','"+e['shards']+"','"+e['stake']+"','"+ts+"'";
					
					let sqlString = `INSERT INTO current_validators(${inserts}) VALUES(${values})`;
					pool.query(sqlString,(err, res) => {
					         console.log(err, res);
						       // pool.end();
						       }
						       );
						   });
			  }
																				
});
//pool.end();
```
