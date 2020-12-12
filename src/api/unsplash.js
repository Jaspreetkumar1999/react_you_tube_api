import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: `Client-ID d8yyfzuQ-W9usx8HIaHXcLx9TM-qZFAHPVXHS4aJ0dI`
    }
});