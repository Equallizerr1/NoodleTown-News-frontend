import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleInfo } from "../../utils/api";
import { articleDataArranger } from "../../utils/articleDataArranger";
import { ArticleViewer } from "./ArticleViewer";

export const Article = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState([]);
	useEffect(() => {
		getArticleInfo(article_id).then((res) => {
			setArticle(articleDataArranger(res));
		});
	}, [article_id]);
	return <ArticleViewer props={article} />;
};
