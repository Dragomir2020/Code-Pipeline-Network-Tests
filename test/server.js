
//////////////////////////////////////////////////////////////////////////////
//MOCHA UNIT TESTING
//////////////////////////////////////////////////////////////////////////////

/////////////////
//CONTRIBUTIONS//
/////////////////

////DATE///////////NAME/////////////////DESCRIPTION////////////////////////////
//  04/19/2017     Dillon Dragomir      Initialize file 
//  04/20/2017     Dillon Dragomir      Get network tests to fail when they should

////////////////
//DEPENDANCIES//
////////////////
var expect = require("chai").expect;
var request = require("request");

////////
//CODE//
////////

//Main Heading
describe("Color Code Converter API", function() {
	//Sub heading
  describe("RGB to Hex conversion", function() {
	  //Invocation URL
	  var url = "http://express-mustache.us-west-2.elasticbeanstalk.com/rgbToHex?red=255&green=255&blue=255";
	//Check for status 200 from the server
    it("returns status 200", function(done) {
		request(url, function(error, response, body){
			if(error){
				throw Error(error);
			} else {
				expect(response.statusCode).to.equal(200);
			}
			done();
		});
		//expect(response.statusCode).to.equal(200);
	});
	//Check for correct conversion
    it("returns the color in hex", function(done) {
		request(url, function(error, response, body){
			if(error){
				throw Error(error);
			} else {
				expect(body).to.equal("ffffff");
			}
			done();
		});
	});
  });
  
  describe("Hex to RGB conversion", function(done) {
	  //Invocation URL
	  var url = "http://express-mustache.us-west-2.elasticbeanstalk.com/hexToRgb?hex=00ff00";
	//Check for status 200 from the server
    it("returns status 200", function(done) {
		request(url, function(error, response, body){
			if(error){
				throw Error(error);
			} else {
				expect(response.statusCode).to.equal(200);
			}
			done();
		});
	});	
	//Check for correct conversion
    it("returns the color in RGB", function(done) {
		request(url, function(error, response, body){
			if(error){
				throw Error(error);
			} else {
				expect(body).to.equal("[0,255,0]");
			}
			done();
		});
	});

  });

});
