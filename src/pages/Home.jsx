import React from 'react';

import { Sort } from '../components/Sort';
import { Category } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/Pizza-block';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64bf508f5ee688b6250d425a.mockapi.io/items')
      .then((data) => data.json())
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Category />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza, index) => <PizzaBlock key={pizza.id} {...pizza} />)
          : [...new Array(6)].map((_, index) => <Skeleton key={index} />)}
      </div>
    </>
  );
}
