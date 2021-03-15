import {useState} from 'react'
import {H1, Box, Input, Search, Btn, Image} from './style'

function Header(props) {

  const [user, setUser] = useState('')

  const onFormSubmit = event => {
    event.preventDefault()
    setUser(user)
    props.onSubmit(user)
  }

    return (
      <Search onSubmit={onFormSubmit}>
      <H1>
        <Image src="https://webstockreview.net/images/github-icon-png-8.png"/>
        <strong>Github Finder</strong>
      </H1> 
      <Box>
        <Input 
          value={user} 
          onChange={ e =>setUser(e.target.value)} 
          placeholder="Usuário"
        />
        <Btn>Buscar</Btn>
      </Box>
      </Search>
    );
  }
  
  export default Header;
  