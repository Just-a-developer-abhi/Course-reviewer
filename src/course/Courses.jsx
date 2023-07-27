import { Button, Container, HStack, Heading, Input, Stack, Text, VStack, Image, Link } from '@chakra-ui/react'
import React, { useState } from 'react'


const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lecture}) => {
    return (
        <VStack 
        className='course' 
        alignItems={["center","flex-start"]}
        >
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} paddingY={'4'}/>
            <Heading 
            textAlign={["center", "left"]} 
            maxW={"200px"} 
            fontFamily={'sans-serif'} 
            children={title}
            noOfLines={3}
            size={'sm'}
            />
            <Text noOfLines={2} children={description} />

            <HStack >
            <Text fontWeight={'bold'} size={"sm"} textTransform={"uppercase"} children={'Creator'} />
            <Text fontFamily={'body'} size={"sm"} textTransform={"uppercase"} children={creator} />
            </HStack>

            <Heading 
            textAlign={"center"}
            size={"xs"}
            children={`Lectures - ${lecture}`}
            textTransform={'uppercase'}/>

            <Heading 
            textAlign={"center"}
            size={"xs"}
            children={`Views - ${views}`}
            textTransform={'uppercase'}/>

            <Stack 
            direction={["column", "row"]}
            alignItems={"center"}
            >
                <Link to={`/course/${id}`}>
                    <Button colorScheme='yellow'>Watch Now</Button>
                </Link>

                <Button 
                variant={'ghost'}
                colorScheme='yellow'
                onClick={()=> addToPlaylistHandler(id)}>Add to Watchlist</Button>

            </Stack>

        </VStack>
    )
}

const Courses = () => {

    const [keyword, setKeyword] = useState();
    const [category, setCategory] = useState();

    const addToPlaylistHandler = () =>(
        console.log("Added to Playlist")    
    )

    const categories = ["Data Structure & Algorithim", "Data Science", "Video Editing || Premier Pro", "DaVinci Resolve",
    "Data Scrapping", "VFX Tutorials", "Adobe Photoshop", "Blender", "Environment Building", "Psychology", "Book writing", "Networking", "Product Development" ]

  return (
        <Container minH={'95vh'} maxH={'container.lg'} paddingY={'8'}>
            <Heading children='All Courses' m={'8'}/>
                <Input 
                value={keyword}  
                onChange={e => setKeyword(e.target.value)} 
                placeholder='Search for your Course'
                type={'text'}
                focusBorderColor={'yellow.500'}
                />

                <HStack 
                overflow={'auto'}
                paddingY={'8'}>
                       {
                        categories.map((item, index)=>(
                            <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                                <Text children={item}/>
                            </Button>
                        ))
                       }
 
                </HStack>

                <Stack 
                direction={["column", "row"]}
                flexWrap={'wrap'}
                justifyContent={["flex-start","space-evenly"]}
                alignItems={["center", "flex-start"]}
                >
                    <Course 
                    title={'Course4U'}
                    description={"sample"}
                    views={23}
                    id={1}
                    creator={"Abhishek"}
                    lecture={2}
                    addToPlaylistHandler={addToPlaylistHandler}
                    imageSrc={"https://pixabay.com/photos/bird-owl-barn-owl-avian-8139277/"}
                    />
    
                </Stack>

        </Container>
  )
}

export default Courses