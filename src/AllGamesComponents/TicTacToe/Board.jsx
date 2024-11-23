/* eslint-disable react/prop-types */



const Board = ({DoStrike, tiles, handleClickValue}) => {

    const Borders = [
        "border-b-4 border-r-4",
        "border-b-4 border-r-4",
        "border-b-4",
        "border-b-4 border-r-4",
        "border-b-4 border-r-4",
        "border-b-4",
        "border-r-4",
        "border-r-4",
        ""
    ]



  return (
    <div 
        className="relative"
    >
        <div className="grid grid-cols-3 mx-auto w-[500px]">
            {
                tiles.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleClickValue(index)}
                            className={`${Borders[index]} min-h-[40px] min-w-[50px] font-extrabold
                             border-pink-800 text-white text-[50px] text-center }`}
                        >
                            {ele}
                        </div>
                    )
                })
            }
        </div>

        {
            DoStrike && 
            <div
                className={`${DoStrike} absolute`}
            >
            </div>
        }

    </div>
  )
}

export default Board

