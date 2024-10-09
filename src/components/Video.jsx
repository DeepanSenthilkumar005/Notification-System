import React from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import './Video.css'

function Video() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>
          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>
          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>

            
          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>


          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>
          <Card className="col-lg-4 col-sm-12 col-md-6 p-2 d-flex justify-content-center m-3 vi1" style={{width:'500px'}}>
            <Card.ImgOverlay style={{width:'100%'}} className="vid">
              <iframe
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/D0UnqGm_miA" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </Card.ImgOverlay>
            
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default Video;
