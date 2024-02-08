export const articleDataArranger = (data) => {
	const articleData = [...data][0].data.article;
	const articleMap = articleData.map((article) => {
		return article;
	});
	const commentData = [...data][1].data.comments;
	const commentMap = commentData.map((comment) => {
		return comment;
	});
	return [articleMap, commentMap];
};
