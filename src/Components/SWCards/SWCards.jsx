import bkg from '/fondoespacio.png'
import './SWCards.css'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { Mycard } from '../Mycard/Mycard';
import { Buscador } from '../Buscador/Buscador';

const SWCards = () => {
  
  let [personajes, setPersonajes]=useState([])
  let [peoplepage, setPeoplepage]=useState(1)

  useEffect(()=>{
    let obtenerPersonajes=async()=>{
      const response= await axios.get(`https://swapi.dev/api/people/?page=${peoplepage}`)
      console.log(response.data.results)
      setPersonajes(response.data.results)
    }
    obtenerPersonajes()
  },[peoplepage])
  
  function nextPage(){
    setPeoplepage(peoplepage+1)
  }

  function lastPage(){
    setPeoplepage(peoplepage-1)
  }

  return (
    <div className='todo'
      style={{
            backgroundImage:`url(${bkg})`,
            // backgroundRepeat:"no-repeat",
            backgroundPosition:"center center",
            // backgroundSize:"cover",
      }}
    >

        <div className='tituloybuscador' style={{
            height:'80vh',
            padding:'50px',

            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
          <div className='titulo' style={{
            padding:'20px'
          }} >
            <h1 className='star-wars-font' style={{
              textAlign:'center',
              
              fontWeight:'650',
              fontSize:'70px',
              color:'rgb(255, 232, 31)',
              textShadow:'2px 2px 15px rgba(250, 253, 86, 0.5)'
            }}>Find your favorite Star Wars character!</h1>
          </div>

            <div>
              <Buscador/>
            </div>


        </div>
            <div className='cards d-flex flex-column align-items-center'>
                <div className='buttons d-flex justify-content-between' style={{
                  width:'89vw'
                }}>
                  <button className='mybutton' onClick={lastPage}>Previous page</button>                  
                  <button className='mybutton' onClick={nextPage}>Next page</button>
                </div>
                <div className='d-flex flex-wrap' style={{
                  width:'90vw'
                }}>{personajes.map(personaje=>
                  <Mycard name={personaje.name}/>
                )}
                </div>
            </div>
    </div>
  )
}

export { SWCards }