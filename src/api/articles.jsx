import axios from "axios";

const API_URL = "https://qfuypmdea5.execute-api.us-east-1.amazonaws.com/Prod/api/v1";

export const fetchArticles = async () => {
    const response = await axios.get(`${API_URL}/articles/`);
    return response.data;
};
