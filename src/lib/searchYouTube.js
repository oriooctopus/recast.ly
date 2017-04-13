var searchYouTube = (options, callback) => {
	console.log(callback);
  $.ajax({
  	type: 'GET',
  	dataType: 'json',
  	data: $.extend({
			key: options.key,
			q: options.query,
			part: 'snippet',
			type: 'video',
			videoEmbeddable: true
		}, {maxResults: options.max}),
  	url: "https://www.googleapis.com/youtube/v3/search",
  	success: function(data) {
  		console.log(data);
  		callback(data.items);
  	},
  	error: function(data) {
  		console.log(data);
  	}
  })
};
window.searchYouTube = searchYouTube;
// searchYouTube();