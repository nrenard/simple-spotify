import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';

import { Container, NewPlayList, Nav } from './styles';

import Loading from '../Loading';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

class Sidebar extends Component {

	static propTypes = {
		getPlaylistRequests: PropTypes.func.isRequired,
		playlists: PropTypes.shape({
			data: PropTypes.arrayOf(PropTypes.shape({
				id: PropTypes.number,
				title: PropTypes.string,
			})),
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
				<div>
					<Nav main>
						<li>
							<Link to="/">Navegar</Link>
						</li>
						<li>
							<Link to="/radio">Rádio</Link>
						</li>
					</Nav>

					<Nav>
						<li>
							<span>
								Sua biblioteca
							</span>
						</li>

						<li>
							<a href="">Seu Daily Mix</a>
						</li>
						<li>
							<a href="">Tocados recentemente</a>
						</li>
						<li>
							<a href="">Músicas</a>
						</li>
						<li>
							<a href="">Álbuns</a>
						</li>
						<li>
							<a href="">Artistas</a>
						</li>
						<li>
							<a href="">Estações</a>
						</li>
						<li>
							<a href="">Arquivos locais</a>
						</li>
						<li>
							<a href="">Vídeos</a>
						</li>
						<li>
							<a href="">Podcasts</a>
						</li>
					</Nav>

					<Nav>
						<li>
							<span>
								playlists
							</span>

							{loading && <Loading />}
						</li>

						{data.map(playlist =>  (
							<li key={playlist.id}>
								<Link to={`/playlists/${playlist.id}`}>
									{playlist.title}
								</Link>
							</li>
						))}
					</Nav>
				</div>

				<NewPlayList>
					<img src={AddPlayListIcon} alt="Add playlist"/>
					Nova playlist
				</NewPlayList>
			</Container>
		);
	}
}

const mapStateToProps = ({ playlists }) => ({ playlists });

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
