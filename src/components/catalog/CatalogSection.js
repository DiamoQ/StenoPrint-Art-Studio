import { useEffect, useState } from 'react';
import './catalog.scss';

const CatalogSection = ({title, value,  photos}) => {
  const [photoPath, setPhotoPath] = useState(null);

  // Функция для построения пути к картинкам, приходящем как массив названий.
  useEffect(() => {
    const importPhotos = async () => {
        const module =  await Promise.all(photos.map(async (item) => {
          const photoModule = await import(`../../assets/${item}`);
          return photoModule.default;
        }));
        setPhotoPath(module);
    };

    importPhotos();
  }, [photos]);

  return (
    <li className='catalog__sections-item'>
      <div className='catalog__sections-photos'>
        <img src={photoPath ? photoPath[0] : ''} className='catalog__sections-photo' alt='Обложка секции 1'/>
        <img src={photoPath ? photoPath[1] : ''} className='catalog__sections-photo' alt='Обложка секции 2'/>
        <img src={photoPath ? photoPath[2] : ''} className='catalog__sections-photo' alt='Обложка секции 3'/>
      </div>
      <div className='catalog__sections-description'>
        <h2 className='catalog__sections-title'>{title}</h2>
        <div className='catalog__sections-value'>{value} товаров</div>
      </div>
    </li>
  )
}

export default CatalogSection;


