import {call, put, takeEvery} from 'redux-saga/effects'
import axios from "axios";
import {ALL_COUNTRIES, SEARCH_COUNTRIES} from "../configRequest";
import {
    COUNTRY_DATA_ERROR,
    COUNTRY_DATA_NAME_ERROR,
    RESPONSE_COUNTRY_DATA,
    RESPONSE_COUNTRY_DATA_NAME
} from "./actions";

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

function* requestCountryDataName(body) {
    try {
        const name = body.payload.name;
        const response  = yield call(axios.get, SEARCH_COUNTRIES + name);
        yield put({type: RESPONSE_COUNTRY_DATA_NAME, payload: response.data});
    } catch (error) {
        if (error.isAxiosError) {
            yield put({type: COUNTRY_DATA_NAME_ERROR, payload: error})
            console.error(error)

        } else {
            console.error(error)
        }
    }
}


// watcher Saga

function* mySaga() {
    yield takeEvery("REQUEST_COUNTRY_DATA", requestCountryData);
    yield takeEvery("REQUEST_COUNTRY_DATA_NAME", requestCountryDataName);

}

export default mySaga;