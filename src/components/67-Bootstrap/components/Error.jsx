import React, { useEffect } from 'react'
import Bg_Img from '../common/image/bg.svg'
import Spaceman from '../common/image/spaceman.svg'
import { useHistory } from 'react-router-dom'

function Error() {
  useEffect(() => {
    document.title = "Tech Help | Error"
  }, []);
  let style = {
    background: `url('${Bg_Img}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%'
  }
  const history = useHistory()
  return (
    <div className="error-container">
      <div style={style} className="spaceman">
        <img src={Spaceman} alt="spaceman" className='animate' />
        <p>Page not found</p>

        <div>
          <button className="px-4 py-2 rounded-pill err-btn"
            onClick={() => history.push(`/`)
            }>Homepage
          </button>
          <button className="px-4 py-2 rounded-pill err-btn"
            onClick={() => history.goBack()
            }>Go Back
          </button>
        </div>

      </div>
    </div>
  )
}

export default Error
