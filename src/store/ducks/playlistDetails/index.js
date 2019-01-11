export const Types = {
	GET_REQUEST: 'playlistDetails/GET_REQUEST',
	GET_REQUEST_SUCCESS: 'playlistDetails/GET_REQUEST_SUCCESS',
};

const INITIAL_STATE = {
	data: {},
	loading: false,
};

export default function playlistDetails(state = INITIAL_STATE, { type, payload }) {
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
	getPlaylistDetailsRequests: id => ({
		type: Types.GET_REQUEST,
		payload: { id }
	}),

	getPlaylistDetailsRequestsSuccess: data => ({
		type: Types.GET_REQUEST_SUCCESS,
		payload: { data }
	}),
}
