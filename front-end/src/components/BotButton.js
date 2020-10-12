import React from 'react'
import './Button.css'
import * as MatIcons from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'

function BotButton() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <MatIcons.Replay fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <MatIcons.Close fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <MatIcons.StarRate fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <MatIcons.Favorite fontSize='large' />
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <MatIcons.FlashOn fontSize='large' />
            </IconButton>
        </div>
    )
}

export default BotButton
