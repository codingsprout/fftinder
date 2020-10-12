import React from 'react'
import './Header.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className='header'>

            <IconButton>
                <PersonOutlineIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img className='header__logo' 
                src='https://static.dezeen.com/uploads/2017/08/tinder-redesign-graphics_dezeen_hero-1.jpg'
                alt=''
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>  
            </IconButton>

        </div>
    )
}

export default Header
