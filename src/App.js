import "./App.css";
import { routes } from "./routes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PrivateRoute } from "./PrivateRoutes";
import {useSelector} from 'react-redux'
function App() {
  const {user} = useSelector(state=>state.auth)
  return (
    <div className="App">
      <Header />
      <div className="routes">
        <Routes>
          {routes.map((route,index) => (
            route.auth && !user 
            ? (<Route key={index} path={route.path} element={<PrivateRoute><route.element/></PrivateRoute>}/>) 
            : (<Route key={index} path={route.path} element={<route.element />}></Route>)
            ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
