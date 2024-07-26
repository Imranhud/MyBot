import React, {useState} from 'react'
// import styles from '../style'
// import NavBar from './NavBar';
// import "./App.css"



const myFooters = [
    {
        Id : 1,
        list : "Tap"
    },
    {
        Id : 2,
        list : "Tesks"
    },
    {
        Id : 3,
        list : "Boost"
    },
    {
        Id : 4,
        list : "freds"
    }
]

const Hero = () => {
    const myDate = new Date();
    const dd = myDate.toLocaleTimeString();
    
    setInterval(myTimer, 1000);

    function myTimer() {
    }

    let balance = '23242573,389';
    let bln = parseFloat(balance)

    const [num, setNum] = useState(3460000);
    const [numR, setNumR] = useState(70);
    const [isRo, setIsRo] = useState(false)
    const [isC, setC] = useState(0)
    const [isV, setIsV] = useState(false)



function handleNumChange(){
    setNum( numR >=1 ? num + 10 : num);
    // setNum(event.target.style.backgronudColor = "#343")
        setNumR(numR >=1 ? numR - 1 : numR)
        setIsRo(!isRo)
        setC(numR >=1 ? i => i + 10 : i )
        setIsV(!isV)
  


}
function handleClaimChange(){
    setNum( num + isC )
    setC(!isC)

    

}
return(

    <div>
        <div>
            <div className="h-[20vh] flex justify-center">
                <div className='from-slate-600 to-violet-700 bg-gradient-to-l opacity-90 px-4 py-7 leading-8 my-6 mx-7 flex items-center justify-center flex-col border-dimBlue rounded-[20px] md:max-w-[345px] w-full'>
                    <p className='text-dimWhite font-semibold'>Your IMXP Tokens</p>
                    <h1 className='text-orange-50 font-poppins text-[29px]'> {num} <span className='text-black'>IMXP</span></h1>
                </div>

            </div>
            
            <p className='text-center h-[10vh] flex justify-center items-center pb-3 text-dimWhite'>
                Tap, tap,tap! Can't stop, won't stop! <br /> Timer shows refill, but the fun won't flop!.
            </p>
            <div className='flex mt-2 h-[12vh] items-start justify-evenly font-poppins'>
                <button className='text-white  cursor-default text-[20px] border-dimBlue rounded-xl from-slate-600 to-violet-700 bg-gradient-to-l py-3 px-5'>
                   {numR} taps <span className='text-dimWhite'>left</span></button>
                <button className='border-dimBlue cursor-default text-[20px] text-white drop-shadow-lg rounded-xl from-slate-600 to-violet-700 bg-gradient-to-l py-3 px-5'>
                   {dd} <span className='text-dimWhite'></span></button>
            </div>
            <div className='flex h-[25vh] items-start cursor-pointer justify-center my-8'>
                <div onClick={handleNumChange} className={`flex transform ${ isRo ? "border-2 shadow-lg shadow-red-400 border-dimBlue translate-x-4 transition duration-30 bg-slate-400" : "translate-x-2 transition border-x-2 shadow-xl duration-20" } items-center justify-center 
                ${isV ? 'custom-before' : !'custom-before' } to-violet-600 from-violet-300 bg-gradient-to-tr rounded-full w-[180px] h-[180px]`}>
                    <span className='focus:bg-inherit active:bg-inherit focus:outline-none aria-disabled:bg-inherit text-white'>Tap me</span>
                    </div>
            </div>
            <div className='flex h-[16vh] items-start justify-center'>
                <button onClick={handleClaimChange} className='w-[199px] my-4 text-dimWhite from-slate-600 to-violet-700 bg-gradient-to-l rounded-xl bg-slate-600 p-3 '>
                   {isC} Claim
                </button>
            </div>
            <div>
                {myFooters.map((fo) => {
                    <span key={fo.Id} className='flex mt-3 items-start justify-evenly font-poppins'>
                        {fo.list}
                        </span>
                })}
            </div>
            <div className='flex bg-slate-400 opacity-75 mx-auto fixed bottom-0 max-w-[490px] mt-3 space-y-0 w-full items-start justify-evenly font-poppins'>
                <div className='p-2 font-bold hover:bg-blue-700 hover:text-dimWhite hover:-translate-y-3 transition duration-500 w-[85px] text-center'>Tap</div>
                <div className='p-2 font-bold hover:bg-violet-700 hover:text-dimWhite hover:-translate-y-3 transition duration-500 w-[85px] text-center'>Tasks</div>
                <div className='p-2 font-bold hover:bg-violet-700 hover:text-dimWhite hover:-translate-y-3 transition duration-500 w-[85px] text-center'>Boost</div>
                <div className='p-2 font-bold hover:bg-violet-700 hover:text-dimWhite hover:-translate-y-3 transition duration-500 w-[85px] text-center'>Frens</div>
            </div>
        </div>
    </div>
  )

}
export default Hero