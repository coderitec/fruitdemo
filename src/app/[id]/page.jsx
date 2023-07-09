import { fruits } from "../page"

export default function page({params}) {
    const data = fruits.find(fruit => fruit.name === params.id)
  return (
    <div className="px-4 md:w-3/5 w-5/6 m-auto">
        <h1 className="text-center uppercase border-b-orange-600 border-b-4 py-4 text-3xl">{data.name}</h1>
        <h2 className="py-3 text-xl"><span className="font-bold">Name:</span> {data.botanicalName}</h2>
        <h2 className="py-3 text-xl"><span className="font-bold">Season:</span> {data.season}</h2>
        <p className="py-3 text-lg"><span className="font-bold">Description:</span> {data.description}</p>

    </div>
  )
}
