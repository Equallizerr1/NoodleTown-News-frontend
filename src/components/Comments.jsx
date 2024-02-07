import { useState, useEffect } from "react";
import { getArticleInfo } from "../../utils/api";

export const Comments = (article_id) => {
	const [article, setArticle] = useState([]);
	useEffect(() => {
		getArticleInfo(article_id).then((res) => {
			console.log(res);
			setArticle(res);
		});
	}, []);

	return <p>comments</p>;
};
