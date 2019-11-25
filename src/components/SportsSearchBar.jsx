import React, { Component } from 'react';
import SportsSearchSuggestions from './SportsSearchSuggestions';
import './SportSearchBar.css';
import axios from 'axios';

const url = 'https://sports.api.decathlon.com/sports';

class SportsSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInfo() {
    axios
      .get(url)
      .then(response => response.data.data)
      .then(data => {
        return data.map(sport => {
          return {
            name: sport.attributes.name
          };
        });
      })
      .then(data => {
        this.setState({
          results: data
        });
      });
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo();
      } else {
        this.setState({
          results: this.state.results
        });
      }
    });
  }

  render() {
    return (
      <form className="sportSearchBarDiv">
        <input
          className="sportSearchBarInput"
          placeholder="Enter a sport"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.query}
        />
        <SportsSearchSuggestions results={this.state.results} query={this.state.query} />
      </form>
    );
  }
}

export default SportsSearchBar;
