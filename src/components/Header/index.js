import {useState} from 'react'
import {H1, Box, Input, Search, Btn, Image} from './style'

function Header(props) {

  const [user, setUser] = useState('neo')

  const onFormSubit = event => {
    event.preventDefault()
    props.onSubmit(user)
  }
 
    return (
      <Search onSubmit={onFormSubit}>
      <H1>
        <Image src="https://webstockreview.net/images/github-icon-png-8.png"/>
        <strong>Github Finder</strong>
      </H1> 
      <Box>
        <Input 
          value={user} 
          onChange={e => setUser(e.target.value)} 
          placeholder="Buscar usuário..."
        />
        <Btn>Buscar</Btn>
      </Box>
      </Search>
    );
  }
  
  export default Header;
  