import axios from 'axios';

const API_URL = "http://testlc.lncdoo.com/api/myprofile/events"

export const fetchEvents = async () => {
    try{
        const response = await axios.get(API_URL);
        const inClassEvents = response.data.data.filter(event => event.is_inclass);
        return inClassEvents;
    }
    catch (error){
        console.error('Error fetching events:', events);
        throw error;
    }
};