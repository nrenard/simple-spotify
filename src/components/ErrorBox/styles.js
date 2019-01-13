import styled from 'styled-components';

export const Container = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: center;
	height: 42px;
	line-height: 42px;
	box-sizing: border-box;
	padding: 0 20px;
	color: rgba(0,0,0, 0.8);
	background: #f55a5a;
	margin: 20px 0 10px;
	font-size: 13px;
	border-radius: 3px;

	button {
		border: 0;
		background-color: transparent;

		img {
			height: 14px;
		}
	}
`;
