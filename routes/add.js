var data = require("../data.json");

exports.addFriend = function(request, response) {
   
	// Your code goes here
   var friend = {
      "name": request.query.name,
      "description": request.query.description,
      "imageURL": "http://lorempixel.com/500/500/people"
   }
   console.log(friend);
   data.friends.push(friend);
   response.render('index.handlebars', data);
}