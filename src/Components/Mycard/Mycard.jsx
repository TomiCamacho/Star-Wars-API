import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Mycard = ({name}) => {
  return (
    <div>
    <Card className='m-2' style={{ width: '18rem',
        border: '1.5px solid gray',
        padding:'19px 5px'
         }}>
      <Card.Img variant="top" src='' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export { Mycard }