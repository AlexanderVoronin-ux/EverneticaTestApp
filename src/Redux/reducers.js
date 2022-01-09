const initialState = {
    countryData: null,
    isLoading: false,
    searchCountries: [],
    countryDataName: null,
    addCountryDataItem: [],
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
            return {...state, ...action.payload}
        }
        case 'RESPONSE_COUNTRY_DATA_NAME': {
            return {...state, countryDataName: action.payload[0]}
        }
        case 'COUNTRY_DATA_NAME_ERROR': {
            const error = {...action.payload};

            const errorMessage = {...error}
            return errorMessage
        }
        case 'RESET_SEARCH_COUNTRY_DATA': {
            return {...state, addCountryDataItem: []}
        }
        case 'ADD_SEARCH_COUNTRY_ITEM': {
            return {...state, addCountryDataItem: [...state.addCountryDataItem, action.payload]}
        }
        case 'REMOVE_SEARCH_COUNTRY_ITEM': {
            return {...state, addCountryDataItem: action.payload}
        }


        default:
            break;

    }
    return state;
}