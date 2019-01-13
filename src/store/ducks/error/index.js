export const Types = {
	SET: 'error/SET',
	HIDE: 'error/HIDE',
};

const INITIAL_STATE = {
	visible: false,
	message: null,
};

export default function error(state = INITIAL_STATE, { type, payload }) {
	switch(type) {
		case Types.SET:
			return { ...state, visible: true, message: payload.message }
		case Types.HIDE:
			return { ...state, visible: false }
		default:
			return state
	}
}


export const Creators = {
	setError: message => ({
		type: Types.SET,
		payload: { message }
	}),

	hideError: () => ({ type: Types.HIDE }),
}
