import profile from './assets/profile.jpeg'
import './App.css'
const fName='Uesli Laska'
const title='Software Engineer'

const ProfileDes=()=>{
  return(
    <div className="container">
      <img srcSet={profile} alt=""  />
      <h1>{fName}</h1>
      <p> {title}</p>
    </div>
  )
}

const ColorContainer=()=>{
  return(
    <div className="containerColor">
      <div className='col1'>
       <h1>#518cef</h1> 
      </div>
      <div className='col2'>
        <h1>#3b10c4</h1>
      </div>
      <div className='col3'>
       <h1> #9aede6</h1>
      </div>
      <div className='col4'>
       <h1> #8ee763</h1>
      </div>
      <div className='col5'>
        <h1>#a30dd0</h1>
      </div>
    </div>
  )
}

const App=()=>{
  return(
    <div className="app">
      <ProfileDes/>
      <ColorContainer/>
    </div>
  )
}

export default App

