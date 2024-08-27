import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signin from "./pages/Sign-in/Signin";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./pages/Sign-up/SignUp";
import Error from "./pages/Error/Error";
import AboutUs from "./pages/About/AboutUs";
import Contact from "./pages/Contacts/Contact";
import RecipeSearch from "./pages/RecipeSearchPage/RecipeSearch";
import RecipePage from "./pages/RecipePage/RecipePage";
import PopUp from "./components/PopUp/PopUp";
import data from "./Data";
import Timer from "./components/Timer/Timer";
import Shop from "./pages/Shop/Shop";
import SingleProductPage from "./pages/Single-Product/SingleProductPage";
import Cart from "./pages/Cart/Cart";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<Error />} />
        <Route path="/" element={<Home products={data} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/recipe" element={<RecipeSearch />} />
        <Route path="/recipePage" element={<RecipePage />} />
        <Route path="/popup" element={<PopUp />} />
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
