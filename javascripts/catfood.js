define(["jquery"], function($) {
	return {
		food: function(callBackFunction) {
			$.ajax({url: "data/catlist.json"}).done(callBackFunction);
		}
	}
});