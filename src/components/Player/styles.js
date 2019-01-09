import styled from 'styled-components';

export const Container = styled.div`
	height: 72px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #282828;
	padding: 12px;
`;

export const Current = styled.div`
	align-items: center;
	display: flex;

	img {
		height: 48px;
		width: 48px;
	}

	div {
		flex-direction: column;
		margin-left: 12px;
		display: flex;

		span {
			font-size: 13px;
			color: #fff;
		}

		small {
			font-size: 11px;
			color: #b3b3b3;
			margin-top: 5px;
		}
	}
`;

export const Progress = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Controls = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	button {
		background: transparent;
		border: 0;
		margin: 0 15px;
		cursor: pointer;
	}
`;

export const Volume = styled.div`
	display: flex;
	align-items: center;
	width: 100px;
	margin-right: 20px;

	img {
		margin-right: 5px;
	}
`;

export const ProgressSlider = styled.div`
	width: 500px;
	margin: 0 15px;
`;

export const Time = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5px;

	span {
		font-size: 11px;
		color: #b3b3b3;
	}
`;
