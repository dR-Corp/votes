import { Link } from "react-router-dom"

const Candidat = ({candidat}) => {
  return (
    <div className={`${candidat.couleur} p-6 rounded-lg shadow-md text-center`}>
      <img src={candidat.photo} alt={candidat.name} className="rounded-full" />
      <h2 className="text-2xl font-bold my-3">{candidat.name}</h2>
      
      <div className="inline-block text-white">
        <p className="rounded-full bg-black px-2 py-4">VOTES</p>
      </div>
      
    </div>
  )
}

export default Candidat