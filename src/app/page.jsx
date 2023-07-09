"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

 export let fruits = [
  {
    id: 1,
    name: 'Apple',
    botanicalName: 'Malus domestica',
    season: 'Autumn',
    image: 'https://robohash.org/apple-image.jpg',
    description: 'Apples are crisp and juicy fruits that come in various colors and flavors. They are rich in fiber and known for their nutritional benefits.',
  },
  {
    id: 2,
    name: 'Banana',
    botanicalName: 'Musa paradisiaca',
    season: 'Year-round',
    image: 'https://robohash.org/banana-image.jpg',
    description: 'Bananas are tropical fruits with a creamy texture and sweet taste. They are a great source of potassium and provide instant energy.',
  },
  {
    id: 3,
    name: 'Orange',
    botanicalName: 'Citrus sinensis',
    season: 'Winter',
    image: 'https://robohash.org/orange-image.jpg',
    description: 'Oranges are citrus fruits known for their tangy and refreshing flavor. They are an excellent source of vitamin C and are popular for their juiciness.',
  },
  {
    id: 4,
    name: 'Strawberry',
    botanicalName: 'Fragaria ananassa',
    season: 'Spring',
    image: 'https://robohash.org/strawberry-image.jpg',
    description: 'Strawberries are sweet and juicy berries that are widely enjoyed. They are packed with antioxidants and are a delicious addition to desserts and snacks.',
  },
  {
    id: 5,
    name: 'Mango',
    botanicalName: 'Mangifera indica',
    season: 'Summer',
    image: 'https://robohash.org/mango-image.jpg',
    description: 'Mangoes are tropical fruits known for their rich and sweet flavor. They are a great source of vitamins, minerals, and dietary fiber.',
  },
  {
    id: 6,
    name: 'Grapes',
    botanicalName: 'Vitis vinifera',
    season: 'Autumn',
    image: 'https://robohash.org/grapes-image.jpg',
    description: 'Grapes are small, juicy fruits that come in a variety of colors. They are packed with antioxidants and are commonly used for making wine and juices.',
  },
  {
    id: 7,
    name: 'Watermelon',
    botanicalName: 'Citrullus lanatus',
    season: 'Summer',
    image: 'https://robohash.org/watermelon-image.jpg',
    description: 'Watermelons are large, refreshing fruits with a high water content. They are perfect for hydration and are enjoyed during hot summer days.',
  },
  {
    id: 8,
    name: 'Pineapple',
    botanicalName: 'Ananas comosus',
    season: 'Summer',
    image: 'https://robohash.org/pineapple-image.jpg',
    description: 'Pineapples are tropical fruits with a sweet and tangy taste. They are a good source of vitamins, minerals, and enzymes, and are often used in both sweet and savory dishes.',
  },
  {
    id: 9,
    name: 'Peach',
    botanicalName: 'Prunus persica',
    season: 'Summer',
    image: 'https://robohash.org/peach-image.jpg',
    description: 'Peaches are fuzzy, juicy fruits with a deliciously sweet flavor. They are rich in vitamins and minerals and are a delightful addition to various desserts and recipes.',
  },
  {
    id: 10,
    name: 'Pear',
    botanicalName: 'Pyrus communis',
    season: 'Autumn',
    image: 'https://robohash.org/pear-image.jpg',
    description: 'Pears are sweet and juicy fruits with a slightly grainy texture. They are rich in fiber, vitamin C, and antioxidants, making them a healthy choice for snacking or cooking.',
  },
  {
    id: 11,
    name: 'Cherry',
    botanicalName: 'Prunus avium',
    season: 'Spring',
    image: 'https://robohash.org/cherry-image.jpg',
    description: 'Cherries are small, vibrant fruits with a sweet and tart flavor. They are rich in antioxidants and have anti-inflammatory properties, making them a nutritious and delicious treat.',
  },
  {
    id: 12,
    name: 'Blueberry',
    botanicalName: 'Vaccinium corymbosum',
    season: 'Summer',
    image: 'https://robohash.org/blueberry-image.jpg',
    description: 'Blueberries are small, round berries with a sweet and tangy taste. They are packed with antioxidants and are often considered a superfood due to their numerous health benefits.',
  },
];


export default function page() {
  const [searchItem, setSearchItm] = useState('')

  const filteredItem = fruits.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()) ||  item.botanicalName.toLowerCase().includes(searchItem.toLowerCase()))

  function onChange(e){
    return setSearchItm(e.target.value)
  }

  const fruitList = filteredItem.length > 0 ? filteredItem.map(fruit => (
    <article key={fruit.id} className="border-4 border-orange-600 border-double rounded-lg py-3 flex flex-col items-center justify-center">
      <Link href={`/${fruit.name}`}>
      <Image src={fruit.image} alt={fruit.name} width={300} height={300}/>
      <h2>Name: {fruit.name}</h2>
      <h2>Botanical Name: {fruit.botanicalName}</h2>
      <h2>Season: {fruit.season}</h2>
      </Link>
    </article>
  )) : (
    <h2 className="text-center p-4 uppercase text-xl">Item search not found, <Link href='/' className="text-orange-500 underline">return to home</Link></h2>
  )

  return (
    <div>
      <h1 className="p-4 text-center uppercase font-bold text-3xl">my favourite fruits across the year</h1>
        <div className="w-3/5 m-auto py-3">
          <input type="text" name="text" id="text" 
          className="outline-none w-[100%] py-3 border-b-4 border-orange-600 "
          placeholder="Search for a fruit"
          value={searchItem}
          onChange={onChange}
          />
        </div>
      <section className="grid md:grid-cols-3 gap-2 grid-cols-1 px-2">

      {fruitList}
      </section>
      </div>
  )
}

