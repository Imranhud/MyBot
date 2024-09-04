import React, {useState, useEffect} from 'react'
// import styles from '../style'
// import NavBar from './NavBar';
// import "./App.css"
import ton from "../assets/toimg.png"



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
   
    const [num, setNum] = useState(3460000);
    const [numR, setNumR] = useState(712);
    const [isRo, setIsRo] = useState(false)
    const [isC, setC] = useState(0)
    const [isV, setIsV] = useState(false)
    const [time, setTime] = useState(new Date())
    const [ho, setHo] = useState(4)
    const [mi, setMi] = useState(59)
    const [se, setSe] = useState(50)
    

    

function handleNumChange(){
    setNum( numR >= 1 ? num + 10 : num);
    // setNum(event.target.style.backgronudColor = "#343")
        setNumR(numR >=1 ? numR - 1 : numR)
        setIsRo(!isRo)
        setC(numR >=1 ? i => i + 10 : i )
        setIsV(!isV)
}


function handleClaimChange(){
    setNum( num + isC )
    setHo( ph => mi <= 0 ? ph -1 : ph)
    setC(!isC)
    const timee = setInterval( dispTime(), 1000);
}

// console.log(dispTime());
function dispTime(){
}
    
useEffect(() => {
    const itval = setInterval(() => {
        setTime(new Date);
        setMi( pm => se <= 0 ? mi - 1 : mi)

        setSe( ps => ps >= 0 ? ps -1 : ps )

    }, 1000);

    return () => {
        clearInterval(itval)
    }
}, []);


function FormatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridium = time >= 12 ? "PM" : "AM" ;

    hours = hours % 12 || 12 ;
    
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`
}

function padZero(number){
    return number >= 10 ? number : "0" + number; 

}
// console.log(FormatTime())



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
                <button className='text-white  cursor-default text-[20px] border-dimBlue rounded-xl from-slate-600 to-violet-700 bg-gradient-to-l py-3 px-5'>
                    {`${ho}:${mi}:${se}`}
                   </button>
                <button className='border-dimBlue cursor-default text-[20px] text-white drop-shadow-lg rounded-xl from-slate-600 to-violet-700 bg-gradient-to-l py-3 px-5'>
                   {FormatTime()} <span className='text-dimWhite'></span></button>
            </div>
            <div className='flex cursor-pointer justify-center my-2'>
                
                    <img src={ton} onClick={handleNumChange} className={`flex transform ${ isRo ? "border-2 shadow-lg shadow-red-400 border-dimBlue translate-x-4 transition duration-30 bg-dimWhite" : "translate-x-2 transition border-x-2 shadow-xl duration-20" } items-center justify-center 
                ${isV ? 'custom-before' : !'custom-before' } rounded-full`} alt="" />
                
            </div>
            <div className='flex h-[16vh] items-start justify-center'>
                <button onClick={handleClaimChange} className='w-[199px] my-4 text-dimWhite from-slate-600 to-violet-700 bg-gradient-to-l rounded-xl bg-slate-600 p-3 '>
                   {isC} Claim😂✔
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