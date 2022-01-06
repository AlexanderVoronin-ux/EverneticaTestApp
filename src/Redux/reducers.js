const initialState = {
    countryData: null,
    isLoading: false,
    searchCountries: []
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'RESPONSE_COUNTRY_DATA': {
            return {...state, countryData: action.payload, isLoading: true}
        }
        case 'COUNTRY_DATA_ERROR': {
            const error = {...action.payload};

            const errorMessage = {...error}
            return errorMessage
        }
        case 'ADD_SEARCH_COUNTRY_DATA': {
            return {...state, ...action.payload, isLoading: true}
        }

        default:
            break;

    }
    return state;
}