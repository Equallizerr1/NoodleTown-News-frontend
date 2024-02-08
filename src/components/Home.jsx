import { ArticleList } from "./ArticleList";
import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../utils/api";
import LinearLoading from "./LoadingBar";

export const Home = () => {
	const [articleArray, setArticleArray] = useState([]);
	useEffect(() => {
		getArticles().then(({ articles }) => {
			setArticleArray(articles);
		});
	}, []);

	return (
		<>
			{!articleArray.length ? (
				<LinearLoading />
			) : (
				<ArticleList articles={articleArray} />
			)}
		</>
	);
};
