import React from 'react'
import style from 'styled-components'

const StyledGif = style.div`
  z-index: 99999;
  position: absolute;
  top: 25%;
  left: 50%;
`

const GreatSuccess = () => {
  return(
    <StyledGif>
      <iframe title='great-success' src="https://giphy.com/embed/slOhiKAVFgwr6" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    </StyledGif>
  )
}

export default GreatSuccess;
