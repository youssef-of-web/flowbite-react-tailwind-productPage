import "./App.css";
import CardGroup from "./components/Card/CardGroup";
import Nav from "./components/Nav/Nav";
import SearchForm from "./components/SearchForm/SearchForm";
import { $DATA } from "./data/FakeData";
function App() {
  return (
    <div className="App max-w-5xl mx-auto">
      <div className="nav__app">
        <Nav count={10} />
      </div>
      <div className="search__app">
        <SearchForm />
      </div>
      <div className="card__app mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-2 gap-y-2">
          {$DATA.map(({ title, image, price, rating }) => {
            return (
              <CardGroup
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
