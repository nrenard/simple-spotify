import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import ducks from './ducks';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(ducks, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;
