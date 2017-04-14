var searchYouTube = (options, callback) => {

  // var dfd = $.Deferred();
  // dfd.done((function(data) {
  //   console.log(data);
  //   return data;
  // }));


  return $.ajax({
  	type: 'GET',
  	dataType: 'json',
  	data: $.extend({
			key: options.key,
			q: options.query,
			part: 'snippet',
			type: 'video',
			videoEmbeddable: true
		}, {maxResults: options.max}),
  	url: `https://www.googleapis.com/youtube/v3/search?autoplay={options.autoplay}`,
  	success: function(data) {
  		callback(data.items);
  	},
  	error: function(data) {
  		console.log('error!', data);
  	}
  });

  return dataResult
};
window.searchYouTube = searchYouTube;
// var temp = searchYouTube( { key: YOUTUBE_API_KEY, query: 'happy', max: 10 }, (data) => {return data.responseJSON});
