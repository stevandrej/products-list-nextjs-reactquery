import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const httpClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export default httpClient;
