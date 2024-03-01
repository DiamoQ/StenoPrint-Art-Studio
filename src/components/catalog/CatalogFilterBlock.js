import { useState, useEffect, createRef, useMemo } from 'react';

import CatalogFilterItem from './CatalogFilterItem';

import './catalog.scss';

const CatalogFilterBlock = ({ filters }) => {
  const { title, wrapperKey, variants } = filters;
  const [activeFilter, setActiveFilter] = useState(false);
  const [maxHeight, setMaxHeight] = useState('60px');
  const filterNameRef = createRef();
  const filterWrapperRef = createRef();

  useEffect(() => {
    let newHeight = filterNameRef.current.getBoundingClientRect().height + filterWrapperRef.current.getBoundingClientRect().height;
    setMaxHeight(`${newHeight + 82}px`)
  }, []);
 
  const elements = useMemo(() => variants.map(item => <CatalogFilterItem item={item} wrapperKey={wrapperKey}/>), [variants, wrapperKey]);

  const toggleActiveClassForFiltersBlock = () => {
    setActiveFilter(() => !activeFilter)
  }
  
  return (
    <div style={{ maxHeight: `${activeFilter ? maxHeight : '60px'}` }}
      className={`${activeFilter ? 'active' : ' '} catalog__goods-filters__collections catalog__goods-filters__block`}>
      <span className='catalog__goods-filters__name' ref={filterNameRef} onClick={(e) => toggleActiveClassForFiltersBlock()}>{title}</span>
      <div className='catalog__goods-filters__wrapper' ref={filterWrapperRef}>
        {elements}
      </div>
    </div>
  )
}

export default CatalogFilterBlock;