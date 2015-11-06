define(["jquery"], function($) {
	return {
		food: function(callBackFunction) {
			$.ajax({url: "data/doglist.json"}).done(callBackFunction);
		}
	}
});