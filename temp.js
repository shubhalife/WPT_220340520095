// Name :Shubham Kandekar rollno: 220340520095 centre:JH 
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');

app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'shubham',
    password: 'welcome123',
    database: 'wpt',
	port:3306
});

app.get("/getBook",(req,resp)=>{
	// console.log("hello im in  getbook server console ");

	let output={status: false , details :{ bookid: 1, bookname: 'english', price: 10 }};
    connection.query('select * from book where bookid=?',[req.query.in],(error,rows)=>{
		// console.log(rows);
		if(rows.length>0){
			output.status=true;
			output.details=rows[0];
		}
        resp.send(output);

}
);  
});


//==============================================================================

app.get("/updateBook",(req,resp)=>{
	// console.log("hello im in  updateBook server console ");

	let output={status: false };
    connection.query('update book set price=? where bookid=?',[req.query.price,req.query.id],(error,seen)=>{
		// console.log(rows);


		if(error){
			console.log("error occured in updating book details");
		}
		else if(seen.affectedRows>0){
			output.status=true;
		}
		
        resp.send(output);

}
);  
});


















app.listen(8081, function () {
    console.log("server listening at port 8081...");
});


// var result;

// app.post('/poc1', function (req, res) {
	
// 		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
//     	var xyz ={ v1:37, v2:35};
//         res.send(xyz);
//     });


// app.get('/poc2', function (req, res) {
    
	
//         console.log("reading input " + req.query.xyz);
		
//     	var xyz ={ v1:37, v2:35};

// 		res.send(xyz);

// 		});




