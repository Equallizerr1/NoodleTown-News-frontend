import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<div >
			<Link to={"/"}>
				<img src="/src/assets/news-icon.svg" alt="NC News logo" width={150} />
			</Link>
		</div>
	);
};


// {
// 	item ? (
// 		<img
// 			style={{
// 				width: 210,
// 				height: 118,
// 			}}
// 			alt={item.title}
// 			src={item.src}
// 		/>
// 	) : (
// 		<Skeleton variant="rectangular" width={210} height={118} />
// 	);
// }