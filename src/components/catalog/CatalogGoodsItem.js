import { Link } from 'react-router-dom';

import './catalog.scss';

const CatalogGoodsItem = ({ name ,photo, price, oldPrice, articul, discount, popular, newGood }) => {

  return (
    <li className='catalog__goods-item'>
      <Link to='#'>
        <div className='catalog__goods-image__block'>
          <img src={require('../../assets/' + photo).default} className='catalog__goods-image' alt='Фотография обоев'/>
          {discount || popular || newGood ? <div className='tag-block'>
            {discount ? <span className='discount'> -{discount}% </span> : null}
            {popular ? <span className='popular'>Популярное</span> : null}
            {newGood ? <span className='newGood'>Новинка</span> : null} 
          </div>: null}
        </div>
        <div className='catalog__goods-description'>
          <div className='catalog__goods-description__top'>
            <span className='catalog__goods-description__flor'>{name}</span>
            <div>
              <span className='catalog__goods-description__price'>от {price} ₽ /</span><span className='catalog__goods-description__price--metrs'>м2</span>
            </div>
          </div>
          <div className='catalog__goods-description__bottom'>
            <span className='catalog__goods-description__articul'>Артикул: {articul}</span>
            <div><span className='catalog__goods-description__oldPrice'>от {oldPrice} ₽ /</span><span className='catalog__goods-description__oldPrice--metrs'>м2</span></div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default CatalogGoodsItem;