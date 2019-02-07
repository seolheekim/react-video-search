// This file will handle making a network request over to the Youtube API
import axios from 'axios';

// Reason the 'KEY' is uppercase is to say that this is a constant value and it should not be changed.
const KEY = 'AIzaSyB0nmbC0z9FrnMKEuZucryRPNRCJ2jOygA';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  //Options object called params contains all different query string parameters to add onto the request.
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});