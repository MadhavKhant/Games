import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllGames from './AllGames/AllGames'
import TicTacToe from './AllGames/TicTacToe/TicTacToe'
import StonePaperScissor from './AllGames/StonePaperScissor/StonePaperScissor'

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