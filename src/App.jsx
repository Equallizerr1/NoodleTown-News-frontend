import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Endpoints } from "./components/Endpoints";
import { Navigation } from "./components/Navigation";
import { Topics } from "./components/Topics";

function App() {
	return (
		<>
			<Header />
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/topics" element={<Topics />} />
				<Route path="/endpoints" element={<Endpoints />} />
			</Routes>
		</>
	);
}

export default App;
