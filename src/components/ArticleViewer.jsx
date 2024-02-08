import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { dateFormatter } from "../../utils/dateFormatter";
import LinearLoading from "./LoadingBar";
import { Comments } from "./Comments";
const bull = "•";
export const ArticleViewer = ({ props }) => {
	const articleProps = props[0];
	const commentProps = props[1];

	return (
		<>
			{!props.length ? (
				<LinearLoading />
			) : (
				<>
					<ul>
						{articleProps?.map((article) => (
							<li key={article.article_id}>
								<Card
									sx={{ display: "block", maxWidth: "100%", margin: "auto" }}>
									<CardContent>
										<Typography
											sx={{ margin: "auto", textAlign: "left", paddingTop: 1 }}
											variant="body2">
											{`${article.topic} ${bull} ${dateFormatter(
												article.created_at
											)}`}
											<br />
											{article.author}
											<hr />
										</Typography>
										<CardMedia
											sx={{ height: 500 }}
											image={article.article_img_url}
										/>
										<hr />
										<br />
										<Typography sx={{ paddingX: 10 }} variant="h4">
											{article.title}
										</Typography>
										<hr />
										<br />
										<Typography
											sx={{ margin: "auto", paddingX: 20, textAlign: "left" }}
											variant="body1">
											{article.body}
										</Typography>
									</CardContent>
									<CardActions>
										<IconButton aria-label="add to favourites">
											<FavoriteIcon />
										</IconButton>
										<IconButton aria-label="share">
											<ShareIcon />
										</IconButton>
									</CardActions>
								</Card>
							</li>
						))}
					</ul>
					<Comments comments={commentProps} />
				</>
			)}
		</>
	);
};
