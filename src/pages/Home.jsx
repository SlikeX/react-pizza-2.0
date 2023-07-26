import React from 'react';

import { Sort } from '../components/Sort';
import { Category } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/Pizza-block';
import { Skeleton } from '../components/PizzaBlock/Skeleton';

export function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [activeSortType, setActiveSortType] = React.useState(0);
  const [categoryId, setCategoryId] = React.useState(0);

  React.useEffect(() => {
    const url = getUrl(activeSortType, categoryId);
    setIsLoaded(false);
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        setItems(res);
        setIsLoaded(true);
      });
    window.scrollTo(0, 0);
  }, [activeSortType, categoryId]);

  function getUrl(sortType, category) {
    const baseUrl = new URL('https://64bf508f5ee688b6250d425a.mockapi.io/items');
    const sortTypeEnum = ['rating', 'price', 'title'];
    baseUrl.searchParams.append('sortBy', sortTypeEnum[sortType]);
    if (category) {
      baseUrl.searchParams.append('category', category);
    }
    return baseUrl;
  }

  return (
    <>
      <div className="content__top">
        <Category categoryId={categoryId} onClickCategory={setCategoryId} />
        <Sort activeSortType={activeSortType} onClickSort={setActiveSortType} />
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
