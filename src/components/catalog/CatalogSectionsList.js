import CatalogSection from './CatalogSection';
import './catalog.scss';

import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';

const CatalogSectionsList = () => {

  return (
    <ul className='catalog__sections-list'>
      <CatalogSection title='Дизайнерские обои' value='152' photo1={photo1} photo2={photo2} photo3={photo3}/>
      <CatalogSection title='Виниловые обои' value='53' photo1={photo1} photo2={photo2} photo3={photo3}/>
      <CatalogSection title='Фирменные обои' value='25' photo1={photo1} photo2={photo2} photo3={photo3}/>
    </ul>
  )
}

export default CatalogSectionsList;