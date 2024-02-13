import { useState, useEffect, createRef, useMemo } from 'react';

import CatalogFilterItem from './CatalogFilterItem';

import './catalog.scss';

const CatalogFilterBlock = ({ filters }) => {
  const { title, filterWrapperRef, variants } = filters;
  const [activeFilter, setActiveFilter] = useState(false);
  const [elements, setElements] = useState();
  const [maxHeight, setMaxHeight] = useState('60px');
  const refComponent1 = createRef();
  const refComponent2 = createRef();

  useEffect(() => {
    let newHeight = refComponent1.current.getBoundingClientRect().height + refComponent2.current.getBoundingClientRect().height;
    setMaxHeight(`${newHeight + 20}px`)
  }, []);
 
  useMemo(() => {
    setElements(variants.map(item => <CatalogFilterItem item={item} filterWrapperRef={filterWrapperRef}/>));
  }, [variants]);

  const toggleActiveClassForFiltersBlock = () => {
    setActiveFilter(() => !activeFilter)
  }
  
  return (
    <div style={{ maxHeight: `${activeFilter ? maxHeight : '60px'}` }}
      className={`${activeFilter ? 'active' : ' '} catalog__goods-filters__collections catalog__goods-filters__block`}>
      <span className='catalog__goods-filters__name' ref={refComponent1} onClick={(e) => toggleActiveClassForFiltersBlock()}>{title}</span>
      <div className='catalog__goods-filters__wrapper' ref={refComponent2}>
        {elements}
      </div>
    </div>
  )
}

export default CatalogFilterBlock;