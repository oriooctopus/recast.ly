// class Checkbox extends React.Component {
// 	constructor(props) {
//     super(props)
//     this.state = {
//       checked: 0
//     }
//   }

//   handleToggle() {

//   }

//   render() {
//     return (
//       <div id="checkbox">
//         Autoplay
//         <input type="checkbox" />
//       </div>
//     )
//   }
// }

var Checkbox = (props) => (
  <div id="checkbox">
    Autoplay
    <input type="checkbox" onClick={props.toggleAutoplay} />
  </div>
)