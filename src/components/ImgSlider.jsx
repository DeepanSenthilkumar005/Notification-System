import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../assets/messageIcon';
import i1 from '../assets/img1.jpeg';
import i2 from '../assets/img2.avif';
import i3 from '../assets/img3.avif';
import { Card, CardBody } from 'react-bootstrap';
import v from '../assets/temp.mp4'


function ImgSlider() {
  const imgStyle = {
    width: '100%',
    height: '600px',
    objectFit: 'cover',
  };
  

  return (
    <>
    <div className="visble">
    <Carousel className='p-2 border-primary'>
      <Carousel.Item interval={2000}>
        <img src={i1} text="First slide" className='img-fluid w-6' style={imgStyle}/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          {/* <a href="/blog">blog</a> 
          
        </Carousel.Caption> */}
        
        
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src={i2} text="Second slide"  className='img-fluid w-6' style={imgStyle}/>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
        <img src={i3} text="Third slide" className='img-fluid w-6 '  style={imgStyle}/>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="visble2 m-3 ">

      <div className='row g-2   '>
        
        <div className=" col-sm-12 col-md-6 text-con border rounded ">
            <p className='text-light h2 d-flex justify-content-center'>
              Headings
            </p>
            <p className='text-light '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et explicabo eius eligendi esse eum tempore deserunt eveniet, minus magni perspiciatis placeat possimus natus voluptatibus, beatae recusandae, aperiam velit voluptatum unde!
              Recusandae, laborum, consequatur, eveniet perferendis doloribus quasi nihil aspernatur temporibus provident voluptatibus vero nisi labore veniam voluptatum est voluptatem sint tempora ab ut ad sapiente a consequuntur? Voluptatibus, iure alias.
              Consequatur, modi recusandae a quis ipsum suscipit rem labore pariatur debitis quia unde optio dolore corrupti, maiores cum quas minima minus maxime! Eum repudiandae adipisci natus voluptatum incidunt sint accusamus.
            </p>
        </div>
        <div className="col-sm-12 col-md-6 video ">
        <video loop muted autoPlay width="600" className='rounded'>
        <source src={v} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </div>
    </>
  );
}

export default ImgSlider;