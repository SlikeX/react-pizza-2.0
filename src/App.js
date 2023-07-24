import './App.css';
import './scss/app.scss';
import { Header } from './components/Header';
import { Sort } from './components/Sort';
import { Category } from './components/Categories';
import { PizzaBlock } from './components/Pizza-block';
import pizzas from './assets/pizzas.json';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Category />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza, index) => {
                return <PizzaBlock key={pizza.id} {...pizza} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
