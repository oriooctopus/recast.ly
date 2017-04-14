class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videoData: [],
			currentVideo: exampleVideoData[0],
			shouldAutoplay: 0
		};
	}

	componentDidMount() {
	  this.changeVideoData('')
	}

  changeVideo(elementClicked) {
	  this.setState({
		  currentVideo: this.state.videoData[elementClicked]
	  });
  }

  toggleAutoplay() {
    this.setState({
    	shouldAutoplay: (this.state.shouldAutoplay) ? 0 : 1
    })
    console.log(this.state.shouldAutoplay);
  }

  changeVideoData(searchValue) {

  	this.props.searchYouTube( { key: YOUTUBE_API_KEY, query: searchValue, max: 10, autoplay: this.state.shouldAutoplay }, 
										(data) => {
											this.setState({
												videoData: data,
												currentVideo: data[0]
											})
										})
		
  }

	render() {

		return (

			<div>
		    <Nav changeVideoData={this.changeVideoData.bind(this)} toggleAutoplay={this.toggleAutoplay.bind(this)} />
		    <div className="col-md-7">
		      <VideoPlayer video={this.state.currentVideo} shouldAutoplay={this.state.shouldAutoplay} />
		    </div>
		    <div className="col-md-5">
		      <VideoList myClick={this.changeVideo.bind(this)} videos={this.state.videoData}/>
		    </div>
		  </div>

		)
	}
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
