import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllGames from './Pages/AllGames'
import TicTacToe from './Pages/TicTacToe'
import StonePaperScissor from './Pages/StonePaperScissor'

function App() {

  return (
    <>
      <div>

        <Routes>
          <Route path='/' element={<AllGames/>}/>
          <Route path='/TicTacToe' element={<TicTacToe/>}/>
          <Route path='/StonePaperScissor' element={<StonePaperScissor/>}/>
        </Routes>

      </div>
    </>
  )
}

export default App
