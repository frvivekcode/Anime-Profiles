import React from 'react'

const Card = (props) => {
    // console.log(props);
    
  return (
    <div className= 'shadow-xl/30 bg-[#3b3b3b] text-[#dbdbdb] h-auto w-80 ml-10 mb-10 rounded-2xl  shrink-0 p-2 relative text-center hover:scale-[0.95] duration-500 ease-in-out'>
        <img  className='h-40 w-[100%] object-cover rounded-xl' src= {props.coverImage} alt="" />
        <img className='h-25 w-25 rounded-[50%] object-fill absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 ' src={props.profile} alt="" />
       <h1 className='mt-12 text-2xl font-bold'>{props.fullName}</h1>
       <h2 className='text-[17px] ml-5 mr-5   leading-[1.3] mb-3 mt-3  text-[#b9b8b8]'>{props.description}</h2>
       <div className='w-[100%] border-[#8d8d8d] border-2 h-20 mb-2 bg-[#747474] rounded-xl flex justify-around items-center
'>

        <div className=''> 
            <h1 className='font-bold'>{props.likesCount}</h1>
            <p className='text-[#b8b8b8]'>Likes</p>
        </div>
         <div className=''> 
            <h1 className='font-bold'>{props.postCount}</h1>
            <p className='text-[#b8b8b8]'>Post</p>
        </div>
         <div className=''> 
            <h1 className='font-bold'>{props.viewsCount}</h1>
            <p className='text-[#b8b8b8]'>Views</p>
        </div>
       </div>
       <div className='w-[100%] h-auto  rounded-xl flex justify-center gap-4 items-center
'>

        <div className=''> 
            <h1 className='text-xl'><i class="ri-instagram-line"></i></h1>
        </div>
         <div className=''> 
            <h1 className='text-xl'><i class="ri-twitter-x-fill"></i></h1>
        </div>
         <div className=''> 
            <h1 className='text-xl'><i class="ri-threads-fill"></i></h1>
        </div>
       </div>
    </div>
  )
}

export default Card

 