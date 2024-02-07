import axios from "axios";

const instance = axios.create({
	baseURL: "https://noodletownnews.onrender.com/api",
	timeout: 2500,
});

export const getEndpoints = () => {
	return instance().then(({ data: endpoints }) => {
		return endpoints;
	});
};

export const getArticles = () => {
	return instance(`/articles`).then(({ data: articles }) => {
		return articles;
	});
};

export const getArticleById = (article_id) => {
	return instance(`/articles/${article_id}`).then(({ data: article }) => {
		return article;
	});
};
