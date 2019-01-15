import Sound from 'react-sound';

export const Types = {
	LOAD: 'player/LOAD',
	PLAY: 'player/PLAY',
	PAUSE: 'player/PAUSE',

	NEXT: 'player/NEXT',
	PREV: 'player/PREV',

	PLAYING: 'player/PLAYING',

	HANDLE_POSTION: 'player/HANDLE_POSTION',
	SET_POSTION: 'player/SET_POSTION',

	SET_VOLUME: 'player/SET_VOLUME',
};

const INITIAL_STATE = {
	currentSong: null,
	status: Sound.status.PLAYING,
	list: [],
	position: null,
	positionShown: null,
	duration: null,
	volume: 50
};

export default function player(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.LOAD:
			return {
				...state,
				currentSong: payload.song,
				status: Sound.status.PLAYING,
				list: payload.list
			}
		case Types.PLAY:
			return { ...state, status: Sound.status.PLAYING }
		case Types.PAUSE:
			return { ...state, status: Sound.status.PAUSED }
		case Types.PREV: {
			const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
			const prev = state.list[currentIndex - 1]

			if (prev) {
				return {
					...state,
					currentSong: prev,
					status: Sound.status.PLAYING,
					position: 0
				}
			}

			return state
		}
		case Types.NEXT: {
			const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
			const next = state.list[currentIndex + 1];

			if (next) {
				return {
					...state,
					currentSong: next,
					status: Sound.status.PLAYING,
					position: 0
				}
			}

			return { ...state }
		}
		case Types.PLAYING:
			return {
				...state,
				...payload
			}
		case Types.HANDLE_POSTION:
			return {
				...state,
				positionShown: state.duration * payload.percent
			}
		case Types.SET_POSTION:
			return {
				...state,
				position: state.duration * payload.percent,
				positionShown: null
			}
		case Types.SET_VOLUME:
			return {
				...state,
				volume: payload.volume
			}
		default:
			return state
	}
}


export const Creators = {
	loadSong: (song, list) => ({
		type: Types.LOAD,
		payload: { song, list }
	}),

	playSong: () => ({ type: Types.PLAY }),

	pauseSong: () => ({ type: Types.PAUSE }),

	nextSong: () => ({ type: Types.NEXT }),

	prevSong: () => ({ type: Types.PREV }),

	playingSong: ({ position, duration }) => ({ type: Types.PLAYING, payload: { position, duration } }),

	handlePosition: percent => ({
		type: Types.HANDLE_POSTION,
		payload: { percent }
	}),

	setPosition: percent => ({
		type: Types.SET_POSTION,
		payload: { percent }
	}),

	setVolume: volume => ({
		type: Types.SET_VOLUME,
		payload: { volume }
	}),
}
