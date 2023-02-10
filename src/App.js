import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';
import Details from './containers/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/" exact element={<ProductListing></ProductListing>}></Route>
        <Route path="/product/:id" exact element={<ProductDetail></ProductDetail>}></Route>
        {/* <Route path="/product/:productId" exact element={<ProductDetail></ProductDetail>}></Route> */}
        <Route path="/details/:id" exact element={<Details></Details>}></Route>
        <Route>404</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
