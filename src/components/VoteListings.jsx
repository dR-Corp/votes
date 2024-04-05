import Candidat from "./Candidat"

const candidats = [
  {
    id: 1,
    name: "Homer Simpson",
    photo: "/candidat.jpg",
    couleur: "bg-indigo-100"
  },
  {
    id: 2,
    name: "Homer Simpson",
    photo: "/candidat.jpg",
    couleur: "bg-gray-100"
  },
  {
    id: 3,
    name: "Homer Simpson",
    photo: "/candidat.jpg",
    couleur: "bg-indigo-100"
  },
  {
    id: 4,
    name: "Homer Simpson",
    photo: "/candidat.jpg",
    couleur: "bg-gray-100"
  },
  {
    id: 5,
    name: "Homer Simpson",
    photo: "/candidat.jpg",
    couleur: "bg-indigo-100"
  },
]

const VoteListings = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg">
          {candidats.map(candidat => {
            return <Candidat key={candidat.id} candidat={candidat} />
          })}
        </div>
      </div>
    </section>
  )
}

export default VoteListings