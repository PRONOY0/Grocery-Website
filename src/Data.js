import greenApple from "./resources/fruits/GreenApple.png";
import Maltas from "./resources/fruits/Fresh Indian malta.png";
import Mangoes from "./resources/fruits/Mangoes.png";
import banana from "./resources/fruits/banana.jpg";
import Promogenate from "./resources/fruits/promogenate.jpg";
import redApple from "./resources/fruits/red apple.jpg";
import Brinjal from "./resources/vegetables/Brinjal.png";
import chili from "./resources/vegetables/Chili.png";
import cabbage from "./resources/vegetables/Chinese Cabbage.png";
import CaurliFlower from "./resources/vegetables/CaurliFlower.png";
import Capsicum from "./resources/vegetables/Green Capsicum.png";
import Tomatoes from "./resources/vegetables/Tomatoes.png";
import potatoes from "./resources/vegetables/potatoes.png";
import pork from "./resources/meat/raw-pork.jpg";
import chicken from "./resources/meat/chicken.jpg";
import mutton from "./resources/meat/mutton.jpg";
import eggs from "./resources/meat/eggs.jpg";
import lamb from "./resources/meat/lamb.jpg";
import fish from "./resources/meat/salmon.jpg";
import Pringles from "./resources/snacks/pringles.jpg";
import Chips from "./resources/snacks/chips.jpg";
import BananaChips from "./resources/snacks/banana chips.jpg";
import Maggi from "./resources/snacks/maggi.jpg";
import Mazza from "./resources/snacks/mazza.png";
import Samosa from "./resources/snacks/samosa.jpg";
import Pepsi from "./resources/Beverages/pepsi.jpg";
import CocaCola from "./resources/Beverages/coca cola.jpg";
import coffee from "./resources/Beverages/coffee.jpg";
import realJuice from "./resources/Beverages/real juice.jpg";
import soda from "./resources/Beverages/soda.jpg";
import sprite from "./resources/Beverages/sprite.jpg";
import Whitebread from "./resources/Bread & Bakery/white-bread.jpg";
import BrownBread from "./resources/Bread & Bakery/brown bread.jpg";
import BurgerBread from "./resources/Bread & Bakery/burger bread.jpg";
import honey from "./resources/Bread & Bakery/honey.jpg";
import butter from "./resources/Bread & Bakery/Butter.jpg";
import PeanutButter from "./resources/Bread & Bakery/peanut butter.jpg";
import Exo from "./resources/Dish Detergents/exo.jpg";
import ScotchBrite from "./resources/Dish Detergents/scotch brite.jpg";
import SteelWool from "./resources/Dish Detergents/steelwool.jpg";
import sunlight from "./resources/Dish Detergents/sunlight.jpg";
import vimbar from "./resources/Dish Detergents/vim bar.jpg";
import vim from "./resources/Dish Detergents/vim.jpg";
import coconutOil from "./resources/Cooking/coconut oil.jpg";
import garamMasala from "./resources/Cooking/garam masala.jpg";
import GheeOil from "./resources/Cooking/ghee oil.jpg";
import mustardOil from "./resources/Cooking/mustard oil.jpg";
import redChili from "./resources/Cooking/red chilli.jpg";
import salt from "./resources/Cooking/salt.jpg";
import turmeric from "./resources/Cooking/turmeric.jpg";
import cereals from "./resources/Diabetic Food/cereals.jpg";
import cereals2 from "./resources/Diabetic Food/cereals2.jpg";
import chocolates from "./resources/Diabetic Food/chocolates.jpg";
import kellogs from "./resources/Diabetic Food/kellogs.jpg";
import matthi from "./resources/Diabetic Food/matthi.jpg";
import powder from "./resources/Diabetic Food/powder sugarfree.jpg";
import almond from "./resources/Baking needs/almond.jpg";
import kaju from "./resources/Baking needs/kaju.jpg";
import bakingPowder from "./resources/Baking needs/baking powder.jpg";
import bakingSoda from "./resources/Baking needs/baking soda.jpg";
import hersheyCocoa from "./resources/Baking needs/hershey cocoa.jpg";
import kismis from "./resources/Baking needs/kismis.jpg";

