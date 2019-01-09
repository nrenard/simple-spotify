import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const browse = () => (
	<Container>
		<Title>Navegar</Title>

		<List>
			<Playlist to="/playlists/1">
				<img
					src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
					alt="Album"
				/>
				<strong> Rock dos bons </strong>
				<p>Relaxe enquanto você programa ouvindo em dawdawd adawdwa.</p>
			</Playlist>
			<Playlist to="/playlists/2">
				<img
					src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
					alt="Album"
				/>
				<strong> Rock dos bons </strong>
				<p>Relaxe enquanto você programa ouvindo em dawdawd adawdwa.</p>
			</Playlist>
			<Playlist to="/playlists/3">
				<img
					src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
					alt="Album"
				/>
				<strong> Rock dos bons </strong>
				<p>Relaxe enquanto você programa ouvindo em dawdawd adawdwa.</p>
			</Playlist>
			<Playlist to="/playlists/4">
				<img
					src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
					alt="Album"
				/>
				<strong> Rock dos bons </strong>
				<p>Relaxe enquanto você programa ouvindo em dawdawd adawdwa.</p>
			</Playlist>
		</List>
	</Container>
);

export default browse;
