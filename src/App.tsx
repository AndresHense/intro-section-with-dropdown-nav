import {
  Box,
  Button,
  Flex,
  Stack,
  HStack,
  Icon,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';

import {
  FaBell,
  FaBullseye,
  FaCalendar,
  FaClipboardList,
} from 'react-icons/fa';
import MenuDrawer from './components/MenuDrawer';

function App() {
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  return (
    <>
      <Flex direction='column' h='100vh'>
        <HStack justify='space-between' p={6} px={8}>
          <HStack spacing={10}>
            <Text fontWeight='bold' fontSize='3xl'>
              Span
            </Text>
            <HStack spacing={4} display={{ base: 'none', lg: 'flex' }}>
              <Popover>
                <PopoverTrigger>
                  <Button
                    as='button'
                    variant='unstyled'
                    color='gray.600'
                    _focus={{
                      borderWidth: '0px',
                      borderStyle: 'none',
                    }}
                    _hover={{ color: 'black' }}
                  >
                    <HStack alignItems='center' justify='center' spacing={0}>
                      <Text>Features</Text>
                      <Icon as={RiArrowDownSLine} boxSize={5} pb={1} />
                    </HStack>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  w='170px'
                  _focus={{
                    borderWidth: '0px',
                    borderStyle: 'none',
                    boxShadow: '0 4px 15px gray ',
                  }}
                >
                  <VStack align='start' px={8} py={3} m={0}>
                    <HStack>
                      <Icon as={FaClipboardList} color='pink' />
                      <Text>Todo List</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaCalendar} color='green' />
                      <Text>Calendar</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaBell} color='yellow' />
                      <Text>Reminders</Text>
                    </HStack>
                    <HStack>
                      <Icon as={FaBullseye} color='purple' />
                      <Text>Planning</Text>
                    </HStack>
                  </VStack>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant='unstyled'
                    color='gray.600'
                    _focus={{
                      borderWidth: '0px',
                      borderStyle: 'none',
                    }}
                    _hover={{ color: 'black' }}
                  >
                    <HStack alignItems='center' justify='center' spacing={0}>
                      <Text>Company</Text>
                      <Icon as={RiArrowDownSLine} boxSize={5} pb={1} />
                    </HStack>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  w='130px'
                  _focus={{
                    borderWidth: '0px',
                    borderStyle: 'none',
                    boxShadow: '0 4px 15px gray ',
                  }}
                >
                  <VStack align='start' px={8} py={3} m={0}>
                    <Text>History</Text>
                    <Text>Our Team</Text>
                    <Text>Blog</Text>
                  </VStack>
                </PopoverContent>
              </Popover>
              <Button
                variant='unstyled'
                color='gray.600'
                _focus={{ borderWidth: '0px', borderStyle: 'none' }}
                _hover={{ color: 'black' }}
              >
                Careers
              </Button>
              <Button
                variant='unstyled'
                color='gray.600'
                _focus={{ borderWidth: '0px', borderStyle: 'none' }}
                _hover={{ color: 'black' }}
              >
                About
              </Button>
            </HStack>
          </HStack>

          <HStack spacing={5} display={{ base: 'none', lg: 'flex' }}>
            <Button
              variant='unstyled'
              _focus={{ borderWidth: '0px', borderStyle: 'none' }}
            >
              Login
            </Button>
            <Button type='button' as='span'>
              Register
            </Button>
          </HStack>
          <HStack
            display={{ base: 'inherit', lg: 'none' }}
            onClick={onMenuOpen}
          >
            <IconButton icon={<FiMenu />} aria-label='hamburger' />
          </HStack>
        </HStack>
        <Stack
          p={{ base: 0, md: 9, lg: 11 }}
          paddingLeft={{ base: 0, md: 9, lg: 16 }}
          direction={{ base: 'column-reverse', lg: 'row' }}
        >
          <VStack
            paddingLeft={{ base: 1, md: 6, lg: 8 }}
            spacing={{ base: 6, md: 10, lg: 12 }}
            align={{ base: 'center', md: 'center', lg: 'start' }}
            justify={{ base: 'center', md: 'center', lg: 'inherit' }}
            w={{ base: '100%', md: '100%', lg: '50%' }}
          >
            <Flex
              direction={{ base: 'row', md: 'row', lg: 'column' }}
              pt={{ base: 6, md: 10, lg: 8 }}
              lineHeight={{ base: 1, md: 1, lg: 1 }}
            >
              <Text
                fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                fontWeight='bold'
                pr={{ base: 2, lg: 'inherit' }}
              >
                Make
              </Text>
              <Text
                fontSize={{ base: '3xl', md: '5xl', lg: '8xl' }}
                fontWeight='bold'
                /*mt={{ base: 0, lg: '-8' }}*/
              >
                Remote Work
              </Text>
            </Flex>
            <Text
              fontSize='xl'
              color='gray.500'
              fontWeight='bold'
              w='70%'
              align={{ base: 'center', lg: 'inherit' }}
            >
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </Text>
            <Box justifyContent='start' display='flex'>
              <Button
                size='lg'
                p={6}
                bg='black'
                color='white'
                _hover={{ color: 'black', bg: 'gray.100' }}
              >
                Learn More
              </Button>
            </Box>
            <HStack
              spacing={{ base: 2, md: 8, lg: 10 }}
              pt={10}
              pb={{ base: '120px' }}
            >
              <img src='images/client-audiophile.svg' alt='client1' />
              <img src='images/client-databiz.svg' alt='client1' />
              <img src='images/client-maker.svg' alt='client1' />
              <img src='images/client-meet.svg' alt='client1' />
            </HStack>
          </VStack>
          <VStack paddingRight={{ base: 0, md: 10, lg: 16 }}>
            <Image
              boxSize={{ base: '100%', md: '700px' }}
              src='images/image-hero-desktop.png'
            />
          </VStack>
        </Stack>
        <MenuDrawer isOpen={isMenuOpen} onClose={onMenuClose} />
      </Flex>
    </>
  );
}

export default App;
