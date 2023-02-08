import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div className="page-wrapper">Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={(
                            <div className="page-wrapper">
                                {route.element}
                            </div>
                        )}
                    />
                )}
            </Routes>
        </Suspense>
    )
}

export default AppRouter;