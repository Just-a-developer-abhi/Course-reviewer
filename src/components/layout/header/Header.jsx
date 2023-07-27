import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ( {url, title, onClose}) =>(
    <Link to={url} onClick={onClose}>
        <Button variant={'ghost'}>
            {title}
        </Button>
    </Link>
    )

const Header = () => {

    const logoutHandler = () =>{
        console.log('Logged out successfully')
        onclose();
    }
    const isAuthenticated = true;
    const user = {
        role: "admin",
    }

    const {isOpen, onOpen, onClose} = useDisclosure(); 
  return (
    <>
    <ColorModeSwitcher />
    <Button 
    onClick={onOpen}
    colorScheme='yellow' 
    width={'12'} 
    height={'12'} 
    rounded={'full'} 
    position={'fixed'} 
    top={'6'}
    left={'6'}>
         <RiMenu5Fill />
    </Button>

    <Drawer isOpen={isOpen} onClose= {onClose} placement='left'>
        <DrawerOverlay backdropFilter={'blur(1px)'}/>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'} textTransform={'uppercase'} fontSize={'sm'}>In this world full of problems, let us solve a few of them</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'4'} alignItems={'flex-start'} >
                    <LinkButton url='/' title='Home'onClose={onClose}/>
                    <LinkButton url='/courses' title='Browse Courses' onClose={onClose}/>
                    <LinkButton url='/request' title='Request A Course' onClose={onClose}/>
                    <LinkButton url='/contact' title='Contact Us' onClose={onClose}/>
                    <LinkButton url='/about' title='About Us' onClose={onClose}/>

                    <HStack 
                    justifyContent={'space-evenly'} 
                    position={'absolute'} 
                    bottom={'2rem'} 
                    width={'80%'}
                    > 
                    {isAuthenticated?(<>
                    
                        <VStack onClick={onClose}>
                            <HStack>
                                <Link to='/profile' >
                                    <Button variant={'ghost'} colorScheme='yellow'>
                                        Profile
                                    </Button>
                                </Link>
                                    <Button variant={'ghost'} colorScheme='yellow' onClick={logoutHandler}>
                                        <RiLogoutBoxLine/>Logout
                                    </Button>
                            </HStack>

                            {
                                user && user.role==="admin" && <Link to='/admin/dashboard'>
                                    <Button colorScheme='purple' variant={'ghost'}>
                                        <RiDashboardFill style={{marging: '4px'}}/>Dashboard 
                                    </Button>

                                </Link>
                            }
                            
                        </VStack>
                    </>):(<>

                    <Link to='/login' onClick={onClose}>
                        <Button colorScheme='yellow'>Login</Button>
                    </Link>

                        <p>OR</p>

                    <Link to='/signup' onClick={onClose}>
                        <Button colorScheme='yellow'>SignUp</Button>
                    </Link>


                    </>)
                    }

                    </HStack>
                </VStack>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}

export default Header

