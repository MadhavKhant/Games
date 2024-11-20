import { Link } from 'react-router-dom'
import TicTacToeImage from '../assets/TicTacToe/TTT2-Photoroom.png'
import sps from '../assets/StonePaperScissor/sps.png'
const AllGames = () => {

    let bgUrl = "https://i.pinimg.com/originals/6a/89/88/6a898885d5f42cd4006ed9ef2e4f34af.jpg"
    let StonePaperScissorImage = "https://thumb.ac-illust.com/ed/ede5fb2b9f32e7de2d468af75484e336_t.jpeg"
    
    
    
    
    
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

        <div className='flex gap-5 w-full mx-auto justify-center items-center mt-[50px]'>

            <Link to={"/TicTacToe"}
                style={{
                backgroundImage: `url(${TicTacToeImage})`, // Set the background image
                backgroundSize: 'cover', // Ensure the image covers the entire div
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                //backgroundPosition: 'center', // Center the image
                //minHeight: '100vh', // Set the height of the div to 100% of the viewport height
                height: "300px",
                width: "450px"
            }}

                className='rounded-3xl inline-block shadow-2xl hover:cursor-pointer hover:scale-[95%]
                    transition-all duration-300 bg-green-950
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                '
            >
            </Link>


            <Link to={"/StonePaperScissor"}
                style={{
                backgroundImage: `url(${sps})`, // Set the background image
                backgroundSize: 'cover', // Ensure the image covers the entire div
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                //backgroundPosition: 'center', // Center the image
                //minHeight: '100vh', // Set the height of the div to 100% of the viewport height
                height: "200px",
                width: "300px"
            }}

                className='rounded-3xl 
                    inline-block shadow-2xl hover:cursor-pointer hover:scale-[95%]
                    transition-all duration-300 bg-black
                '
            >
            </Link>
           
        </div>



    </div>
  )
}

export default AllGames
