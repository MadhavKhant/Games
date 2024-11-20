import { Link } from "react-router-dom"
import Stone from '../../assets/StonePaperScissor/Stone.png'
import PaperImage from '../../assets/StonePaperScissor/paper.png'
import ScissorImage from '../../assets/StonePaperScissor/scissor.png'
import { useState } from "react"
import Countdown from "./CountDown"
import ComputerImage from "./ComputerImage"

const StonePaperScissor = () => {

    let bgUrl = "https://wallpapers.com/images/hd/watch-dogs-2-8k-gaming-pnq28mzj1d0t2rid.jpg"

    // const [val, Setval] = useState(null);
    const [winner, Setwinner] = useState(0);
    const [winnerText, SetwinnerText] = useState(null);
    const [Timer, SetTimer] = useState(false);
    const [EndGame, SetEndGame] = useState(false);
    const [ComputerValue, SetComputerValue] = useState(null);

    const winningCombinations = [
      {combo: [2, 1, 1]},
      {combo: [3, 2, 1]},
      {combo: [1, 3, 1]},
    ]

    const X = (winningCombinations, x, value) => {
      SetTimer(false);

      if(x === value)
      {
        SetwinnerText('tie');
        SetEndGame(true);
        Setwinner(0);
        return;
      }  
      else
      {
        for(let {combo} of winningCombinations)
        {
          if(value === combo[0] && x === combo[1])
          {
            Setwinner(1);
            SetwinnerText("You");
            SetEndGame(true);
            break;
          }  
          else if(x === combo[0] && value === combo[1])
          {
            Setwinner(-1);
            SetwinnerText("Compute");
            SetEndGame(true);
            break;
          }
        }

      }

    }

    const Clickhandler = (value) => {
      //Setval(value);
      let x = Math.floor(Math.random() * 3) + 1;
      console.log("val: " + value);
      console.log("x:: "+ x);

      SetComputerValue(x);
      Setwinner(0);
      SetwinnerText(null);
      SetEndGame(false);

      SetTimer(true);
      setTimeout(() => {
        X(winningCombinations, x, value);
      }, 3000)

    }

  return (
    <div
        style={{
            backgroundImage: `url(${bgUrl})`, // Set the background image
            backgroundSize: '100% auto', // Ensure the image covers the entire div
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            //backgroundPosition: 'center', // Center the image
            minHeight: '100vh', // Set the height of the div to 100% of the viewport height
            width: '100%' // Make the div span the full width
        }}
    
        className="overflow-hidden overflow-y-hidden"
    >

      <Link to={"/"}
            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 
            to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300
            dark:focus:ring-lime-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
            inline-block translate-x-1 translate-y-2
            "
        >
            AllGames
      </Link>

      {
        Timer && 
          <Countdown/>
      }

      <div className="flex justify-between items-center w-fit gap-[300px]">

        <div className="flex flex-col w-fit  gap-5 ml-[400px] ">
          <img src={Stone} alt="StoneImage"  
            className="w-[100px] h-[100px] rounded-full hover:cursor-pointer hover:scale-[90%]
              transition-all duration-300
            "
            onClick={() => Clickhandler(1)}
            />

          <img src={PaperImage} 
            className="w-[100px] h-[100px] rounded-full hover:cursor-pointer hover:scale-[90%]
              transition-all duration-300"
              onClick={() => Clickhandler(2)}
              />

          <div className="hover:scale-90 transition-all duration-300" onClick={() => Clickhandler(3)}>
            <img src={ScissorImage} 
              className="w-[100px] h-[100px] rounded-full hover:cursor-pointer 
                scale-x-[-1] transform"
                />
          </div>
        </div>

        {
          EndGame && <ComputerImage index={ComputerValue} />
        }
      </div>


      {
        EndGame && 
        <div className="px-12 py-2 rounded-md border-[1.2px] mx-auto font-bold text-[25px]
        border-yellow-600 text-white bg-gray-800 w-fit">
          Winner: {winnerText}
        </div>
      }
        

    </div>
  )
}

export default StonePaperScissor
