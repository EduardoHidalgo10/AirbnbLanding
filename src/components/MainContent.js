import React from 'react'
import Grid from '../img/photo-grid.png'
import '../index.css'
import { Card } from './Card'
//import Katie from '../img/katie-zaferes.png'
import data from '../data'


export const MainContent = () => {


    return (
        <div className='grid container'>


            <img src={Grid} alt='grid' />


            <div className='description mt-4'>

                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kinda-hosts-all<br /> without leaving home.</p>

            </div>

            <section className='cards-list mt-4 mb-5 '>
                {data.map(dat => (
                    <Card
                        key={dat.id}
                        item={dat}
                    />

                ))}




            </section>

        </div>
    )
}
