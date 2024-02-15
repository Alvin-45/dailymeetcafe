import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Person1 from '../assets/p1.jpg'
import Person2 from '../assets/p2.jpg'
import Person3 from '../assets/p3.jpg'
import star from '../assets/star.png'

function Testimonials() {
  return (
    <>
        <div id='testimonials' className='fullbodycontent' style={{marginTop:'150px'}}>
            <div className='bodycontent text-center'>
            <h4 className="text-warning ">Testimonials</h4>
            <h2 className='fw-bolder'>What They Are Saying</h2>
            <p className='para mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda perferendis labore odio eaque ducimus? Iste illo, asperiores ipsa officiis ex maiores vitae quidem omnis. Nam assumenda labore vitae hic repudiandae.</p>
            </div>
            <div className="card2 d-flex justify-content-around align-items-center" style={{marginTop:'150px'}}>
            <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Img variant="top" src={Person1} style={{borderRadius:'50%',width:'100px',marginRight:'auto', marginLeft:'auto',marginTop:'-50px',height:'100px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Tony S</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            The food at Daily Meet Cafe is truly exceptional! Each dish is a symphony of flavors, perfectly balanced and beautifully presented. The freshness of the ingredients shines through in every bite, making each meal a memorable experience. Whether you're a fan of classic comfort food or adventurous culinary creations, Daily Meet Cafe never fails to impress. It's clear that a lot of love and care goes into their cooking, and it's always a delight to dine there. Highly recommended! 🌟
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Img variant="top" src={Person2} style={{borderRadius:'50%',width:'100px',marginRight:'auto', marginLeft:'auto',marginTop:'-50px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Dwayne Douglas Johnson</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            Daily Meet Cafe is a culinary gem! The variety and quality of their dishes are simply unparalleled. Each meal is a testament to their commitment to excellence, with every ingredient thoughtfully chosen and expertly prepared. The flavors are rich, authentic, and utterly delicious. Dining at Daily Meet Cafe is not just a meal, it's an experience. A visit to this cafe is a must for any food lover. Bon appétit! 🍽️
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem',borderRadius:'20px',height:'590px' }}>
          <Card.Img variant="top" src={Person3} style={{borderRadius:'50%',width:'100px',height:'100px',marginRight:'auto', marginLeft:'auto',marginTop:'-50px'}} />
          <Card.Body style={{textAlign:'center'}}>
            <Card.Title>Steve Rogers</Card.Title>
            <img src={star} alt="" style={{width:'180px'}}/>
            <Card.Text style={{textAlign:'justify'}}>
            Daily Meet Cafe is a gastronomic delight! The dishes they serve are not just meals, they're culinary journeys. Each bite takes you through a delicious exploration of flavors and textures that are both familiar and excitingly new. The attention to detail in their presentation is matched only by the quality of their ingredients. It's clear that the chefs at Daily Meet Cafe are passionate about delivering a dining experience that's both satisfying and memorable. Can't wait for my next visit! 🍲👌
            </Card.Text>
          </Card.Body>
        </Card>
        
            </div>
        </div>
    </>
  )
}

export default Testimonials