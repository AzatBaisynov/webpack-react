import { FC, Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";

export const App: FC = () => {

	const { theme } = useTheme();

	return (
		<div className={`app ${theme}`}>
			<Suspense fallback={"loading..."}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};