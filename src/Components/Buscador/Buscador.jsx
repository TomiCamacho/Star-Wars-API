import { func } from 'prop-types'
import './Buscador.css'
import lupa from '/lupa.png'
import { useState } from 'react'

const Buscador = ({setPersonajes, personajes}) => {

  let [valorInput, setValorInput,peoplepage, setPeoplepage]=useState('')

  function cambioValorInput({target}){
    setValorInput(target.value)
    console.log(target.value)
  }

  // function buscarPersonaje(e){
  //   e.preventDefault()
  //   console.log(valorInput)
  //   {personajes.map(personaje=>{
  //     personaje.name==valorInput &&
  //       setPersonajes(personaje => [personaje])
  //   })}
  // }

  // function buscarPersonaje(e) {
  //   e.preventDefault();
  //   console.log(valorInput);
  
  //   const personajeEncontrado = personajes.filter(personaje => personaje.name === valorInput);
  
  //   if (personajeEncontrado.length > 0) {
  //     setPersonajes(personajeEncontrado);
  //     setValorInput('')
  //   }
  //   else {
  //     console.log('Personaje no encontrado');
  //   }
  // }  

  function buscarPersonaje(e) {
    e.preventDefault();
    console.log(valorInput);
  
    // setPeoplepage('1')
    const personajeEncontrado = personajes.filter(personaje => personaje.name === valorInput);


    if (personajeEncontrado.length > 0) {
      setPersonajes(personajeEncontrado);
      setValorInput('')
    }
    else {
      setPeoplepage(peoplepage+1)
      buscarPersonaje()
    }
  }  

  return (
      <div className='buscador' style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'120px',
            height:'40px',
            width:'450px',
            backgroundColor:'white',
            borderRadius:'16px',
            alignItems:'center',
            border:'3px solid gray',
            boxShadow:'1px 1px 200px rgba(255, 255, 255, 3)',
            // backgroundColor:'red'
            // justifySelf:'center',
            // alignSelf:'center'
          }}>
              <img src={lupa} alt="" width='20px' height='20px' color='#cfcfcf' style={{
                marginLeft:'15px',
                marginRight:'15px',
              }} />
              <form onSubmit={buscarPersonaje}>
                <input className='input-no-outline'
                    type="text"
                    placeholder=" Luke Skywalker"
                    value={valorInput}
                    onChange={cambioValorInput}
                    style={{
                    borderRadius:'16px',
                    height:'34px',
                    border:'none',
                    width:'395px',
                    // backgroundColor:'green'
                }}
                />
              </form>
        </div>
  )
}

export { Buscador }