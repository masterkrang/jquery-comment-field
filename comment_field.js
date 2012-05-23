(function( $ ) {
	
	
	$.fn.comment_field = function(options) {
		
		var defaults = {
			stretch : true // stretches vertically as on types
			/*
			ll : '37.787920,-122.407458', //default to SF since it's well known
			v : '20120515', //the date of the foursquare api version
			limit : 10, //perhaps an option to ignore limits
			client_id : "YOUR_FS_CLIENT_ID", //get this from foursquare.com
			client_secret : "YOUR_FS_CLIENT_SECRET", //same
			style_results: true //set to false if the way i control the position of results, you can do it yourse
								//the default is to be right under the input and match the width of the input
								//and hopefully to adjust in a responsive way
			*/
		}
		//TODO would be cool to include a "schema : 'something.something.minivenues" in case your results had a different json structure
		
		opts = $.extend(defaults, options);
		
		
		this.keypress(function(e) {
			var code = event.keyCode || event.which;
			if(code == 13) {

				//note: this will disable typing if outside of
				e.preventDefault();
				//enter key was pressed

				//TODO error handling for spaces or html formatted stuff / injection attacks?????

				//call submit on the parent form
				//get form object
				var form = this.parents("form:first");
				//this works too
				//var form = $(this).closest('form');


				form.ajaxSuccess(function (e, x) {
					//alert(x.message);
					$(this).find("textarea").val("");
				});


				// TODO ajax submit this and have some logic for json dealing with the response to show the comment
				form.submit();
			}



			//not sure if return false is needed, the idea is to stop a regular enter press from registering
			//return false;
		});
		
		
	};
	
})( jQuery );


