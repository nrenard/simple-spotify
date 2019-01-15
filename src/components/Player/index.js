import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlayerActions } from '../../store/ducks/player';

import {
	ProgressSlider,
	Container,
	Current,
	Volume,
	Progress,
	Controls,
	Time,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';
import PauseIcon from '../../assets/images/pause.svg';

const Player = ({
	player,
	duration,
	position,
	positionShown,
	progress,
	...props
}) => (
	<Container>
		{ !!player.currentSong && (
			<Sound
				url={player.currentSong.file}
				playStatus={player.status}
				onFinishedPlaying={props.nextSong}
				onPlaying={props.playingSong}
				position={player.position}
				volume={player.volume}
			/>
		) }

		<Current>
				{!!player.currentSong && (
					<>
						<img
							src={player.currentSong.thumbnail}
							alt={player.currentSong.title}
						/>

						<div>
							<span>
								{player.currentSong.title}
							</span>

							<small>
								{player.currentSong.author}
							</small>
						</div>
					</>
				) }

		</Current>

		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="shuffle icon" />
				</button>
				<button onClick={props.prevSong}>
					<img src={BackwardIcon} alt="Backward icon" />
				</button>
				{ !!player.currentSong && player.status === Sound.status.PLAYING ? (
					<button onClick={props.pauseSong}>
						<img src={PauseIcon} alt="Pause icon" />
					</button>) :
					<button onClick={props.playSong}>
						<img src={PlayIcon} alt="Play icon" />
					</button>
				}
				<button onClick={props.nextSong}>
					<img src={ForwardIcon} alt="Forward icon" />
				</button>
				<button>
					<img src={RepeatIcon} alt="repeat icon" />
				</button>
			</Controls>

			<Time>
				<span>{positionShown || position}</span>
				<ProgressSlider>
					<Slider
						railStyle={{ background: "#404040", borderRadius: 10 }}
						trackStyle={{ background: "#1ed760" }}
						handleStyle={{ border: 0 }}
						max={1000}
						onChange={value => props.handlePosition(value / 1000)}
						onAfterChange={value => props.setPosition(value / 1000)}
						value={progress}
					/>
				</ProgressSlider>
				<span>{duration}</span>
			</Time>
		</Progress>

		<Volume>
				<img src={VolumeIcon} alt="volume" />

				<Slider
					railStyle={{ background: "#404040", borderRadius: 10 }}
					trackStyle={{ background: "#fff" }}
					handleStyle={{ display: "none" }}
					value={player.volume}
					onChange={props.setVolume}
				/>
		</Volume>
	</Container>
);

Player.propTypes = {
	player: PropTypes.shape({
		currentSong: PropTypes.shape({
			file: PropTypes.string,
			thumbnail: PropTypes.string,
			title: PropTypes.string,
			author: PropTypes.string,
		}),
		status: PropTypes.string,
	}).isRequired,
	playSong: PropTypes.func.isRequired,
	pauseSong: PropTypes.func.isRequired,
	nextSong: PropTypes.func.isRequired,
	prevSong: PropTypes.func.isRequired,
	playingSong: PropTypes.func.isRequired,
	handlePosition: PropTypes.func.isRequired,
	setPosition: PropTypes.func.isRequired,
	setVolume: PropTypes.func.isRequired,
	position: PropTypes.string,
	volume: PropTypes.number,
	duration: PropTypes.string,
	positionShown: PropTypes.string,
	progress: PropTypes.number.isRequired,
};

const msToTime = duration => {
	if (!duration) return null;

	let seconds = parseInt((duration / 1000) % 60, 10);
	const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

	seconds = seconds < 10 ? `0${seconds}` : seconds;

	return `${minutes}:${seconds}`;
}

const mapStateToProps = ({ player }) => ({
	player,
	position: msToTime(player.position),
	duration: msToTime(player.duration),
	positionShown: msToTime(player.positionShown),
	progress: parseInt((player.positionShown || player.position) * (1000 / player.duration), 10) || 0,
});

const mapDispatchtoProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchtoProps)(Player);
