import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, SongList } from './styles';

import Loading from '../../components/Loading';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {

	static propTypes = {
		getPlaylistDetailsRequests: PropTypes.func,
	};

	componentDidMount() {
		this.loadPlaylistDetails()
	}

	loadPlaylistDetails = () => {
		const { id } = this.props.match.params;
		this.props.getPlaylistDetailsRequests(id);
	}

	renderDetails = () => {

		const { thumbnail, title, songs } = this.props.playlistDetails.data;

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
						{/* {!!songs && <p>{songLegth} músicas</p>} */}

						<button>PLAY</button>
					</div>
				</Header>

				<SongList cellPadding={0} cellSpacing={0}>
					<thead>
						<th />

						<th>Título</th>

						<th>Artista</th>

						<th>Álbum</th>
						<th>
							<img src={ClockIcon} alt="Clock Icon"/>
						</th>
					</thead>

					<tbody>
						<tr>
							<td>
								<img src={PlusIcon} alt="Plus Icon"/>
							</td>
							<td>Papercut</td>
							<td>Linkin Park</td>
							<td>Bababa</td>
							<td>3:26</td>
						</tr>
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


const mapStateToProps = ({ playlistDetails }) => ({ playlistDetails });

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
