import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';

import CatalogGoodsItem from './CatalogGoodsItem';
import Spinner from '../spinner/Spinner';

import { goodsFetching, goodsFetched, goodsFetchingError } from '../../actions';

import './catalog.scss';

const CatalogGoods = () => {

  const { goods, goodsLoadingStatus } = useSelector(state => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(goodsFetching());
    request("http://localhost:3001/wallpapers")
      .then(data => dispatch(goodsFetched(data)))
      .catch(() => dispatch(goodsFetchingError))
  }, [])

  if (goodsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (goodsLoadingStatus === "error") {
    return <h2>Ошибка загрузки</h2>
  }

  const renderGoodsList = (arr) => {

    if (arr.length === 0) {
      return <h2>Товаров пока нет...</h2>
    }

    return arr.map((item) => {
      const { id, name, mainPhoto, articul, discount, popular, newPosition, variants } = item;

      let count = 0;
      
      const priceItem= variants.filter(item => {
        if (item.price < count && count !== 0) {
          count = item.price
          return item
        } else if (count === 0) {
          count = item.price
          return item
        }
      })

      const { price, oldPrice } = priceItem[0];


      return <CatalogGoodsItem key={id} name={name} photo={mainPhoto} price={price} oldPrice={oldPrice} articul={articul} discount={discount} popular={popular} newGood={newPosition} />
    })

  }

  const elements = renderGoodsList(goods);

  return (
    <ul className='catalog__goods-list'>
      {elements}
    </ul>
  )
}

export default CatalogGoods;