import React from 'react'
import reviews from './Reviews'
const Review =({reviews})=>{
  const {icon, content, user} = reviews
  return(
    
    <div className='lg:h-80 bg-white text-xl lg:flex-[1_1_30%]  p-6 rounded-md  shadow-lg flex flex-col '>
      {icon}<br />
      <h2>{content}</h2>
      {user}
    </div>
  )

}
function ReviewsSection() {
  return (
    <div>
      <div className='text-center text-xl my-12 lg:px-6'>
       <h1 className='text-[2.5rem] font-bold '> What Our Users Say</h1>
       <p >Thousands of users are making smarter financial decisions with Expendee</p>
      </div>
      <div className='flex justify-center max-w-7xl items-center gap-10  flex-wrap mx-auto '>
        {reviews.map((Rev)=>(
          <Review key={Rev.id} reviews={Rev} />
        ))}
      </div>
    </div>
  )
}

export default ReviewsSection
