import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useHttp } from '../../hooks/http.hook';

import CatalogSection from './CatalogSection';

import { filtersFetching, filtersFetched, filtersFetchingError } from '../../actions';

import './catalog.scss';

const CatalogSectionsList = () => {
  const { filters, goods } = useSelector(state => state);
  const [catalogFilters, setCatalogFilters] = useState(null);
  const dispatch = useDispatch();
  const { request } = useHttp();

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
        const photos = [ photo1, photo2, photo3 ]
        const current = numberProductsInSection(goods, item.title);
        return <CatalogSection title={title} value={current} photos={photos}/>
      })
    }

    return null
  }

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError))
  }, [])

  useMemo(() => {
    setCatalogFilters(renderCatalogFiltersList(filters, goods))
  }, [filters])

  return (
    <ul className='catalog__sections-list'>
      {catalogFilters}
    </ul>
  )
}

export default CatalogSectionsList;