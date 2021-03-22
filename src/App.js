import { useState, useEffect } from 'react'

import Header from './components/Header'
import Card from './components/Card'
import Paginate from './components/Paginate'
import api from './service/api'

import GlobalStyle, {Content} from './globalStyle'

function App() {

  const [userData, setUserData] = useState([])
  const [user, setUser] = useState('')
  const [pages, setPages] = useState(0)
  const [page, setPage] = useState(1)

useEffect(()=>{
  async function load () {
    const data = await api.get(`users?q=${user}&per_page=50&page=${page}`)
    setUserData(data.data.items)
    setPages(data.data.total_count)
  }
  load()
}, [user, page])

  const onSubmit = async (user) => {
    setUser(user)
  }



  return (
      <>
        <GlobalStyle />
        <Header onSubmit={onSubmit}/>
        <Paginate pages={Math.floor(Math.round(pages/50)) } page={page} onChange={(event,val)=> setPage(val)}/>
        <Content>
          {
            userData.map(d => <Card user={d} />)
          }
        </Content>
      </>
  );
}

export default App;
