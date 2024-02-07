import { ArticleCard } from "./ArticleCard";
import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../utils/api";

export const Home = () => {
	const [articleArray, setArticleArray] = useState([]);
	useEffect(() => {
		getArticles().then(({ articles }) => {
			setTimeout(() => setArticleArray(articles));
		});
	}, []);
	return <ArticleCard articles={articleArray} />;
};
