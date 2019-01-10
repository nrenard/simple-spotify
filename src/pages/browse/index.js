import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

import Loading from '../../components/Loading';

import { Container, Title, List, Playlist } from './styles';

class Browse extends Component {

	static propTypes = {
		getPlaylistRequests: PropTypes.func.isRequired,
		playlist: PropTypes.shape({
			data: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
				thumbnail: PropTypes.string,
				description: PropTypes.string,
			})),
			loading: PropTypes.bool,
		}).isRequired
	};

	componentDidMount() {
		this.props.getPlaylistRequests();
	}

	render() {

		const { playlists } = this.props;

		const { data, loading } = playlists;

		return (
			<Container>
				<Title>
					Navegar

				  {loading && <Loading />}
				</Title>

				<List>
					{data.map(playlist => (
						<Playlist to={`/playlists/${playlist.id}`} key={playlist.id}>
							<img src={playlist.thumbnail} alt={playlist.title} />
							<strong>{playlist.title}</strong>
							<p>{playlist.description}</p>
						</Playlist>
					))}
				</List>
			</Container>
		);
	}
}

const mapStateToProps = ({ playlists }) => ({ playlists });

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
