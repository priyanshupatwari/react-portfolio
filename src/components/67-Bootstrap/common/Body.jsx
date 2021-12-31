import React from 'react'
import { useHistory } from 'react-router-dom'
function Body(props) {
 let style = {
  background: `url('${props.imgsrc}')`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
 }
 const history = useHistory()
 return (
  <>
   <section className="container-fluid homeContainer">
    <div className="centerDiv">
     <div className="info">
      <div className="center">
       <h1>{props.title} <span className='highlight'> TechHelp</span></h1>
       <p className="subtitle">We are a team of talented developers making websites</p>

       <button className="btn-call px-4"
        onClick={() => history.push(`${props.visit}`)
        }>{props.btn}
       </button>

       {props.btn_2 &&
        (<button className="btn-call btn-call-2 px-4 ml-3"
         onClick={() => history.push(`${props.visit_2}`)
         }>{props.btn_2}
        </button>)
       }
       
      </div>
     </div>

     <div style={style} className='image'></div>
    </div>
   </section>
  </>
 )
}
export default Body
