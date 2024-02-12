import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { addActiveFilters, deleteActiveFilters } from '../../actions';

const CatalogFilterItem = ({ item, wrapperKey }) => {
  // const { activeFilters } = useSelector(state => state);
  const [visibleFilter, setVisibleFilter] = useState(true);
  const [filterValue, setFilterValue] = useState(0);
  // const [inputChecked, setInputChecked] = useState(false);
  const { goods } = useSelector(state => state);
  const { name, filterKey} = item;
  const dispatch = useDispatch();

  useEffect(() => {
    setFilterValue(createFilterCurrent(name, goods, wrapperKey))
  }, [goods])
  
  // useEffect(() => {
  //   inputChecked ? addActiveFilter(activeFilters, filterKey): removeActiveFilter(activeFilters, filterKey);
  // }, [inputChecked])

  // const removeActiveFilter = (activeFilters, key) => {
  //   if (activeFilters.includes(key)) {
  //     return  dispatch(deleteActiveFilters(key));
  //   }

  //   return null;
  // }

  // const addActiveFilter = (activeFilters, key) => {
  //   if (activeFilters.includes(key)) {
  //     return null;
  //   }
    
  //   return dispatch(addActiveFilters(key));
  // }

  const toggleVisibleClassForFiltersBlock = () => {
    setVisibleFilter(false)
  }

  const createFilterCurrent = (name, goods, wrapperKey) => {
    if (goods.length > 0) {
      let filterCurrent = goods.filter(good => {
        if (wrapperKey === "collection") {
          return good.collection.includes(name) ? good : null
        } else if (wrapperKey === "material") {
          return good.material === name ? good : null
        } else if (wrapperKey === "color") {
          return good.color === name ? good : null
        }
      }).length;
      
      if (filterCurrent === 0) {
        toggleVisibleClassForFiltersBlock()
      }

      return filterCurrent;
    }

    return null;
  }

  return (
    visibleFilter ? <div className={'catalog__goods-filters__filter'}>
      <div className='catalog__goods-filters__input'>
        {/* <input value={filterKey} type='checkbox' checked={inputChecked} onChange={() => setInputChecked(!inputChecked)} id={filterKey} /> */}
        <input value={filterKey} type='checkbox' id={filterKey} />
        <label className='catalog__goods-filters__label'  htmlFor={filterKey}>{name}</label>
      </div>
      <span className='catalog__goods-filters__current'>{filterValue}</span>
    </div> : null
  )
}

export default CatalogFilterItem;