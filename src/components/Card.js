import React from 'react'
import Star from '../img/star.png'
import '../index.css'





export const Card = (props) => {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }


    return (

        <div className='card' key={props.item.id}>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img className='card-img-top' src={props.item.coverImg} alt="Cardcap" />
            <div className='card-body'>
                <p><img className='star' src={Star} alt="star" /><strong>{props.item.stats.rating}({props.item.stats.reviewCount}) - ({props.item.location})</strong></p>
                <p>{props.item.title}</p>
                <p className='card-text'><strong>From ${props.item.price} </strong>/ person</p>
            </div>
        </div>

    )
}
