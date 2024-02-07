import { Link, NavLink } from 'react-router-dom';

import './header.scss';
import logo from '../../assets/logo.svg';
import Instagramm from '../../assets/insta.svg';
import VK from '../../assets/vk.svg';

const Header = () => {
    
  return (
      <header className='header'>
        <div className='container'>
          <Link to='/' relative="path" className='logo'><img src={logo} alt='Логотип компании StenoPrint'/></Link> 
          <div className='header__menu'>
            <div className='header__menu-top'>
              <div className='header__menu-search'>
                <input type='text' maxLength='30' placeholder='Поиск...' className='header__menu-search__input'/>
                <div className='header__menu-search__button'></div>
              </div>
              <div className='header__menu-contacts__block'>
                <div className='header__menu-contacts'>
                  <p className='header__menu-contacts__text'>Позвонить нам:</p>
                  <a href='tel:+75558889866' className='header__menu-contacts__value header__menu-contacts__value--phone'>+7 (555) 888-98-66</a>
                </div>
                <div className='header__menu-contacts'>
                  <p className='header__menu-contacts__text'>Написать нам:</p>
                  <a href='mailto:info@stenoprint.ru' className='header__menu-contacts__value'>info@stenoprint.ru</a>
                </div>
                <div className='header__menu-sociate__block'>
                  <a href='https://instagram.com' className='header__menu-sociate'>
                    <img src={Instagramm} alt='Ссылка на нашу группу в Instagramm'></img>
                  </a>
                  <a href='https://vk.com' className='header__menu-sociate'>
                    <img src={VK} alt='Ссылка на нашу группу в ВКонтакте'></img>
                  </a>
                </div>
              </div>
            </div>
            <div className='header__menu-bottom'>
              <nav className='header__menu-nav'>
                <ul>
                  <li>
                    <NavLink to='/catalog' end relative="path" className='header__menu-nav__item header__menu-nav__item--catalog'>Каталог товаров</NavLink>
                  </li>
                </ul>
                 {/* <Link className='header__menu-nav__item'>Наши услуги</Link>
                 <Link className='header__menu-nav__item'>О студии</Link>
                 <Link className='header__menu-nav__item'>Портфолио</Link>
                 <Link className='header__menu-nav__item'>Блог</Link>
                 <Link className='header__menu-nav__item'>Контакты</Link>  */}
              </nav>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header;