import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/search_bar";
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDDY2hW0KGcKYsNJGuERlKWoCdXw0Y_SNw';




// Create a new compenent. Thid component should produce some html
class App extends Component {
  constructor(props){
//props in a class based component are available anywhere as this.props
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
       };
    this.videoSearch('surfboards');
    
}

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //update state with new list of videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });  
  }
  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 800);

  return (
    <div>
    <SearchBar onSearchTermChange = {videoSearch} />
    <VideoDetail video = {this.state.selectedVideo}/>
    <VideoList 
    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
    videos = {this.state.videos} />
    </div>
    );  
  }

}

//take this compenent's generated HTML and put it on the pafe (in the dom)

ReactDOM.render(<App/>, document.querySelector(
'.container'));
