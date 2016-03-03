var qoutes = require('./qoutes.json');
var database = require('./db.js');
var db = database.db();


exports.getElementByIndexElseRandom = function(array , index)
{
   if(index) {
   	 return qoutes[index];
   }
   else {
   	 var i = Math.floor(array.length*Math.random());
     return array[i];
   }
}

exports.getQuotesFromJSON = function()
{
  return qoutes;
}

exports.getQuoteFromJSON = function(index)
{
   return qoutes[index];
}

exports.seed = function(cb)
{
   var dbName = db.collection('qoutes');
   dbName.count(function (err,count){
   	if(!err && count==0)
   	{
   	   dbName.insert(qoutes,function(err,flag){
        	if(!err)
        		return cb(err,true);
        	     cb(err,false)

        });
   	}
   	else{
   		cb(err,false);
   	}
   });
}   

exports.getQuotesFromDB = function (cb)
{
   var qoutesToGet=[];
   var dbName = db.collection('qoutes');
   var x = dbName.find();
   x.each(function(err,q){
   	if(q!=null)
   	{
   		qoutesToGet.push(q);
   	}
   	else{
   		cb(err,qoutesToGet);
   	}
   });
}

exports.getQuoteFromDB = function(cb , index)
{
   
	this.getQuotesFromDB(function(err, quotes){
		if(index) {
			return cb(err, quotes[index]);
		} else {
			return cb(err, quotes[Math.floor(Math.random() * quotes.length)]);
		}
	});

}