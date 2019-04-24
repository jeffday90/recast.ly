import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      video: exampleVideoData[0],
      //the current videos displayed on the screen
      videos: exampleVideoData,
      value: null
    };
  }
  
  //first search upon initialization


  eventHandler(videoObj){
    this.setState({
      video: videoObj
    });
  }

  

  handleChange(event){ 
    this.setState({
      value: event.target.value
  })
    console.log('handle change state value:' + this.state.value)
  }

  stateSet(data){
    this.setState({
      videos: data.items
    })
  }

  handleSubmit(){
    //THIS WORKS!!!!!!!
    searchYouTube(this.state.value, (data) => this.setState({videos:data}));
  }

  
  render (){
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search query={this.handleChange.bind(this)} submit={this.handleSubmit.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} click={this.eventHandler.bind(this)}/>
              
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
