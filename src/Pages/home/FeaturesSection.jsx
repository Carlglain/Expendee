import React from 'react'
import features from './features.js'
const Feature =({feature})=>{
  const {icon:Icon, title, content} = feature
  return(
    
    <div className='lg:h-80 bg-white text-xl lg:flex-[1_1_30%]  p-6 rounded-md  shadow-lg flex flex-col '>
      <Icon /> <br />
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )

}
function FeaturesSection() {
  return (
    <div>
      <div className='text-center text-xl my-12 lg:px-6'>
       <h1 className='text-[2rem] font-bold '> Powerful Features for Complete Financial Control</h1>
       <p >Our platform combines intelligent analytics with intuitive design 
          to give you <br /> unprecedented insight into your spending habits.</p>
      </div>
      <div className='flex justify-center max-w-7xl items-center gap-10  flex-wrap mx-auto '>
        {features.map((feature)=>(
          <Feature key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  )
}

export default FeaturesSection
