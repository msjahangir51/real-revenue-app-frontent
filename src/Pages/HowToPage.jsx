import React from 'react'
import signup from "../../public/signup.svg"
import referral from "../../public/referral.svg"
import withdraw from "../../public/withdraw.svg"
function HowToPage() {

    const howtoEarnData = [
        {
            id:1,
            image: signup,
            title:"Sign up for free",
            drescription:"Register with the same email you are using for your PayPal account and you will be ready to start."
        },
        {
            id:1,
            image: referral,
            title:"Refer to Earn",
            drescription:"Register with the same email you are using for your PayPal account and you will be ready to start."
        },
        {
            id:3,
            image: withdraw,
            title:"Withdraw money",
            drescription:"As soon as you reach the payment threshold, you can withdraw money to your Bkash account."
        }
    ]
  return (
    <div className='min-h-screen h-auto w-full m-auto bg-slate-800 border-t-2 border-t-slate-700'>
        <div className='container'>
        <h1 className="text-center sm:text-[2.4rem] md:text-[2.7rem] sm:w-[60%] md:w-[50%] vsm:text-[1.6rem] text-[1.3rem] font-bold w-[80%] m-auto text-slate-200">How to earn money with real revenue ?</h1>
        {/* cards  */}
        <div className="flex vsm:flex-row flex-wrap vsm:justify-evenly flex-col items-center">
            {
                howtoEarnData.map(item=>{
                    const {drescription,id,image,title} = item;
                    return(
                        <div key={id} className='w-[80%] max-w-[19rem] mx-3 shadow-ring my-5 p-4 transition-all'>
                            {/* image  */}
                            <div className=' w-full h-[15rem] border-b-2 border-s-white'>
                                <img className='w-full h-full ' src={image} />
                            </div>

                            <div className='text-center text-white'>
                                <h1 className='text-[1.3rem] font-bold'>{title}</h1>
                                <p>{drescription}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default HowToPage