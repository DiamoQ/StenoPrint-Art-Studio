import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import CatalogSection from './CatalogSection';

import { filtersFetching, filtersFetched, filtersFetchingError } from '../../actions';

import './catalog.scss';

import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';

const CatalogSectionsList = () => {
  const { filters, filtersLoadingStatus } = useSelector(state => state);
  const { goods } = useSelector(state => state);
  const [catalogFilters, setCatalogFilters] = useState(null);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError))
  }, [])

  useEffect(() => {
    setCatalogFilters(renderCatalogFiltersList(filters, goods))
  }, [filters])


  const numberProductsInSection = (goods, title) => {
    if (goods.length > 0) {
      return goods.filter((item) => item.catalogFilter === title).length
    }

    return "Нет"
  }

  const renderCatalogFiltersList = (arr, goods) => {
    if (Object.keys(arr).length > 0) {
      return arr.catalogFilter.map((item) => {
        const { title, photo1, photo2, photo3 } = {...item};
        const current = numberProductsInSection(goods, item.title);
        return <CatalogSection title={title} value={current} photo1={photo1} photo2={photo2} photo3={photo3}/>
      })
    }

    return null
  }

  return (
    <ul className='catalog__sections-list'>
      {catalogFilters}
    </ul>
  )
}

export default CatalogSectionsList;