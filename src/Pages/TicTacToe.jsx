import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Board from "../AllGamesComponents/TicTacToe/Board";

const TicTacToe = () => {

    const [tiles, Settiles] = useState(Array(9).fill(null));
    const [EndGame, SetEndGame] = useState(false);
    const [PlayerTurn, SetPlayerTurn] = useState("X");
    const [winner, Setwinner] = useState(null)
    const [DoStrike, SetDoStrike] = useState(null)

    const Strikes = [
        "h-[4px] w-[500px] bg-blue-300 top-[20%] left-[32%]",
        "h-[4px] w-[500px] bg-blue-300 top-[50%] left-[32%]",
        "h-[4px] w-[500px] bg-blue-300 top-[80%] left-[32%]",
        "h-[4px] w-[250px] bg-blue-300 bottom-[47%] rotate-[90deg] left-[29.2%]",
        "h-[4px] w-[250px] bg-blue-300 bottom-[47%] rotate-[90deg] left-[41%]",
        "h-[4px] w-[250px] bg-blue-300 bottom-[47%] rotate-[90deg] left-[53%]",
        "h-[4px] w-[500px] bg-blue-300 bottom-[50%] rotate-[27deg] left-[32%]",
        "h-[4px] w-[500px] bg-blue-300 bottom-[50%] rotate-[154deg] left-[32.5%]",
    ]

    const winnerCombinations = [
        {combo: [0, 1, 2], Strike: Strikes[0]},
        {combo: [3, 4, 5], Strike: Strikes[1]},
        {combo: [6, 7, 8], Strike: Strikes[2]},
        {combo: [0, 3, 6], Strike: Strikes[3]},
        {combo: [1, 4, 7], Strike: Strikes[4]},
        {combo: [2, 5, 8], Strike: Strikes[5]},
        {combo: [0, 4, 8], Strike: Strikes[6]},
        {combo: [2, 4, 6], Strike: Strikes[7]},
    ]

    const handleClickValue = (index) => {

        if(tiles[index] !== null)
            return;

        let x = [...tiles]
        x[index] = PlayerTurn;
        Settiles(x);

        if(PlayerTurn === "X")
            SetPlayerTurn("O");
        else
            SetPlayerTurn("X");
    }

    const winnerFind = (winnerCombinations, tiles) => {
        for(let {combo, Strike} of winnerCombinations)
        {
            let a = tiles[combo[0]]
            let b = tiles[combo[1]]
            let c = tiles[combo[2]]

            if(a && b && c && a === b && b === c)
            {
                SetEndGame(true);
                SetDoStrike(Strike);
                Setwinner(a);
            }
        }
    }

    const ResetGame = () => {
        let x = Array(9).fill(null);
        Settiles(x);
        SetEndGame(false);
        SetPlayerTurn("X");
        Setwinner(null);
        SetDoStrike(null);
    }

    useEffect(() => {
        winnerFind(winnerCombinations, tiles)
    }, [tiles])

    let bgUrl = "https://wallpapers-hub.art/wallpaper-images/426741.jpg"


  return (
    <div
        style={{
            backgroundImage: `url(${bgUrl})`, // Set the background image
            backgroundSize: 'cover', // Ensure the image covers the entire div
            backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            //backgroundPosition: 'center', // Center the image
            minHeight: '100vh', // Set the height of the div to 100% of the viewport height
            width: '100vw' // Make the div span the full width
        }}
    
        className="overflow-hidden"
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

        <div
            className="font-bold text-[35px] bg-violet-950 w-fit 
            rounded-3xl px-12 py-2 text-violet-50 mx-auto translate-y-[-15px]
            border-[1.5px] border-yellow-300
            
            "
        >
            Tic Tac Toe
        </div>

        <div className="mt-[6%]">
            <Board 
                handleClickValue = {handleClickValue}
                tiles = {tiles}
                DoStrike = {DoStrike}
            />
        </div>

        {
            EndGame && 
            <div 
                className="text-bold text-[30px] text-yellow-500 mx-auto translate-y-[70px]
                  bg-rose-800 w-fit px-4 py-2 rounded-3xl"
            >
                Winner is: {winner}
            </div>
        }

        <button
            onClick={() => ResetGame()}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 translate-x-[1700%] translate-y-[80px]"
        >
            Reset
        </button>

    </div>
  )
}

export default TicTacToe
