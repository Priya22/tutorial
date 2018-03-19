var mongoClient = require('mongodb').MongoClient
var url = "mongodb://127.0.0.1:27017/today"

var posts = [ {user: "one", text: "I like Javascript"}, {user: "two", text: "I love python"}, {user: "three", text: "I like Ruby"}, {user: "four", text: "I like Java"}, {user: "five", text: "I love C."}]

mongoClient.connect(url, function(err,res){
	if(err) return console.log(err)
	//console.log("Created!")
	client = res
	db = client.db('today')

	//INSERT
	/*
	console.log(res)
	db.collection("posts").insertMany(posts, function(err, res){
	console.log(res);
	res.close()
	})
	*/

	//FIND	
	/*
	db.collection("posts").find({}).toArray(function(err, res){
		console.log(res)
		client.close()
	})
	*/
	
	//UPDATE
	
	/*

	db.collection("posts").updateOne({user:"four"}, {$set: {text: "I like JS too!"}}, function(err, res){
		console.log("Updated");
		client.close()
	});
	*/

	//ADD COMMENTS
	
	/*
	comments = [{user:"Q", comment:"yes"}, {user:"R", comment:"Hmm"}]
	post = {user: "KP", text:"And Perl!", comments: comments}
	db.collection("posts").insert(post, function(err,res){
	if(err) throw err;
	console.log("post inserted")
	client.close()
	});
	*/
	

		
	//MAP REDUCE - count number of friends of a user. Friends == people who have commented on the user's post.
	
	/*
	console.log("map reduce");
		
	var mapFunction = function(){
			//console.log(this)
			friends = this.comments.map(comment => comment.user)
			emit(this.user, friends);
		}
	var reduceFunction = function(cust_name, comments){
				//console.log(cust_name)
				//var res =  comments.reduce((accumulator, currentValue) => accumulator +","+ currentValue);
				var res = [].concat.apply([], comments);
				//var dataArray = Object.keys(comments[0]).map(function(k){return comments[0][k]});
				return res.length	;
		}
	db.collection("posts").mapReduce(mapFunction, reduceFunction, {query: {user:"KP"},out: "friends1"}, function(err, res){  if(err) throw err; console.log("done"); client.close(); });
	*/

	//FIND
	/*
	db.collection("friends1").find({}).toArray(function(err, res){
		console.log(res)
		client.close()
	})
	*/	
});






