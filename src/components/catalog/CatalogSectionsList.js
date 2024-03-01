import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useHttp } from '../../hooks/http.hook';

import CatalogSection from './CatalogSection';

import { filtersFetching, filtersFetched, filtersFetchingError } from '../../actions';

import './catalog.scss';

const CatalogSectionsList = () => {
  const { filters, goods } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  // Функция для подсчета количества товаров относящихся к разделу.
  const numberProductsInSection = (goods, title) => {
    if (goods.length > 0) {
      return goods.filter((item) => item.catalogFilter === title).length
    }
    return "Нет";
  }

  // Функция для рендера карточек секций.
  const renderCatalogFiltersList = (arr, goods) => {
    if (Object.keys(arr).length > 0) {
      return arr.catalogFilter.map((item) => {
        const { title, photo1, photo2, photo3 } = {...item};
        const photos = [ photo1, photo2, photo3 ]
        const current = numberProductsInSection(goods, item.title);
        if (current === 0) return null;
        return <CatalogSection title={title} value={current} photos={photos}/>
      })
    }
    return null;
  }

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError))
  }, [])

  const catalogFilters = useMemo(() => renderCatalogFiltersList(filters, goods), [filters])

  return (
    <ul className='catalog__sections-list'>
      {catalogFilters}
    </ul>
  )
}

export default CatalogSectionsList;