import React from 'react'
import '../../asset/css/Style.css'
import profile from '../../asset/image/nav-bar-profile.png'
// import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';




function Header() {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="nav-bar-1">
                        <h2>Graphitron</h2>
                        <div className="nav-bar-2">
                            <div className="nav-bar-sub2">
                                <form action="">
                                    <input  type="search" placeholder="Search collections, artists" />
                                </form>
                            </div>
                            <div className='nav-bar-2-1'>
                                <button className='nav-btn-1'>Connect Wallet</button>
                                <img src={profile} alt="profilephoto" />
                                <button className='nav-btn-2'><ShoppingCartOutlinedIcon /></button>
                            </div>
                        </div>
                        <button className='menu'><MenuIcon/></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header