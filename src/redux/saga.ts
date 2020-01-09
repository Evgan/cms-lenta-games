import {combineReducers} from 'redux'
import { all, fork } from 'redux-saga/effects'
import { History } from 'history'
import  gamesSaga, {GamesState, reducer as gamesReducer} from '../ducks/games'
// The top-level state object
export interface ApplicationState {
    games: GamesState
}

export const rootReducer = (history: History) => combineReducers<ApplicationState>({
    games: gamesReducer
});

export function* rootSaga() {
    yield all([
        fork(gamesSaga)
    ])
}