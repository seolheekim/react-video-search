import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }; search

  //remember to assign as an arrow function when it is a callback that is going to pass to some child element.
  handleInputChange = (event) => {
    this.setState({ term : event.target.value })
  };

  handleFormSubmit = (event ) => {
    //to prevent from application refreshing when user hits enter.
    event.preventDefault()

    //TODO: Make sure to call callback from parent component
    this.props.handleSearchSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit = {this.handleFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange = { this.handleInputChange }
            />
          </div>
        </form>
      </div>
    )
  }
};

export default SearchBar;