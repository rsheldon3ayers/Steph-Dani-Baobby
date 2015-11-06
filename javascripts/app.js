// call HBS
define(["jquery", "hbs"], function($, hbs) {
	return {
		taDom: function(food) {
			require(["hbs!../templates/template"], function(foodTemplate) {
				$("#main-container").append(foodTemplate(food));
					console.log(foodTemplate);
					console.log(food);
					console.log(foodTemplate(food));
			})
		}
	}
});