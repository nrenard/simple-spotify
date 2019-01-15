import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, SongList, SongItem } from './styles';

import Loading from '../../components/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {

	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.shape({
				id: PropTypes.string,
			})
		}).isRequired,
		getPlaylistDetailsRequests: PropTypes.func.isRequired,
		playlistDetails: PropTypes.shape({
			data: PropTypes.shape({
				thumbnail: PropTypes.string,
				title: PropTypes.string,
				description: PropTypes.string,
				songs: PropTypes.arrayOf(PropTypes.shape({
					id: PropTypes.number,
					title: PropTypes.string,
					author: PropTypes.string,
					album: PropTypes.string,
				}))
			}),
			loading: PropTypes.bool
		}).isRequired,
		loadSong: PropTypes.func.isRequired,
		currentSong: PropTypes.shape({
			id: PropTypes.number
		})
	};

	state = {
		selectedSong: null,
	};

	componentDidMount() {
		this.loadPlaylistDetails()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.id !== this.props.match.params.id) {
			this.loadPlaylistDetails();
		}
	}

	loadPlaylistDetails = () => {
		const { id } = this.props.match.params;
		this.props.getPlaylistDetailsRequests(id);
	}

	renderDetails = () => {

		const { thumbnail, title, songs } = this.props.playlistDetails.data;

		const { currentSong } = this.props;

		const hasSongs = !!songs;

		return (
			<Container>
				<Header>
					<img
						src={thumbnail}
						alt={title}
					/>

					<div>
						<span>PLAYLIST</span>
						<h1>{title}</h1>
						{ hasSongs && <p>{songs.length} músicas</p> }

						<button>PLAY</button>
					</div>
				</Header>

				<SongList cellPadding={0} cellSpacing={0}>
					<thead>
						<tr>
							<th />

							<th>Título</th>

							<th>Artista</th>

							<th>Álbum</th>

							<th>
								<img src={ClockIcon} alt="Clock Icon"/>
							</th>
						</tr>
					</thead>

					<tbody>
						{!hasSongs ? (
							<tr>
								<td colSpan={5}>Nenhuma música cadastrada</td>
							</tr>
						) : (
							songs.map(song => (
								<SongItem
									key={song.id}
									playing={currentSong && currentSong.id === song.id}
									selected={song.id === this.state.selectedSong}
									onDoubleClick={() => this.props.loadSong(song, songs)}
									onClick={() => this.setState({ selectedSong: song.id })}
								>
									<td>
										<img src={PlusIcon} alt="Plus Icon"/>
									</td>
									<td>{song.title}</td>
									<td>{song.author}</td>
									<td>{song.album}</td>
									<td>3:26</td>
								</SongItem>
							))
						)}
					</tbody>
				</SongList>
			</Container>
		);
	}

	render() {
		const { loading } = this.props.playlistDetails;

		return loading ?
			<Container loading> <Loading /> </Container> :
			this.renderDetails();
	}
}


const mapStateToProps = ({ playlistDetails, player }) => ({ playlistDetails, currentSong: player.currentSong  });

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
