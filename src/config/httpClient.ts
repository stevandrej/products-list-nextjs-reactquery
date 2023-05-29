import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const httpClient = axios.create({
	baseURL: BASE_URL,
	params: {
		api_key: API_KEY,
	},
	headers: {
		Authorization: `Bearer ${ACCESS_TOKEN}`,
		"Content-Type": "application/json",
	},
});

export default httpClient;
