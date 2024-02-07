import { Link } from 'react-router-dom';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import CatalogSectionsList from './CatalogSectionsList';
import CatalogFilter from './CatalogFilter';
import CatalogGoods from './CatalogGoods'

import './catalog.scss';

const Catalog = () => {
    
  return (
    <>
       <Breadcrumbs>
        <Link to="/"></Link>
        <span>/</span>
        <span>Каталог товаров</span>
      </Breadcrumbs>
      <h1 className='page__title'>Каталог товаров</h1>
      <CatalogSectionsList/>
      <div className='catalog__goods'>
        <CatalogFilter/>
        <CatalogGoods/>
    </div>
    </>
  )
}

export default Catalog;