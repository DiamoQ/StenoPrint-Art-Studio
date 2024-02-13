import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { addActiveFilters, deleteActiveFilters } from '../../actions';

const CatalogFilterItem = ({ item, filterWrapperRef }) => {
  // const { activeFilters } = useSelector(state => state);
  const [visibleFilter, setVisibleFilter] = useState(true);
  const [filterValue, setFilterValue] = useState();
  // const [inputChecked, setInputChecked] = useState(false);
  const { goods } = useSelector(state => state);
  const { name, filterRef} = item;
  const dispatch = useDispatch();

  useEffect(() => {
    setFilterValue(createFilterCurrent(name, goods, filterWrapperRef))
    
  }, [goods])

  useMemo(() => {
    filterValue === 0 ? setVisibleFilter(false): setVisibleFilter(true) ;
  }, [filterValue])
  
  // useEffect(() => {
  //   inputChecked ? addActiveFilter(activeFilters, filterRef): removeActiveFilter(activeFilters, filterRef);
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

  const createFilterCurrent = (name, goods, filterWrapperRef) => {
    if (goods.length === 0) return null;
      
    return goods.filter(good => {
      if (filterWrapperRef === "collection") {
        return good.collection.includes(name);
      } else if (filterWrapperRef === "material") {
        return good.material === name;
      } else if (filterWrapperRef === "color") {
        return good.color === name;
      }
    }).length;
  }

  return (
    visibleFilter ? <div className={'catalog__goods-filters__filter'}>
      <div className='catalog__goods-filters__input'>
        {/* <input value={filterRef} type='checkbox' checked={inputChecked} onChange={() => setInputChecked(!inputChecked)} id={filterRef} /> */}
        <input value={filterRef} type='checkbox' id={filterRef} />
        <label className='catalog__goods-filters__label'  htmlFor={filterRef}>{name}</label>
      </div>
      <span className='catalog__goods-filters__current'>{filterValue}</span>
    </div> : null
  )
}

export default CatalogFilterItem;