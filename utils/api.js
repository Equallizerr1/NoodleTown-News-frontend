import axios from "axios";

const ntnewsApi = axios.create({
	baseURL: "https://noodletownnews.onrender.com/api",
	timeout: 2500,
});

export const getEndpoints = () => {
	return ntnewsApi.get().then(({ data: endpoints }) => {
		return endpoints;
	});
};

export const getArticles = () => {
	return ntnewsApi.get("/articles").then(({ data: articles }) => {
		return articles;
	});
};

export const getArticleById = (article_id) => {
	return ntnewsApi
		.get(`/articles/${article_id}`)
		.then(({ data: article }) => {
			return article;
		})
		.then((article) => {
			console.log(article);
			return article;
		});
};

export const getComments = () => {};
