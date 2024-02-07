import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Header from '../header/Header';
import Home from '../home/Home';
import Catalog from '../catalog/Catalog';
// import Spinner from '../spinner/Spinner';

import './app.scss';

const App = () => {
    
    return (
        <BrowserRouter>
            <Header/>
            <main className="app">
                <div className='container'>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<Home/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                        </Route>
                    </Routes>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App;