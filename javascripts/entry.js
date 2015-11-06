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
	["bootstrap", "catfood", "dogfood", "app"],
	function(bootstrap, catfood, dogfood, app){
		catfood.food(app.taDom);
		dogfood.food(app.taDom);

		console.log("catfood", catfood.food);
		console.log("dogfood", dogfood.food);
		console.log("app", app.taDom);
	}
	);