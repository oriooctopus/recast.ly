class Search extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchValue: event.target.value
    })
    this.handleSubmit();
  }

  handleSubmit(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.props.changeVideoData.call(this, this.state.searchValue)
  }

  render() {

    return (
      <form className="search-bar form-inline" onSubmit={this.handleSubmit} >
        <input className="form-control" type="text" onChange={this.handleChange} value={this.state.searchValue} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form> 
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
