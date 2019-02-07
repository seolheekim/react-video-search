import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  state = { videos: [] };

  //the Q property is specified to be called Q from the Youtube API Doc.
  handleSearchSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items })
  };


  render() {
    return (
      <div className="ui container">
        <SearchBar handleSearchSubmit = {this.handleSearchSubmit}/>
        I have {this.state.videos.length} videos.
      </div>
    )
  }
}

export default App;