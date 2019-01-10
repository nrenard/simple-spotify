export const Types = {
	GET_REQUEST: 'playlists/GET_REQUEST',
	GET_REQUEST_SUCCESS: 'playlists/GET_REQUEST_SUCCESS',
};

const INITIAL_STATE = {
	data: [],
	loading: false,
};

export default function playlists(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.GET_REQUEST:
			return { ...state, loading: true }
		case Types.GET_REQUEST_SUCCESS:
			return {
				...state,
				loading: false,
				data: payload.data
			}
		default:
			return state
	}
}


export const Creators = {
	getPlaylistRequests: () => ({ type: Types.GET_REQUEST }),

	getPlaylistRequestsSuccess: data => ({
		type: Types.GET_REQUEST,
		payload: { data }
	}),
}
