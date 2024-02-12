import './catalog.scss';

const CatalogSection = ({title, value,  photo1, photo2, photo3}) => {

  return (
    <li className='catalog__sections-item'>
      <div className='catalog__sections-photos'>
        <img src={require('../../assets/' + photo1).default} className='catalog__sections-photo' alt='Обложка секции 1'/>
        <img src={require('../../assets/' + photo2).default} className='catalog__sections-photo' alt='Обложка секции 2'/>
        <img src={require('../../assets/' + photo3).default} className='catalog__sections-photo' alt='Обложка секции 3'/>
      </div>
      <div className='catalog__sections-description'>
        <h2 className='catalog__sections-title'>{title}</h2>
        <div className='catalog__sections-value'>{value} товаров</div>
      </div>
    </li>
  )
}

export default CatalogSection;


