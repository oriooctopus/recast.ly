var searchYouTube = (options, callback) => {
  $.ajax({
  	type: 'GET',
  	dataType: 'json',
  	url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&mine=true',
  	success: function(data) {
  		console.log(data);
  	},
  	error: function(data) {
  		console.log(data);
  	}
  })
};

window.searchYouTube = searchYouTube;
searchYouTube();