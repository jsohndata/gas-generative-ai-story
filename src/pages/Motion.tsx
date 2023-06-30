import { useState } from "react";
import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";

const imageUri = process.env.PUBLIC_URL + '/images';
const imageFile1 = imageUri+'/motion-cyber-female.webp';
const videoFile1 = imageUri+'/motion-cyber-female.mp4';

const imageFile2 = imageUri+'/motion-cyberpunk-city.jpg';
const videoFile2 = imageUri+'/motion-cyberpunk-city.mp4';

const imageFile3 = imageUri+'/motion-cyber-male.png';
const videoFile3 = imageUri+'/motion-cyber-male.mp4';

const imageFile4 = imageUri+'/motion-cyber-female-2.png';
const videoFile4 = imageUri+'/motion-cyber-female-2.mp4';

const imageFile5 = imageUri+'/motion-street.png';
const videoFile5 = imageUri+'/motion-street.mp4';



const Motion = () => {
  const [isVideoPlaying1, setIsVideoPlaying1] = useState(false);
  const [isVideoPlaying2, setIsVideoPlaying2] = useState(false);
  const [isVideoPlaying3, setIsVideoPlaying3] = useState(false);
  const [isVideoPlaying4, setIsVideoPlaying4] = useState(false);
  const [isVideoPlaying5, setIsVideoPlaying5] = useState(false);


  const toggleView = (videoPlayingId: any) => {
    videoPlayingId(true);
  };

  return (
    <AppLayout>
      <Container fluid id="motion">
        <Row className="g-4">
          <Col md={6}>
            <div className="motion-container">
              {!isVideoPlaying1 ? (
                <Image 
                  fluid
                  src={imageFile1} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying1)}
                  />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile1} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>


          <Col md={6}>
            <div className="motion-container">
              {!isVideoPlaying2 ? (
                <Image 
                  fluid                   
                  src={imageFile2} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying2)}
                  />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile2} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>

          <Col >
          <div className="motion-container">
              {!isVideoPlaying3 ? (
                <Image 
                  fluid                   
                  src={imageFile3} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying3)}
                  />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile3} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>


          <Col >
          <div className="motion-container">
              {!isVideoPlaying4 ? (
                <Image 
                  fluid                   
                  src={imageFile4} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying4)}
                  />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile4} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>

          <Col xs={12}>
            <div className="motion-container">
              {!isVideoPlaying5 ? (
                <Image 
                  fluid                   
                  src={imageFile5} 
                  alt="Click Me" 
                  onClick={ () => toggleView(setIsVideoPlaying5)}
                  style={{width: "100%"}} />
              ) : (
                <video         
                  autoPlay
                  controls
                  style={{ 
                    width: '100%', 
                    border: 'none',
                    padding: '0',
                    margin: '0',
                  }}>
                  <source src={videoFile5} type="video/mp4" />
                </video>
              )}
            </div>
          </Col>
          
        </Row>
      </Container>
    </AppLayout>
  );
}

export default Motion;