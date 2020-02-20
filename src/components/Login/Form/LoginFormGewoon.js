import React, {useState} from 'react'
import style from 'styled-components'
import { Form } from 'semantic-ui-react'

import { offices } from '../../db/dboffices'
import NegativeMessage from '../../Layout/Message/NegativeMessage'

const officeList = offices.map(o  => ({ value: o.name, key: o.key, text: o.name })).sort()

const StyledForm = style(Form)`
  display: flex;
  justify-content: space-between;
  width: 470px;
  border-radius: 5px;
  background: lightblue;
  padding 30px;
  position: relative;
  align-items: center;
`

const StyledSelect = style(Form.Select)`
  width: 150px;
`

const StyledInput = style(Form.Input)`
  width: 110px;
`

const StyledIdentifier = style.p`
  position: absolute;
  bottom: -7px;
  left: 9px;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1.5px;
  font-weight: 600;
`

const LoginFormGewoon = ({ onFormSubmit }) => {
  const [office, setOffice] = useState('')
  const [password, setPassword] = useState('')
  const [missingValue, setMissingValue] = useState(false)

  const firstValidation = () => {
    if (!office || !password) setMissingValue(true)
    else {
      let selected = {
        type: 'gewoon',
        office,
        password
      }
      onFormSubmit(selected)
    }
  }

  return(
    <>
      <NegativeMessage visible={missingValue} onClose={e => setMissingValue(false)}>
        <span>Hold your horses</span>
        <p>Please fill in all details first ;)</p>
      </NegativeMessage>
      <StyledForm onSubmit={firstValidation}>
        <StyledIdentifier>Gewoon Login</StyledIdentifier>
        <StyledSelect
            fluid
            label='Select kantoor'
            options={officeList}
            placeholder='Kantoor'
            onChange={e => setOffice(e.target.innerText)}
          />
        <StyledInput fluid label='Password' placeholder='xxxxxx' type='password' onChange={e => setPassword(e.target.value)}/>
        <Form.Button>Go</Form.Button>
      </StyledForm>
    </>
  )
}

export default LoginFormGewoon;