const data = [
  {
    category: "FreshFruit",
    images: greenApple,
    productName: "Green Apple",
    id: "1",
    price: 215,
    PopularProducts: "Yes",
  },

  {
    category: "FreshFruit",
    images: Maltas,
    productName: "Maltas",
    id: "2",
    price: 345,
    PopularProducts: "Yes",
  },

  {
    category: "FreshFruit",
    images: Mangoes,
    productName: "Mangoes",
    id: "3",
    price: 120,
  },
  {
    category: "FreshFruit",
    images: redApple,
    productName: "Apple",
    id: "4",
    price: 255,
  },
  {
    category: "FreshFruit",
    images: banana,
    productName: "Banana",
    id: "5",
    price: 180,
  },
  {
    category: "FreshFruit",
    images: Promogenate,
    productName: "Promogenate",
    id: "6",
    price: 320,
  },
  {
    category: "Freshvegetables",
    images: Brinjal,
    productName: "Brinjal",
    id: "7",
    price: 150,
    PopularProducts: "Yes",
  },
  {
    category: "Freshvegetables",
    images: Tomatoes,
    productName: "Tomatoes",
    id: "8",
    price: 280,
  },
  {
    category: "Freshvegetables",
    images: potatoes,
    productName: "Potatoes",
    id: "9",
    price: 420,
    PopularProducts: "Yes",
  },
  
  {
    category: "Freshvegetables",
    images: cabbage,
    productName: "Cabbage",
    id: "10",
    price: 670,
    PopularProducts: "Yes",
  },
  {
    category: "Freshvegetables",
    images: CaurliFlower,
    productName: "Caurliflower",
    id: "11",
    price: 110,
    PopularProducts: "Yes",
  },
  {
    category: "Freshvegetables",
    images: Capsicum,
    productName: "Capsicum",
    id: "12",
    price: 430,
    PopularProducts: "Yes",
  },
  {
    category: "Meat",
    images: pork,
    productName: "Pork",
    id: "13",
    price: 320,
  },
  {
    category: "Meat",
    images: chicken,
    productName: "Chicken",
    id: "14",
    price: 590,
  },
  {
    category: "Meat",
    images: mutton,
    productName: "Mutton",
    id: "15",
    price: 220,
  },
  {
    category: "Meat",
    images: eggs,
    productName: "Eggs",
    id: "16",
    price: 45,
  },
  {
    category: "Meat",
    images: lamb,
    productName: "Lamb",
    id: "17",
    price: 340,
  },
  {
    category: "Meat",
    images: fish,
    productName: "Fish",
    id: "18",
    price: 275,
  },
  {
    category: "Snacks",
    images: Pringles,
    productName: "Pringles",
    id: "19",
    price: 165,
    PopularProducts: "Yes",
  },
  {
    category: "Snacks",
    images: Chips,
    productName: "Chips",
    id: "20",
    price: 75,
  },
  {
    category: "Snacks",
    images: BananaChips,
    productName: "BananaChips",
    id: "21",
    price: 590,
  },
  {
    category: "Snacks",
    images: Maggi,
    productName: "Maggi",
    id: "22",
    price: 390,
  },
  {
    category: "Snacks",
    images: Mazza,
    productName: "Mazza",
    id: "23",
    price: 135,
  },
  {
    category: "Snacks",
    images: Samosa,
    productName: "Samosa",
    id: "24",
    price: 420,
  },
  {
    category: "Beverages",
    images: Pepsi,
    productName: "Pepsi",
    id: "25",
    price: 255,
  },
  {
    category: "Beverages",
    images: CocaCola,
    productName: "CocaCola",
    id: "26",
    price: 180,
  },
  {
    category: "Beverages",
    images: sprite,
    productName: "Sprite",
    id: "27",
    price: 670,
  },
  {
    category: "Beverages",
    images: soda,
    productName: "Soda",
    id: "28",
    price: 430,
  },
  {
    category: "Beverages",
    images: realJuice,
    productName: "Real Juice",
    id: "29",
    price: 110,
  },
  {
    category: "Beverages",
    images: coffee,
    productName: "Coffee",
    id: "30",
    price: 320,
  },
  {
    category: "BreadBakery",
    images: Whitebread,
    productName: "White Bread",
    id: "31",
    price: 75,
  },
  {
    category: "BreadBakery",
    images: BrownBread,
    productName: "Brown Bread",
    id: "32",
    price: 590,
  },
  {
    category: "BreadBakery",
    images: BurgerBread,
    productName: "Burger Bread",
    id: "33",
    price: 220,
  },
  {
    category: "BreadBakery",
    images: honey,
    productName: "Honey",
    id: "34",
    price: 340,
  },
  {
    category: "BreadBakery",
    images: butter,
    productName: "Butter",
    id: "35",
    price: 135,
  },
  {
    category: "BreadBakery",
    images: PeanutButter,
    productName: "Peanut Butter",
    id: "36",
    price: 420,
  },
  {
    category: "Dishdetergent",
    images: Exo,
    productName: "Exo",
    id: "37",
    price: 255,
  },
  {
    category: "Dishdetergent",
    images: SteelWool,
    productName: "SteelWool",
    id: "38",
    price: 180,
  },
  {
    category: "Dishdetergent",
    images: sunlight,
    productName: "Sunlight",
    id: "39",
    price: 670,
  },
  {
    category: "Dishdetergent",
    images: ScotchBrite,
    productName: "ScotchBrite",
    id: "40",
    price: 430,
  },
  {
    category: "Dishdetergent",
    images: vim,
    productName: "Vim",
    id: "41",
    price: 110,
  },
  {
    category: "Dishdetergent",
    images: vimbar,
    productName: "Vimbar",
    id: "42",
    price: 320,
  },
  {
    category: "Cooking",
    images: coconutOil,
    productName: "Coconut Oil",
    id: "43",
    price: 75,
  },
  {
    category: "Cooking",
    images: garamMasala,
    productName: "Garam Masala",
    id: "44",
    price: 590,
  },
  {
    category: "Cooking",
    images: GheeOil,
    productName: "Ghee Oil",
    id: "45",
    price: 220,
  },
  {
    category: "Cooking",
    images: mustardOil,
    productName: "Mustard Oil",
    id: "46",
    price: 340,
  },
  {
    category: "Cooking",
    images: redChili,
    productName: "Red chili",
    id: "47",
    price: 135,
  },
  {
    category: "Cooking",
    images: salt,
    productName: "Salt",
    id: "48",
    price: 420,
  },
  {
    category: "DiabeticFood",
    images: cereals,
    productName: "Cereals",
    id: "49",
    price: 180,
  },
  {
    category: "DiabeticFood",
    images: cereals2,
    productName: "Cereal keto friendly",
    id: "50",
    price: 670,
  },
  {
    category: "DiabeticFood",
    images: chocolates,
    productName: "Chocolates",
    id: "51",
    price: 430,
  },
  {
    category: "DiabeticFood",
    images: kellogs,
    productName: "Kellogs",
    id: "52",
    price: 110,
  },
  {
    category: "DiabeticFood",
    images: matthi,
    productName: "Matthi",
    id: "53",
    price: 320,
  },
  {
    category: "DiabeticFood",
    images: powder,
    productName: "Powder Sugarfree",
    id: "54",
    price: 75,
  },
  {
    category: "BakingNeeds",
    images: almond,
    productName: "Almonds",
    id: "55",
    price: 590,
  },
  {
    category: "BakingNeeds",
    images: kaju,
    productName: "Cashew",
    id: "56",
    price: 220,
  },
  {
    category: "BakingNeeds",
    images: bakingPowder,
    productName: "Baking Powder",
    id: "57",
    price: 340,
  },
  {
    category: "BakingNeeds",
    images: hersheyCocoa,
    productName: "Hershey Cocoa",
    id: "58",
    price: 135,
  },
  {
    category: "BakingNeeds",
    images: kismis,
    productName: "Kismis",
    id: "59",
    price: 420,
  },
  {
    category: "BakingNeeds",
    images: bakingSoda,
    productName: "Baking Soda",
    id: "60",
    price: 255,
  },
];

export default data;
