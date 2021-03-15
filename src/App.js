import {useState} from 'react'

import Header from './components/Header'
import Card from './components/Card'

import api from './service/api'

import GlobalStyle, { Content } from './styles/globalStyle'

function App() {

  const [userData, setUserData] = useState(null)

  const onSearchSubmit = async user => {
    const response = await api.get(`/${user}`)
    setUserData(response.data)
  }

  return (
      <>
        <GlobalStyle />
        <Header onSubmit={onSearchSubmit}/>
        <Content>
          {
            userData === null ? <h1>Ops... sem nenhum resultado ainda :) </h1> : <Card user={userData}/>
          }
        </Content>
      </>
  );
}

export default App;
