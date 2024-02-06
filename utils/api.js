import axios from "axios";
const baseUrl = "https://noodletownnews.onrender.com/api";

export const getEndpoints = () => {
	return axios.get(`${baseUrl}`).then(({ data: endpoints }) => {
		return endpoints;
	});
};

export const getArticles = () => {
	return axios.get(`${baseUrl}/articles`).then(({ data: articles }) => {
		return articles;
	});
};
