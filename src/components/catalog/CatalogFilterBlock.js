import { useState, useEffect, createRef } from 'react';

import CatalogFilterItem from './CatalogFilterItem';

import './catalog.scss';

const CatalogFilterBlock = ({ filters }) => {
  const { title, wrapperKey, variants } = filters;
  const [activeFilter, setActiveFilter] = useState(false);
  const [maxHeight, setMaxHeight] = useState('60px');
  const refComponent1 = createRef();
  const refComponent2 = createRef();

  useEffect(() => {
    let newHeight = refComponent1.current.getBoundingClientRect().height + refComponent2.current.getBoundingClientRect().height;
    setMaxHeight(`${newHeight + 20}px`)
  }, []);

  const toggleActiveClassForFiltersBlock = () => {
    setActiveFilter(() => !activeFilter)
  }
  
  return (
    <div style={{ maxHeight: `${activeFilter ? maxHeight : '60px'}` }}
      className={`${activeFilter ? 'active' : ' '} catalog__goods-filters__collections catalog__goods-filters__block`}>
      <span className='catalog__goods-filters__name' ref={refComponent1} onClick={(e) => toggleActiveClassForFiltersBlock()}>{title}</span>
      <div className='catalog__goods-filters__wrapper' ref={refComponent2}>
        {variants.map(item => <CatalogFilterItem item={item} wrapperKey={wrapperKey}/>)}
      </div>
    </div>
  )
}

export default CatalogFilterBlock;