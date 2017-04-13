// class VideoList extends React.Component {
//   constructor (videoData) {
//     super(videoData);
//     this.data = videoData;
//   }

//   render() {
    
//     return (

//       <div className="video-list media">
//         <VideoListEntry data={this.data.videoData[0].snippet} />
//         <VideoListEntry data={this.data.videoData[1].snippet} />
//         <VideoListEntry data={this.data.videoData[2].snippet} />
//         <VideoListEntry data={this.data.videoData[3].snippet} />
//         <VideoListEntry data={this.data.videoData[4].snippet} />
//       </div>

//     );
    
//   }
// }
var VideoList = (properties) => (
  

  <div className="video-list media">
    {
      properties.videos.map(function(element, index)  {
        return <VideoListEntry index={index} myClick={properties.myClick} video={properties.videos[index]} />
      })
    }
   
    
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;




// // PropTypes tell other developers what `props` a component expects
// // Warnings will be shown in the console when the defined rules are violated
// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
// window.VideoList = VideoList;
