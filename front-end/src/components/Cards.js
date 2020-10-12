import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './Cards.css'
import Axios from '../axios'

function Cards() {

    const [members, setMembers] = useState([])

    useEffect(() => { 
        async function fetchData() {
            const req = await Axios.get('/tinder/card')
            
            setMembers(req.data)
        }

        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {members.map(user => (
                    <TinderCard
                        className='swipe'
                        key={user.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, user.name)}
                        onCardLeftScreen={() => outOfFrame(user.name)}
                    >
                        <div className="card" style={{ backgroundImage: `url(${user.imgUrl})` }}>
                            <h3>{user.name}</h3>
                        </div>
                    

                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default Cards
