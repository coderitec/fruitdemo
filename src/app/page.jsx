import Fruits from "./components/Fruits";


const fruits = [
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
  return (
    <div>
      <Fruits list = {fruits}/>
    </div>
  )
}
