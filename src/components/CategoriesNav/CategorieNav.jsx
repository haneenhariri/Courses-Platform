// CategorieNav.js
import './CategorieNav.css'
import { navItem } from '../../const/data/CategorieData'

export default function CategorieNav({ selectedCategory, onSelectCategory }) {
  return (
    <section className='HH-cNav'>
      <ul className='HH-ul'>
        {navItem.map((item, i) => (
          <li
            key={i}
            className={`HH-cNav-link ${selectedCategory === item.text ? 'active' : ''}`}
            onClick={() => onSelectCategory(item.text)}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div>
        <span className='HH-span'>Sort by</span>
        <img src="./image/BlogImg/blog icons/Icon Sort by.svg" alt="sort icon" />
      </div>
    </section>
  );
}
