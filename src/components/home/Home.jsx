import React from 'react'
import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react'
import './home.css'; 
import { Link } from 'react-router-dom';
import vg from '../../assets/images/display.png'
import {CgGoogle, CgYoutube } from 'react-icons/cg';
import {SiCoursera, SiUdemy} from 'react-icons/si';
import {DiAws} from 'react-icons/di'; 
import introvideo from '../../assets/videos/introvideo.mp4';

const Home = () => {
  return <section className='home'>
    <div className="container">
      <Stack 
       direction={["column", "row"]}
       height='100%'
       justifyContent={["center", "space-between"]}
       alignItems={"center"} 
       spacing={['16', '56']}
      >
      <VStack 
      width={'full'}
      alignItems={['center', 'flex-end']}
      spacing={'2'}>
        <Heading textAlign={["center", "left"]} children="In this world full of problems, let us solve a few of them" size={'sm'} textTransform={'uppercase'}/>
        <Text textAlign={["center", "left"]} children="Find genuine reviews of all the courses"/>
        <Link to={'/courses'}>
          <Button size={["sm", "lg"]} colorScheme='yellow'>
            Explore Now
          </Button>
        </Link>
          
      </VStack>

      <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit={'contain'}/>
      </Stack>
    </div>     <Box padding={'8'} bg={'blackAlpha.800'} >
      <Heading 
      textAlign={'center'}
      fontFamily={'body'}
      color={'yellow.400'}
      children='OUR BRANDS'/>
    <HStack className='brandsBanner' justifyContent={"space-evenly"} marginTop={'4'}>
        <CgGoogle />
        <CgYoutube/>
        <SiCoursera />
        <SiUdemy />
        <DiAws />

    </HStack>
   </Box>

   <div className="container2">
      <video 
      autoPlay={'true'}
      controls controlsList='nodownload nofullscreen noremoteplayback'
      disableRemotePlayback
      disablePictureInPicture
      src={introvideo}>
      </video>
   </div>

  </section>
}

export default Home