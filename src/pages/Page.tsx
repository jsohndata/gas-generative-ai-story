import { useState } from "react";
import { Container, Row, Col, Image } from "../utils/Bootstrap"
import AppLayout from "../layout/AppLayout";

const imageUri = process.env.PUBLIC_URL + '/images';
const imageFile = imageUri+'/motion-cyber-girl-still.webp';
const videoFile = imageUri+'/motion-cyber-girl-movie.mp4';

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
                src={imageFile} 
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
                <source src={videoFile} type="video/mp4" />
              </video>
            )}
          </Col>
          
        </Row>
      </Container>
    </AppLayout>
  );
}

export default Page;