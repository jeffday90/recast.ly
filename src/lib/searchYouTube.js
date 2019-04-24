import YOUTUBE_API_KEY from '../config/youtube.js'
import App from '../components/App.js'

var searchYouTube = (query, callback) => {
  // TODO 

$.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + query + "&type=video&videoEmbeddable=true&key=" + YOUTUBE_API_KEY, (data) => callback(data.items))

//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=react&type=video&videoEmbeddable=true HTTP/1.1

};

export default searchYouTube;
