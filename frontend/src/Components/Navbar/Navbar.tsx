import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { Avatar, Badge } from '@material-ui/core'
import './Navbar.css'
import { IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import store from "../../store"
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
const Navbar = () => {
    var pathname = "/profiletest"

    var { userid }: any = store.getState().UserReducer
    var { adminid }: any = store.getState().AdminReduser
    var adminID = JSON.parse(adminid)
    var id = JSON.parse(userid)
    if (adminID) {
        pathname = "/adminprofile"
        id = adminID
    }
    console.log(id)
    return (
        <nav >
            <div className='logo'>
                <Link to='/homepage' style={{ textDecoration: "none" }} ><h4>Sparkles</h4>
                </Link>
            </div>
            <ul className='nav-links' >
                <li >
                    <Link to='/homepage' className='nav-link'  ><h4>Home</h4></Link>
                </li>
                <li >
                    <Link to='/services' className='nav-link'><h4>Services</h4></Link>
                </li>

                <li >
                    <Link to='/product' className='nav-link' ><h4>Products</h4></Link>
                </li>
                <li >
                    <Link to='/tips' className='nav-link'><h4>Tips</h4></Link>
                </li>

                {
                    id ?
                        <div className='header__profile'>
                            <Link to={pathname} style={{ textDecoration: "none" }}>
                                <AccountCircleSharpIcon className='header__avatar' style={{ fontSize: 50 }}></AccountCircleSharpIcon>
                                {/* <Avatar className='header__avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPasPbrVe2Txcc4aGbZkCddJkVTaj8uyb7A&usqp=CAU" /> */}
                            </Link>

                        </div>
                        :
                        <Link to='/signin' className='nav-link'>login</Link>

                }
                <Link to={{ pathname: `/cart` }}>
                    {/* <IconButton color="primary" component="span"> */}

                    <Badge badgeContent={17} color="secondary" style={{ marginTop: '10px' }}><ShoppingCartIcon color="primary" style={{ fontSize: 30 }} /></Badge>
                    {/* </ShoppingCartIcon> */}
                    {/* </IconButton> */}
                </Link>

                {/* <li>
                    <Link to='/signin' className='nav-link'>login</Link>
                </li> */}

            </ul>


        </nav>
    )
}



export default Navbar