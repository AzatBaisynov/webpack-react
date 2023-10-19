import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {

	return (
		<Suspense fallback={<div className="page-wrapper"><PageLoader /></div>}>
			<Routes>
				{
					Object.values(routeConfig).map(({ element, path }) => (
						<Route
							key={path}
							path={path}
							element={<div className="page-wrapper">{element}</div>}
						/>
					))
				}
			</Routes>
		</Suspense>
	);
};
