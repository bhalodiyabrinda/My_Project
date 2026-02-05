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

        <nav >
            <Link to="/rcomp" style={{ margin: '10px' }}> Components  </Link> 
            <Link to="/rpages" style={{ margin: '10px' }}> Pages  </Link> 
            <Link to="/rprops" style={{ margin: '10px' }}> Props</Link> 
            <Link to="/rform" style={{ margin: '10px' }}> Login </Link>
        </nav>

        <Routes>
            <Route path="/" element={<RComponents/>} />
            <Route path="/rcomp" element={<RComponents />} />
            <Route path="/rpages" element={<RPages />} />
            <Route path="/rprops" element={<RProps />} />
            <Route path="/rform" element={ <RForm/>} />
        </Routes>
    </div>
  );
};

export default AppRouter;
