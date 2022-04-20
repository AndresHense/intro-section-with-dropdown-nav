import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaBell,
  FaBullseye,
  FaCalendar,
  FaClipboardList,
} from 'react-icons/fa';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const MenuDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align='flex-start' mt={10}>
              <Accordion allowMultiple mx={-4} borderBottomWidth={0}>
                <AccordionItem borderWidth={0}>
                  <AccordionButton
                    color='gray.600'
                    fontWeight='bold'
                    _focus={{ borderWidth: '0px', borderStyle: 'none' }}
                    _hover={{ color: 'black' }}
                  >
                    Features
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
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
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem borderWidth={0} _last={{ borderBottomWidth: 0 }}>
                  <AccordionButton
                    color='gray.600'
                    fontWeight='bold'
                    _focus={{ borderWidth: '0px', borderStyle: 'none' }}
                    _hover={{ color: 'black' }}
                    borderBottomWidth={0}
                  >
                    Company
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <VStack align='start' px={8} py={3} m={0}>
                      <Text>History</Text>
                      <Text>Our Team</Text>
                      <Text>Blog</Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default MenuDrawer;
