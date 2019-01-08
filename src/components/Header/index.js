import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
	<Container>
		<Search>
			<input type="text" placeholder="Search" />
		</Search>

		<User>
			<img src="https://avatars3.githubusercontent.com/u/22799737?s=400&v=4" alt="Nicolas"/>
			Nicolas Renard
		</User>
	</Container>
);

export default Header
