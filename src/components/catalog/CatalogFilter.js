import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import CatalogFilterBlock from './CatalogFilterBlock';

import Spinner from '../spinner/Spinner';

import { filtersFetching, filtersFetched, filtersFetchingError } from '../../actions';

import './catalog.scss';

const CatalogFilter = () => {

  const { filters, filtersLoadingStatus } = useSelector(state => state);
  const [elements, setElementsValue] = useState(null);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError))
  }, [])

  useEffect(() => {
    setElementsValue(renderFiltersList(filters))
  }, [filters])

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h2>Ошибка загрузки</h2>
  }

  const renderFiltersList = (arr) => {
    if (Object.keys(arr).length > 0) {
      return arr.wrapperFilters.map((item) => {
        return <CatalogFilterBlock key={item.wrapperKey} filters={item}/>
      })
    }

    return null
  }
  
  return (
    <div className='catalog__goods-filters'>
      {elements}
      <div className='catalog__goods-filters__buttons'>
        <div className='catalog__goods-filters__button catalog__goods-filters__button--add'>
          Применить
        </div>
        <div className='catalog__goods-filters__button catalog__goods-filters__button--cancel'>
          Сбросить
        </div>
      </div>
    </div>
  )
}

export default CatalogFilter;