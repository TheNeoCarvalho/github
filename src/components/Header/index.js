import {H1, Box, Input, Search, Btn, Image} from './style'

function Header() {
    return (
      <Box>
        <H1>
        <Image src="https://webstockreview.net/images/github-icon-png-8.png"/>
          Github Finder
          </H1> 
        <Search>
          <Input placeholder="Usuário/repositório"/>
          <Btn>Buscar</Btn>
        </Search>
      </Box>  
    );
  }
  
  export default Header;
  