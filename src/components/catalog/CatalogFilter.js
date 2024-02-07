import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, createRef } from 'react';
import { useHttp } from '../../hooks/http.hook';
import CatalogFilterBlock from './CatalogFilterBlock';

import Spinner from '../spinner/Spinner';

import { filtersFetching, filtersFetched, filtersFetchingError } from '../../actions';

import './catalog.scss';


const CatalogFilter = () => {

  const { filters, filtersLoadingStatus } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
      .then(data => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError))
  }, [])

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h2>Ошибка загрузки</h2>
  }

  const renderFiltersList = (arr) => {
    return arr.map((item) => {
      console.log()
      return <CatalogFilterBlock key={item.title} filters={item}/>
    })
  }

  const elements = renderFiltersList(filters);
  return (
    <div className='catalog__goods-filters'>
      {elements}
    </div>
  )
}

export default CatalogFilter;