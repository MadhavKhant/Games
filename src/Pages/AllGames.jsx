import { Link } from 'react-router-dom'
import iceland from '../assets/bg/Iceland.jpg'
import HomeStonePaperScissorImage from '../assets/StonePaperScissor/homesps.png'
import TTT2 from '../assets/TicTacToe/TTT.png'

const AllGames = () => {

    let bgUrl = iceland
    let StonePaperScissorImage = HomeStonePaperScissorImage

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

        className='overflow-hidden'
    >

        <Link to={"https://my-portfolio-seven-henna-10.vercel.app/"} target='_blank'
            className="bg-gradient-to-r inline-block translate-y-2 translate-x-2 text-pink-500 font-bold
            from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
            focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
             rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
            Personal Portfolio
        </Link>

        <div className='bg-sky-500 font-bold text-[25px] px-4 py-2 rounded-3xl w-fit mx-auto translate-y-4 shadow-3xl '>
            Feel Free to Play Games
        </div>

        <div className="w-fit flex gap-5  translate-y-[200px]">
            {/* Gemini Link */}
            <div className="sine-wave relative">
                <Link
                    to="/TicTacToe"
                    style={{
                    backgroundImage: `url(${TTT2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "200px",
                    height: "200px"
                    }}
                    className="font-bold px-4 py-2 bg-green-500 text-yellow-300 shadow-3xl 
                    slow-flip rounded-full border-[2px] text-center
                    border-green-500
                    "
                >
                    <span className='text-pink-700'>Tic Tac Toe</span>
                </Link>

                <div 
                    className='absolute w-[200px] h-[200px] bg-blue-700 rounded-full inset-0 -z-10 slow-flip2
                    bg-gradient-to-r from-yellow-500 from-10% via-sky-500 via-30% to-pink-500 to-90% 
                '>
                </div>
            </div>

            {/* Text to Image Link */}
            <div className="sine-wave relative rounded-full">
                <Link
                    to="/StonePaperScissor"
                    style={{
                    backgroundImage: `url(${StonePaperScissorImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    //  width: "200px",
                    //  height: "200px"
                    }}
                    className="font-bold px-4 py-2 rounded-full text-center w-[200px] h-[200px] bg-green-500 text-yellow-300 shadow-3xl slow-flip"
                >
                    <span className='text-white text-[12px]'>Stone Paper Scissor</span>
                </Link>

                <div 
                    className='absolute w-[200px] h-[200px] bg-blue-700 rounded-full inset-0 -z-10 slow-flip2
                    
                    bg-gradient-to-r from-yellow-500 from-10% via-sky-500 via-30% to-pink-500 to-90% 
                '>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default AllGames
