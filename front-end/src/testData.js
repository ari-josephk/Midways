import axios from 'axios';

//Mock nearby search from Google's Places API
//Should give similar results to what Google's API would
const getResults_mock = async () => {
    const res = await axios.get('https://my.api.mockaroo.com/mock_nearby_search.json?key=202d5e00');
    const data = res.data;
    console.log(data);
    return data;
}

const getFriends_mock = async () => {
    const res = await axios.get('https://my.api.mockaroo.com/friends.json?key=b3baae00');
    const data = res.data;
    console.log(data);
    return data;
}

const getGroups_mock = async () => {
    const res = await axios.get('https://my.api.mockaroo.com/groups.json?key=b3baae00');
    const data = res.data;
    console.log(data);
    return data;
}

const getPlaceLocation = async (query) => {
    const res = await axios.get('/api/geocode?q='+query);
    const data = res.data;
    console.log(data);
    return data;
}

const getPlaceImage = async (photoreference) => {
    const res = await axios.get('/api/photo?photoreference='+photoreference);
    const data = res.data;
    console.log(data);
    return data;
}

const search = async (origins, search) => {
    const res = await axios.post('/api/search',
        {
            origins: origins,
            search: search
        }
    )
    const data = res.data;
    console.log(data);
    return data;
}
export default {getResults_mock, getPlaceLocation, getFriends_mock, getPlaceImage, getGroups_mock, search}