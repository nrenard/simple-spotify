import styled from 'styled-components';

export const Wrapper = styled.div`
	flex-direction: column;
	display: flex;
	height: 100%;
`;

export const Container = styled.div`
	display: flex;
	flex: 1;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 0 20px;

	background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
	background-size: 100% 250px, 100%;
	background-repeat: no-repeat;
	background-position: top;
`;
