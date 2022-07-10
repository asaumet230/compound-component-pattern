import { FC } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

//Components:
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

// Images:
import logo from '../logo.svg';

const Navigation: FC = () => {


    return (
        <BrowserRouter>
            <div className="main-layout">

                <nav>
                    <img src={logo} alt="Logo App" />
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>About</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/users"
                                className={({ isActive }: any) => isActive ? "nav-active" : ""}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path='/about' element={<h1>About Component</h1>} />
                    <Route path='/users' element={<h1>Users Component</h1>} />
                    <Route path='/' element={<ShoppingPage />} />

                    <Route path='/*' element={<Navigate to='/' replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default Navigation;