import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Endpoints } from "./components/Endpoints";
import { Topics } from "./components/Topics";
import { Article } from "./components/Article";
import { ArticleList } from "./components/ArticleList";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<ArticleList />} />
				<Route path="/topics" element={<Topics />} />
				<Route path="/endpoints" element={<Endpoints />} />
				<Route path="/article/:article_id" element={<Article />} />
			</Routes>
		</>
	);
}

export default App;
