import axios from "axios";

const ntnewsApi = axios.create({
	baseURL: "https://noodletownnews.onrender.com/api",
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
	return ntnewsApi.get(`/articles/${article_id}`).then(({ data: article }) => {
		return article;
	});
};

export const getComments = (article_id) => {
	return ntnewsApi
		.get(`/articles/${article_id}/comments`)
		.then(({ data: article }) => {
			return article;
		});
};

// export const getArticleInfo = async (article_id) => {
// 	const baseURL = "https://noodletownnews.onrender.com/api";
// 	const [first, second] = await Promise.all([
// 		axios.get(`${baseURL}/articles/${article_id}`),
// 		axios.get(`${baseURL}/articles/${article_id}/comments`),
// 	]);
// 	return [first, second];
// };
