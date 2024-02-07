import './breadcrumbs.scss';

const Breadcrumbs = ({children}) => {
    
  return (
    <nav className='breadcrumbs'>
      {children}
    </nav>
  )
}

export default Breadcrumbs;