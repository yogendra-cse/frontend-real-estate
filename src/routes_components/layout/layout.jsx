import './layout.scss'
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import HomePage from '../HomePage/homePage';
const Layout = () =>{
    return(
        <div className="layout">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
        <Outlet />
     </div>
    </div>
    )
}
export default Layout;
// <div className="layout">
    //   <div className="navbar">
    //   <Navbar/>
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //  </div>
    // </div>