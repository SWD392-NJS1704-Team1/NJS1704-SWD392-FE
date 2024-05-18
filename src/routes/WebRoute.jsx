import { Routes, Route } from "react-router-dom"
import { routes } from "."

function WebRoute() {

    return (
        <Routes>
            {routes.map((route) => {
                const Page = route.component
                const Layout = route.layout

                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Layout><Page /></Layout>} />
                )
            })}
        </Routes>
    )
}

export default WebRoute