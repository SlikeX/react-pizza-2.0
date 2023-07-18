import React from 'react';
export function Category() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              className={index === activeIndex ? 'active' : ''}
              onClick={() => onClickCategory(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
