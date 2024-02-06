import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TableRowsLoader } from "./TableRowsLoader";

export const Article = ({ articles }) => {
	return (
		<ul>
			{!articles.length ? (
				<TableRowsLoader rowsNum={37} />
			) : (
				articles?.map((article) => (
					<li key={article.article_id}>
						<Card sx={{ minWidth: 275 }}>
							<CardMedia sx={{ height: 200 }} image={article.article_img_url} />
							<CardContent>
								<Typography variant="h5" component="div">
									{article.title}
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									{article.author}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Like</Button>
							</CardActions>
						</Card>
					</li>
				))
			)}
		</ul>
	);
};
