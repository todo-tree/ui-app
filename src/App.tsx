import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  Badge,
  Button,
  DrawerBody,
  DrawerContent,
  Drawer,
  DrawerOverlay,
  HStack,
  Heading,
  Highlight,
  Image,
  Kbd,
  ListItem,
  OrderedList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  Spacer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useBreakpointValue,
  useDisclosure,
  UnorderedList,
} from "@chakra-ui/react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import TimerIcon from "@mui/icons-material/Timer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: any;
}

const Navigation = () => {
  return (
    <Stack as="nav">
      <Accordion defaultIndex={[0, 1, 2, 3, 4]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" fontWeight="semibold">
                  Queue
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" fontWeight="semibold">
                  Project
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" fontWeight="semibold">
                  Project
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" fontWeight="semibold">
                  Project
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Heading size="md" fontWeight="semibold">
                  Project
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

const DrawerMenu = (props: DrawerMenuProps) => {
  return (
    <>
      <Drawer isOpen={props.isOpen} onClose={props.onClose} placement="left">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody paddingY="32px">
              <Navigation />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

const LayoutWithMenu = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSmall = useBreakpointValue({ base: true, md: false });
  const [isDisplay, setIsDisplay] = useState(true);

  const handleOnClick = () => {
    if (isSmall) {
      onOpen();
    } else {
      setIsDisplay(!isDisplay);
    }
  };

  return (
    <Stack>
      <HStack p={5} backgroundColor="pink.100" h="43px">
        <Button onClick={handleOnClick} size="sm">
          <MenuIcon fontSize="small" />
        </Button>
        <Button size="sm">
          <HomeIcon fontSize="small" />
        </Button>

        <Spacer />

        <Button size="sm">
          <TimerIcon fontSize="small" />
        </Button>
        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Button size="sm">
              <AccountCircleIcon fontSize="small" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <UnorderedList>
                <ListItem>User</ListItem>
                <ListItem>Setting</ListItem>
                <ListItem>Theme</ListItem>
                <ListItem>Logout</ListItem>
              </UnorderedList>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Box display={{ base: "block", md: "none" }}>
          <DrawerMenu isOpen={isOpen} onClose={onClose} />
        </Box>
      </HStack>
      <HStack
        alignItems="start"
        style={{ marginTop: 0 }}
        className={isSmall ? "mobile" : "pc"}
      >
        <Box
          style={{ position: "relative", flexShrink: 0 }}
          className={isDisplay ? "display-sidebar" : "unDisplay-sidebar"}
          display={{ base: "none", md: "block" }}
          w={305}
          px={6}
          paddingY={8}
          paddingX="24px"
        >
          <Navigation />
        </Box>
        <Box
          style={{
            position: "relative",
            marginLeft: 0,
            padding: 8,
            flexShrink: 0,
          }}
          className={isDisplay ? "display-content" : "unDisplay-content"}
        >
          {children}
        </Box>
      </HStack>
    </Stack>
  );
};

const App = () => {
  return (
    <LayoutWithMenu>
      <Box>
        <Heading size="lg" marginX={4} marginY={8}>
          Hello, World!
        </Heading>

        <Box margin={4}>
          <OrderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
          </OrderedList>
        </Box>

        <Box margin={4}>
          <Heading lineHeight="tall" size="sm">
            <Highlight
              query="spotlight"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              With the Highlight component, you can spotlight words.
            </Highlight>
          </Heading>
        </Box>

        <Box margin={4}>
          <Stack direction="row">
            <Badge>Default</Badge>
            <Badge colorScheme="green">Success</Badge>
            <Badge colorScheme="red">Removed</Badge>
            <Badge colorScheme="purple">New</Badge>
          </Stack>
        </Box>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Box margin={4}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>

        <Box margin={4}>
          Please <Kbd>shift</Kbd> + <Kbd>S</Kbd>
        </Box>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </LayoutWithMenu>
  );
};

export default App;
