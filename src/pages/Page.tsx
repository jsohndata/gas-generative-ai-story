import { useState } from "react";
import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";

const imageUri = process.env.PUBLIC_URL + '/images';
const imageFile1 = imageUri+'/motion-cyber-girl.webp';
const videoFile1 = imageUri+'/motion-cyber-girl.mp4';

const imageFile2 = imageUri+'/motion-cyberpunk-city.jpg';
const videoFile2 = imageUri+'/motion-cyberpunk-city.mp4';

const Page = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <AppLayout>
      <Container>
        <Row>
          <Col>
            {!isVideoPlaying ? (
              <Image 
                src={imageFile1} 
                alt="Click Me" 
                onClick={handleClick}
                style={{ width: '100%', }} />
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
          </Col>


          <Col>
            {!isVideoPlaying ? (
              <Image 
                src={imageFile2} 
                alt="Click Me" 
                onClick={handleClick}
                style={{ width: '100%', }} />
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
          </Col>
          
        </Row>
      </Container>
    </AppLayout>
  );
}

export default Page;