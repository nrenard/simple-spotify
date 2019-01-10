import React, { Component } from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;

		console.log('id: ', id);
	}

	render() {
		console.log('props: ', this.props);

		return (
			<Container>
				<Header>
					<img
						src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
						alt="Album"
					/>

					<div>
						<span>PLAYLIST</span>
						<h1>Rock dawdad</h1>
						<p>12 músicas</p>

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
						<tr>
							<td>
								<img src={PlusIcon} alt="Plus Icon"/>
							</td>
							<td>Papercut</td>
							<td>Linkin Park</td>
							<td>Bababa</td>
							<td>3:26</td>
						</tr>
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
}

export default Playlist;
