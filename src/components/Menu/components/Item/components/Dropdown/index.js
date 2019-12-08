import React from "react"
import { Box, Hlekkur, Texti } from "./Styled"
import { useSelector } from "react-redux"

const linkar = [
  { name: "Reykjavík", url: "https://reykjavik.is/" },
  { name: "Miðborgin", url: "https://midborgin.is/" },
  { name: "Tjarnarbíó", url: "https://tjarnarbio.is/" },
  {
    name: "Allir viðburðir í Reykjavík",
    url: "https://reykjavik.is/vidburdir",
  },
]

const Dropdown = ({ nafn }) => {
  const platform = useSelector(state => state.reducer.platform)
  return (
    <Box nafn={nafn}>
      {nafn === `Hlekkir` ? (
        linkar.map((item, index) => (
          <Hlekkur href={item.url} target="_blank" key={index}>
            {item.name}
          </Hlekkur>
        ))
      ) : (
        <div>
          <Texti>
            Jól í hjarta er jóladagatal fyrir alla fjölskylduna og fjallar um
            hugmyndaríka og skemmtilega þrjá krakka, Stellu, Stebba og Valdísi
            sem taka upp jóladagatal á snjalltækin sín. Þau ferðast um
            miðborgina í leit að hinum sanna jólaanda.
          </Texti>
          <Texti>
            Miðborgin okkar er jólaleg, lifandi og skemmtileg í desember sem að
            engin fjölskylda ætti að láta framhjá sér fara á aðventunni. Markmið
            jóladagatals og aðventustundar í Tjarnarbíó er að stuðla að
            ánægjulegri og jákvæðri samveru fjölskyldunnar í desember.
            Jóladagatalið örvar einnig skapandi hugsun krakka við lausn mála og
            leggur áherslu á samkennd, umburðarlyndi, kærleika, gleði og
            þakklæti.
          </Texti>
          <Texti>
            Jóladagatalið gefur líka upplýsingar um hvað sé hægt að gera
            jólalegt í Reykjavík í desember og karkkarnir geta einnig sent inn
            jólalegar sögur, myndir og myndbönd sem munu kannski rata inn í
            þættina. Virkjum fjölskylduna í desember og gleðjumst saman með jól
            í hjarta!
          </Texti>
          <Texti>Tekið er á móti fyrirspurnum á jolihjartarvk@gmail.com.</Texti>
        </div>
      )}
    </Box>
  )
}

export default Dropdown
