import React from 'react';
export function Category({ categoryId, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              className={index === categoryId ? 'active' : ''}
              key={index}
              onClick={() => onClickCategory(index)}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
