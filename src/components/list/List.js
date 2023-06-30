import Goal from './Goal'

const listMock = [{
    "id" : "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": 1,
    "icono": "🏃",
    "meta":365,
    "plazo":"2030-01-01",
    "compeltado":5
},
{
    "id" : "2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta":6,
    "plazo":"2030-01-01",
    "compeltado":0
},
{
    "id" : "3",
    "detalles": "Relajacion Jackobson",
    "periodo": "mes",
    "eventos": 12,
    "icono": "🧘‍♀️",
    "meta":12,
    "plazo":"2030-01-01",
    "compeltado":0
}]

function List() {
    return ( 
        listMock.map(goal =>  <Goal {...goal}></Goal> )
       
     );
}

export default List;