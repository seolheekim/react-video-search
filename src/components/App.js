import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';


class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //the Q property is specified to be called Q from the Youtube API Doc.
  handleSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit = {this.handleSearchSubmit}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          handleVideoSelect={this.handleVideoSelect}
        />
      </div>
    )
  }
}

export default App;