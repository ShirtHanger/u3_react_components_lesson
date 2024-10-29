// src/App.jsx

import './App.css'
import Navbar from './components/Navbar/Navbar'
import FounderListItem from './components/FounderListItem/FounderListItem'

const App = () => {

  const providenceAssets = [
    {
        name: "Viktor Novikov",
        title: "Oligarch",
        location: "France",
        coverCompany: "Sanguine",
        description: `A self-made billionaire, Viktor Novikov prospered in the post-USSR boom of capitalism, making his early fortunes in real estate. When he took a nasty financial beating during the recession, Novikov turned to more creative sources of income: corporate espionage, extortion, insurance fraud, kidnapping and arson. Anything to maintain his ostentatious way of life.`,
        id: 1
    },
    {
        name: "Silvio Caruso",
        title: "Doctor",
        location: "Italy",
        coverCompany: "Ether",
        description: `Arguably one of the world's finest stem cell researchers, Silvio Caruso is, however, a troubled genius: neurotic, angst-ridden and intensely socially awkward.`,
        id: 2
    },
    {
        name: "Thomas Cross",
        title: "Multi-Billionaire Media Mogul",
        location: "United States",
        coverCompany: "Cross Holdings",
        description: `Thomas Cross was a multi-billionaire media mogul and CEO for conglomerate Cross Holdings, in addition to being a secret operative for Providence. He was the father of acclaimed rock musician, Jordan Cross.`,
        id: 3
    },
    {
      name: "Yuki Yamazaki",
      title: "Lawyer",
      location: "Japan",
      coverCompany: "Yakuza",
      description: `Yuki Yamazaki is a cutthroat Tokyo trial lawyer and a secret operative of Providence.`,
      id: 4
    },
    {
      name: "Erich Soders",
      title: "Retired ICA Operative",
      location: "Sweden",
      coverCompany: "International Contract Agency",
      description: `Retired from the field in 1981, Erich Soders is still considered the best ICA agent of his generation.`,
      id: 5
    },
    {
      name: "Claus Hugo Strandberg",
      title: "Banker",
      location: "Morocco",
      coverCompany: "Milton-Fitzpatrick",
      description: `Claus Strandberg, a Swedish citizen, is the former CEO of Morocco's largest private bank. Accused of billion-dollar investment fraud against the Moroccan people, he is currently under siege inside the Swedish Consulate in Marrakesh.`,
      id: 6
    }
  ];



  return (
    <> 
      <Navbar />
      <main>
        <h1>Providence Assets</h1>
        <h2>[Exposed to the public by the Freedom Fighters]</h2>
        <p>List of Oligarchs, CEOs, and politicians associeted with Providence</p>
      </main>
      <h2>[DECLASSIFIED]</h2>
      <ul> {/* Use array.map to populate ALL data from array of objects easily */}
      {providenceAssets.map((providenceAsset) => (
          <FounderListItem
            key={providenceAsset.id}
            providenceAsset={ providenceAsset }
            /* name={providenceAsset.name}
            title={providenceAsset.title}
            location={providenceAsset.location}
            coverCompany={providenceAsset.coverCompany} */
          />
        ))}
      </ul>
    </>
  )
}

export default App
