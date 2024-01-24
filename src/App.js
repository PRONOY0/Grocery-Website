import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RecipeSearch from "./pages/RecipeSearch";
import RecipePage from "./pages/RecipePage";
import PopUp from "./components/PopUp";
import data from "./Data";
import ProductsPage from "./pages/ProductsPage";
import Timer from "./components/Timer";
import Shop from "./pages/Shop";
import SingleProductPage from "./pages/SingleProductPage";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Error />} />
        <Route path="/" element={<Home products={data} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipe" element={<RecipeSearch />} />
        <Route path="/recipePage" element={<RecipePage />} />
        <Route path="/popup" element={<PopUp />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route element={<Timer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleProduct/:itemId" element={<SingleProductPage/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/paymentGateway" element={<CheckoutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
