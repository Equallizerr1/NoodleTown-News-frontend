import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleById } from "../../utils/api";
import { ArticleViewer } from "./ArticleViewer";

export const Article = () => {
	const { article_id } = useParams();

	const [article, setArticle] = useState([]);
	const [votes, setVotes] = useState(0);

	useEffect(() => {
		getArticleById(article_id).then(({ article }) => {
			setArticle(article);
			setVotes(article[0].votes);
		});
	}, [article_id]);

	return <ArticleViewer article={article} votes={votes} />;
};
