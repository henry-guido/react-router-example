import { Link } from "react-router-dom";
import "./App.css";
import { Route, Routes, useParams, Outlet, NavLink  } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;

const SeachPage = () => {
  const stores = ["home", "electronic", "dress", "garden"];
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {stores.map((store) => (
          <li key={store}>
            <Link to={`/store/${store}`}>{store}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Store = () => {
  const { category } = useParams()
  return (
    <div>
      <h1>My Store category</h1>
      <br />
      {category}
      <Link to="details"> Go to details</Link>
      <Outlet />
    </div>
    
  )
};

const CategoryDetails = () => {
  const { category } = useParams()
  return (
    <div>
      <h1>Category Details {category}</h1>
    </div>
  )
}

const CategoryIndex = () =>{
  return (
    <div>
      <h1>Category Index</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Router👌</h1>
        <nav>
          <ul>
            <li>
              <NavLink 
              to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">SearchPage</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SeachPage />} />
        <Route path="/store/:category" element={<Store />} >
          <Route index element={<CategoryIndex />} />
          <Route path="details" element={<CategoryDetails />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
