var database = require('./db.js');

database.connect(function(err){
	qoutes=require('./qoutes.js');
	qoutes.seed(function(err,flag){
      if(flag)
      {
      	console.log("seeded successfully");
      }
      else{
          console.log("malyana ya brens");
      }
	})
});


require('./app.js').listen(3000, function() {
       console.log('app listening on port 3000!');