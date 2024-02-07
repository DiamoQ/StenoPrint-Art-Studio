import { useState } from 'react';
import { useSelector } from 'react-redux';

const CatalogFilterItem = ({ item, key }) => {
  const [visibleFilter, setVisibleFilter] = useState(true);
  const { goods } = useSelector(state => state);

  const toggleVisibleClassForFiltersBlock = () => {
    setVisibleFilter(() => !visibleFilter)
  }

  const createFilterCurrent = (item, goods, key) => {
    const filterCurrent = goods.filter(good => {
      if (key === "collection") {
        return good.collection.filter(collection => collection === item.name).length > 0 ? good : null
      } else if (key === "material") {
        return good.material === item.name ? good : null
      } else if (key === "color") {
        return good.color === item.name ? good : null
      }
    }).length;
    
    if (filterCurrent === 0) {
      toggleVisibleClassForFiltersBlock()
    }

    return filterCurrent;
  }

  return (
    <div key={item.key} className={`catalog__goods-filters__filter ${visibleFilter ? 'catalog__goods-filters__filter--active' : ''}`}>
      <div className='catalog__goods-filters__input'>
        <input value={item.key} type='checkbox' id={item.key} />
        <label className='catalog__goods-filters__label' htmlFor={item.key}>{item.name}</label>
      </div>
      <span className='catalog__goods-filters__current'>{createFilterCurrent(item, goods, key)}</span>
    </div>

  )
}

export default CatalogFilterItem;