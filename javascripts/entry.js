requirejs.config({
 baseUrl: "./javascripts",
 paths:{
   "jquery": "../lib/bower_components/jquery/dist/jquery.min",
   "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
   "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
 },
 shim : {
       "bootstrap" : { "deps" :['jquery'] }
   }
});

require(
	["jquery", "bootstrap", "catfood", "dogfood", "app"],
	function($, bootstrap, catfood, dogfood, app){
		catfood.food(app.taDom);
		dogfood.food(app.taDom);
		$("#cat-button").click(function() {
			$(".cat").toggleClass("hide");
			$(".dog").addClass("hide");
			$(".about").addClass("hide");
		});
		$("#dog-button").click(function() {
			$(".dog").toggleClass("hide");	
			$(".cat").addClass("hide");	
			$(".about").addClass("hide");
		});
		$("#about-button").click(function() {
			$(".about").toggleClass("hide");
			$(".dog").addClass("hide");	
			$(".cat").addClass("hide");	
		});

		console.log("catfood", catfood.food);
		console.log("dogfood", dogfood.food);
		console.log("app", app.taDom);
	}
	);
