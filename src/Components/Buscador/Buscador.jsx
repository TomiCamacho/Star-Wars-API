import './Buscador.css'
import lupa from '/lupa.png'

const Buscador = () => {
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
            // zIndex:'999',
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
              <form action="">
                <input className='input-no-outline' type="text" placeholder=" Luke Skywalker" style={{
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