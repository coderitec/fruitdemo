"use client"
import React from 'react'

import { fruits } from '../page';


export default function page({params}) {

    const  data = fruits.find(fruit => fruit.name === params.id)

  return (
    <div>
        <h2>{data.name}</h2>
        <h2>{data.season}</h2>
        <h2>{data.botanicalName}</h2>
        <h2>{data.description}</h2>
    </div>
  )
}
