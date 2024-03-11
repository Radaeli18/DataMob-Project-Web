import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/pages/home/Home";
import Datas from "./src/pages/dataMob/Datas";



const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" exact />		
                <Route element={<Datas/>} path="/data"/>
                {/* <Route element={<DataMob />} path="/data" /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
