import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {


const navigate = useNavigate()
  const handleNavigate =()=>{
    // navigate to home page
    navigate('/home')
  }
  return (
    <>
    <div className='container mt-5'>
<div className="header row align-items-center">
  <div className="col-lg-5">
<h3>Welcome To <span className='text-warning'>Media Player</span></h3>
<p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam, delectus repudiandae amet quaerat dolores dolor rerum mollitia, animi labore, excepturi quasi quos quam placeat laudantium illum deleniti recusandae doloremque.</p>
<button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
  </div>
  <div className="col-lg-1"></div>
  <div className="col-lg-6">
<img style={{width:'100%',filter:'brightness(50%)'}} src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif"  alt="Landing Page"/>
  </div>
</div>
<div className="features">
  <h3 className="text-center mt-5">Features</h3>
  <div className="row mt-5">
    <div className="col-lg-4">
    <Card>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1352003/screenshots/6711668/settings_icon.gif" style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text style={{height:'100px'}}>
         User can upload, view and remove thge videos 
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div className="col-lg-4">
    <Card>
      <Card.Img variant="top" src="https://media.tenor.com/WOQ4NaiPiRwAAAAM/beats-art.gif"  style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text style={{height:'100px'}}>
         User can categorise the videos according to their preferences using drag and drop features.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
    <div className="col-lg-4">
    <Card>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" style={{height:'300px'}}/>
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text style={{height:'100px'}} >
          User are able to see the history of watched videos
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
<div className=" row video border p-5 mt-5 rounded">
<div className="col-lg-5">
  <h3 className='text-warning'>Simple, Fast and Powerful</h3>
  <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum nostrum quidem soluta inventore  </p>
  <p style={{textAlign:'justify'}}><span className='fs-4'>Categorize Videos: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum nostrum quidem soluta inventore  </p>
  <p style={{textAlign:'justify'}}><span className='fs-4'>Watch History: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illum nostrum quidem soluta inventore  </p>


</div>
<div className="col-lg-1"></div>
<div className="col-lg-6">
<iframe width="500" height="390" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
</div>
<hr/>
    </>
    
  )
}

export default LandingPage