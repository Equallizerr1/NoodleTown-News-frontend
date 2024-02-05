import { Logo } from "./Logo";

export const Header = () => {
	return (
		<>
			<div style={{ display: "flex", alignContent: "start" }}>
				<Logo />
				<h1 style={{ paddingLeft: 30 }}> NC News</h1>
			</div>
		</>
	);
};
