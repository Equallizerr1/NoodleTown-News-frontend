import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../../utils/api";

import { ArticleViewer } from "./ArticleViewer";

export const Article = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState([]);
	useEffect(() => {
		getArticleById(article_id).then(({article}) => {
			setArticle(article);
		});
	}, [article_id]);
	return <ArticleViewer article={article} />;
};
