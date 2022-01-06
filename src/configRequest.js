const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,numericCode';
export const SEARCH_COUNTRIES = (name) => BASE_URL + 'name/' + name;