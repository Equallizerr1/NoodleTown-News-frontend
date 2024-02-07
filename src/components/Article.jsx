import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getArticleInfo } from "../../utils/api";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import { CardMedia, Typography } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import { dateFormatter } from "../../utils/dateFormatter";
import { articleDataArranger } from "../../utils/articleDataArranger";
import { ArticleViewer } from "./ArticleViewer";

export const Article = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState([]);
	useEffect(() => {
		getArticleInfo(article_id).then((res) => {
			setArticle(articleDataArranger(res));
		});
	}, []);
	return (
		<ArticleViewer props={article} />
		// <ul>
		// 	{article.map((article) => (
		// 		<li key={article[0].article_id}>
		// 			<Card sx={{ display: "block", maxWidth: "100%", margin: "auto" }}>
		// 				<CardContent>
		// 					<CardMedia
		// 						sx={{ height: 500 }}
		// 						image={article[0].article_img_url}
		// 					/>
		// 					<br />
		// 					<Typography sx={{ paddingX: 10 }} variant="h4">
		// 						{article[0].title}
		// 					</Typography>
		// 					<Typography
		// 						sx={{ margin: "auto", paddingX: 20, textAlign: "left" }}
		// 						variant="body2"></Typography>
		// 					<br />
		// 					<Typography
		// 						sx={{ margin: "auto", paddingX: 20, textAlign: "left" }}
		// 						variant="body1">
		// 						{article[0].body}
		// 					</Typography>
		// 				</CardContent>
		// 				<CardActions>
		// 					<IconButton aria-label="add to favourites">
		// 						<FavoriteIcon />
		// 					</IconButton>
		// 					<IconButton aria-label="share">
		// 						<ShareIcon />
		// 					</IconButton>
		// 				</CardActions>
		// 			</Card>
		// 		</li>
		// 	))}
		// </ul>
	);
};
