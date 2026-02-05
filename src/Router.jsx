import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import RComponents from "./Router/Rcomp";
import RPages from "./Router/Rpages";
import RProps from "./Router/Rprops";
import RForm from "./Router/Rform";

const AppRouter = () => {
  return (
    <div>
      <h1>App Router</h1>

        <nav>
            <Link to="/rcomp"> Components  </Link> |{"  "}
            <Link to="/rpages"> Pages  </Link> |{"  "}
            <Link to="/rprops"> Props</Link> |{"  "}
            <Link to="/rform"> Login </Link>
        </nav>

        <Routes>
            <Route path="/rcomp" element={<RComponents />} />
            <Route path="/rpages" element={<RPages />} />
              <Route path="/rprops" element={<RProps />} />
              <Route path="/rform" element={ <RForm/>} />
        </Routes>
    </div>
  );
};

export default AppRouter;
