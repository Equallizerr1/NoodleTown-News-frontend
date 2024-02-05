import axios from "axios";

export const getEndpoints = () => {
	return axios
		.get("https://noodletownnews.onrender.com/api")
		.then(({ data: endpoints }) => {
			return endpoints;
		});
};

// export const getArticles = () => {
// 	return axios.get();
// };
