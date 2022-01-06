import {Route, Routes} from "react-router-dom";
import {Details} from "../Pages/Details";
import {Home} from "../Pages/Home";
import {NotFound} from "../Pages/NotFound";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:name" element={<Details/>}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

