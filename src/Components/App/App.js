import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

export default class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			searchResults : [
				{
					name   : 'trackName1',
					artist : 'trackArtist1',
					album  : 'albumName1',
					id     : 1,
				},
				{
					name   : 'trackName2',
					artist : 'trackArtist2',
					album  : 'albumName2',
					id     : 2,
				},
				{
					name   : 'trackName3',
					artist : 'trackArtist3',
					album  : 'albumName3',
					id     : 3,
				},
			],
		};
	}

	render () {
		return (
			<div>
				<h1>
					Ja<span className="highlight">mmm</span>ing
				</h1>
				<div className="App">
					<SearchBar />
					<div className="App-playlist">
						<SearchResults searchResults={this.state.searchResults} />
						<Playlist />
					</div>
				</div>
			</div>
		);
	}
}
