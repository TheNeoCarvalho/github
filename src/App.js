import {useState, useEffect} from 'react'
import api  from './service/api'

import Header from './components/Header'
import Card from './components/Card'
import GlobalStyle, { Content, Ops } from './globalStyle'

function App() {

  const [userData, setUserData] = useState({})

  useEffect(()=>{
    setUserData(null)
  },[])

  const onSearchSubmit = async (user) => {
    const response = await api.get(`/${user}?client_id=5c41c6afc48dde855925&client_secret=61ccb8453c307ae755e5efdc99213c3531c7bac2`)
    setUserData(response.data)
  }

  return (
      <>
        <GlobalStyle />
        <Header onSubmit={onSearchSubmit}/>
        <Content>
          { userData === null ? <Ops>Aguardando resultados...</Ops> : <Card user={userData} />}
        </Content>
      </>
  );
}

export default App;
