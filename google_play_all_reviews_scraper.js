console.log("File will be deleted in case it already exists!");

var fs = require('fs'),
    readline = require('readline');

var gplay = require('google-play-scraper');

var rd = readline.createInterface({
    input: fs.createReadStream('app.txt'),
    // output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    
	gplay.app({appId: line}).then(obj => {
		
		console.log("Extracting reviews from: " + line);
		
		console.log("Total review count for app: " + line + " is: " + obj.reviews);
		
		var tReviewPages = Math.ceil(obj.reviews / 40); // Google store 40 reviews in single page
		
		delFile("reviews/" + line + ".review");
		
		console.log("Saving reviews from " + tReviewPages + " pages");
		
		for (i = 0; i < tReviewPages; i++) {
			
			var review = gplay.reviews({
			  appId: line,
			  page: i,
			  fullDetail: true,
			  sort: gplay.sort.NEWEST
			}).then(obj => {
				appendToFile("reviews/" + line + ".review", obj);
			});
		}
		
		delFile("details/" + line + ".detail");
		
		console.log("Saving details");
		appendToFile("details/" + line + ".detail", obj);
		
		console.log("\n");
	});
	
});

function appendToFile(filename, obj) {
	fs.appendFileSync(filename, JSON.stringify(obj,null,'\t'), 'utf-8', function(err) {
		if(err) { console.log(err); }
	});		
}

function delFile(fileName) {
	fs.unlink(fileName, (err) => {
		if (!err) {
			// console.log("Deleting existing file " + fileName);
		}
	});
}
