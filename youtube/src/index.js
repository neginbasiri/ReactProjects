/**
 * Created by nbasiri on 10/04/2017.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyCQAT2gTS0mN7Y-IEUxy4H4cXGyWwBRW_0';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    };
}

ReactDOM.render(<App/>, document.querySelector('.container'));