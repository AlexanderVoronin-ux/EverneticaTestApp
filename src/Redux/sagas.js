import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {ALL_COUNTRIES} from "../configRequest";
import {COUNTRY_DATA_ERROR, RESPONSE_COUNTRY_DATA} from "./actions";

// worker Saga

function* requestCountryData() {
    try {
        const response  = yield call(axios.get, ALL_COUNTRIES);
        yield put({type: RESPONSE_COUNTRY_DATA, payload: response.data});
    } catch (error) {
        if (error.isAxiosError) {
            yield put({type: COUNTRY_DATA_ERROR, payload: error})
            console.error(error)

        } else {
            console.error(error)
        }
    }
}


// watcher Saga

function* mySaga() {
    yield takeEvery("REQUEST_COUNTRY_DATA", requestCountryData);

}

export default mySaga;