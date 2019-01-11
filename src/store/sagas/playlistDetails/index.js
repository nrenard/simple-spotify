import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { Creators as PlaylistDetailsActions } from '../../ducks/playlistDetails';

export function* getPlaylistDetails({ payload }) {
	try {
			const response = yield call(api.get, `/playlists/${payload.id}?_embed=songs`);
			yield put(PlaylistDetailsActions.getPlaylistDetailsRequestsSuccess(response.data))
	} catch (err) {
		console.log('err: ', err);
	}
}
