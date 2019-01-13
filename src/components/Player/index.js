import React from 'react';
import Slider from 'rc-slider';

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
// import PauseIcon from '../../assets/images/pause.svg';

const Player = () => (
	<Container>
		<Current>
			<img
				src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
				alt="Album"
			/>

			<div>
				<span>
					Times like these
				</span>

				<small>
					Foo Fighdawdw
				</small>
			</div>
		</Current>

		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="shuffle icon" />
				</button>
				<button>
					<img src={BackwardIcon} alt="Backward icon" />
				</button>
				<button>
					<img src={PlayIcon} alt="Play icon" />
				</button>
				<button>
					<img src={ForwardIcon} alt="Forward icon" />
				</button>
				<button>
					<img src={RepeatIcon} alt="repeat icon" />
				</button>
			</Controls>

			<Time>
				<span>1:39</span>
				<ProgressSlider>
					<Slider
						railStyle={{ background: "#404040", borderRadius: 10 }}
						trackStyle={{ background: "#1ed760" }}
						handleStyle={{ border: 0 }}
						// value={100}
					/>
				</ProgressSlider>
				<span>4:24</span>
			</Time>
		</Progress>

		<Volume>
				<img src={VolumeIcon} alt="volume" />

				<Slider
					railStyle={{ background: "#404040", borderRadius: 10 }}
					trackStyle={{ background: "#fff" }}
					handleStyle={{ display: "none" }}
					// value={100}
				/>
		</Volume>
	</Container>
);

export default Player;
