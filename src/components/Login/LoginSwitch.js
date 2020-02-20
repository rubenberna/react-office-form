import React, {useState, useEffect } from 'react'
import { Radio } from 'semantic-ui-react'
import style from 'styled-components'

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = style.h3`

`

const LoginSwitch = ({selectLogin}) => {
  const [ strijk , setStrijk ] = useState(false)

  useEffect(() => {
    const name = strijk ? 'strijk' : 'gewoon'
    selectLogin(name)
  }, [strijk, selectLogin])

  const renderTitle = () => {
    let title = strijk ? <StyledTitle>Switch to normal login</StyledTitle> : <StyledTitle>Switch to Strijk</StyledTitle>
    return title
  }
  return(
    <StyledDiv>
      { renderTitle() }
      <Radio slider onClick={e => setStrijk(!strijk)}/>
    </StyledDiv>
  )
}

export default LoginSwitch;
