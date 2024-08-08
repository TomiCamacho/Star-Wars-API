import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bkg from '/fondoespacio.png'
import lupa from '/lupa.png'
import './SWCards.css'
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
// import { Button, Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';

const SWCards = () => {
  
  let [personajes, setPersonajes]=useState([])

  useEffect(()=>{
    let obtenerPersonajes=async()=>{
      const response= await axios.get('https://swapi.dev/api/people/')
      console.log(response.data.results)
      setPersonajes(response.data.results)
    }
    obtenerPersonajes()
  },[])
  
  return (
    <div>

        <div style={{
            height:'100vh',
            padding:'50px',
            backgroundImage:`url(${bkg})`,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center",
            backgroundSize:"cover",
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
          <div style={{
            padding:'40px'
          }} >
            <h1 className='star-wars-font' style={{
              textAlign:'center',
              
              fontWeight:'650',
              fontSize:'70px',
              color:'rgb(255, 232, 31)',
              textShadow:'2px 2px 15px rgba(250, 253, 86, 0.5)'
            }}>Find your favorite Star Wars character!</h1>
          </div>
          <div style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'135px',
            height:'40px',
            width:'450px',
            backgroundColor:'white',
            borderRadius:'16px',
            alignItems:'center',
            // zIndex:'999',
            border:'3px solid gray',
            boxShadow:'1px 1px 170px rgba(255, 255, 255, 3)',
            // backgroundColor:'red'
            // justifySelf:'center',
            // alignSelf:'center'
          }}>
              <img src={lupa} alt="" width='20px' height='20px' color='#cfcfcf' style={{
                marginLeft:'15px',
                marginRight:'15px',
              }} />
              <input className='input-no-outline' type="text" placeholder=" Luke Skywalker" style={{
                borderRadius:'16px',
                height:'34px',
                border:'none',
                width:'400px',
                
                // backgroundColor:'green'
              }}
              // onFocus={}
              />
              
          </div>

              <div>
                
              </div>

        </div>

    {/* <Card style={{ width: '18rem',
        border: '1.5px solid gray',
        padding:'19px 5px'
         }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

    </div>
  )
}

export { SWCards }