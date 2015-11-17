$(document).ready(function(){

	$("#dropdown").change(function(){
		var lat = $(this).find("option:selected").data("lat");
		var lng = $(this).find("option:selected").data("lng");
		console.log(lat, lng);
			$(".search-results ul").empty();
			getResults(lat, lng);
			
	});

	
	var getResults = function(lat, lng){
	
		$.ajax({
		type: "GET",
		dataType: "JSONP",
		/*url: "https://api.instagram.com/v1/locations/" + locationID + "/media/recent?client_id=6c7648beda1e44a4abc36549c2b75c7d",*/
		url: "https://api.instagram.com/v1/media/search?lat=" + lat + "&lng=" + lng + "&client_id=6c7648beda1e44a4abc36549c2b75c7d",
		/*url: "https://api.instagram.com/v1/tags/paris/media/recent?callback=&client_id=6c7648beda1e44a4abc36549c2b75c7d",*/
		success: function(results){
			for(i=0; i<results.data.length; i++){
				var img = results.data[i].images.standard_resolution.url,
					photoTag = "<li><img src=" + img + "></li>";
				$(".search-results ul").append(photoTag);

				
			}
			console.log(results);
		}
	});
	}
});

/*48.8582, 2.2945 6889842*/