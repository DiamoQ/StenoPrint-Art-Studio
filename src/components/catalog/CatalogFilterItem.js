import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addActiveFilters, deleteActiveFilters } from '../../actions';

const CatalogFilterItem = ({ item, wrapperKey }) => {
  const { activeFiltersPull, activeFilters } = useSelector(state => state);
  const [visibleFilter, setVisibleFilter] = useState(true);
  const [filterValue, setFilterValue] = useState();
  const [inputChecked, setInputChecked] = useState(false);
  const { goods } = useSelector(state => state);
  const { name, variantKey} = item;
  const dispatch = useDispatch();

  useEffect(() => {
    setFilterValue(calculateFilterValue(name, goods, wrapperKey))
  }, [goods])

  useEffect(() => {
    filterValue === 0 ? setVisibleFilter(false): setVisibleFilter(true);
  }, [filterValue])

  useEffect(() => {
    if(activeFilters.material.length === 0 && activeFilters.color.length === 0 && activeFilters.collection.length === 0 &&  inputChecked)  setInputChecked(false);
  }, [activeFilters])

  const changeActiveFilter = (activeFiltersPull, name, wrapperFiltersKey) => {
    setInputChecked(!inputChecked)
    if (activeFiltersPull.color.includes(name) || activeFiltersPull.material.includes(name) || activeFiltersPull.collection.includes(name)) {
      return  dispatch(deleteActiveFilters(name, wrapperFiltersKey));
    }

    return dispatch(addActiveFilters(name, wrapperFiltersKey));
  }

  // Функция подсчета товара относящегося к определенному фильтру. name - название фильтра, goods - массив товаров, wrapperKey - категория фильтра. 
  const calculateFilterValue = (name, goods, wrapperKey) => {
    if (goods.length === 0) return null;
      
    return goods.filter(good => {
      if (wrapperKey === "collection") {
        return good.collection.includes(name);
      } else if (wrapperKey === "material") {
        return good.material === name;
      } else if (wrapperKey === "color") {
        return good.color === name;
      }
    }).length;
  }

  if (!visibleFilter) return null;
  return ( 
    <div className={'catalog__goods-filters__filter'}>
      <div className='catalog__goods-filters__input'>
        <input value={variantKey} type='checkbox' checked={inputChecked} onChange={() => changeActiveFilter(activeFiltersPull, name, wrapperKey)} id={variantKey} />
        <label className='catalog__goods-filters__label' htmlFor={variantKey}>{name}</label>
      </div>
      <span className='catalog__goods-filters__current'>{filterValue}</span>
    </div>
  )
}

export default CatalogFilterItem;