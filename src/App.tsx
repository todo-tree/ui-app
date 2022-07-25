import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
  Button,
  DrawerBody,
  DrawerContent,
  Drawer,
  DrawerOverlay,
  HStack,
  Heading,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Stack,
  Spacer,
  useBreakpointValue,
  useDisclosure,
  UnorderedList,
} from "@chakra-ui/react";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import TimerIcon from "@mui/icons-material/Timer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import data from "./data";
import Content from "./Content";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: any;
}

interface AccordionItemProps {
  title: string;
  children: any;
}

interface ListProps {
  data: string[];
}

const ItemAccordion = (props: AccordionItemProps) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Heading size="md" fontWeight="semibold">
              {props.title}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{props.children}</AccordionPanel>
    </AccordionItem>
  );
};

const List = (props: ListProps) => {
  return (
    <UnorderedList>
      {props.data.map((val) => {
        return <ListItem>{val}</ListItem>;
      })}
    </UnorderedList>
  );
};

const Navigation = () => {
  const listItems = data.listItems;

  return (
    <Stack as="nav">
      <List data={listItems.content} />
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <ItemAccordion title="Queue">
          <UnorderedList>
            <List data={listItems.queue} />
          </UnorderedList>
        </ItemAccordion>
        <ItemAccordion title="Project">
          <UnorderedList>
            <List data={listItems.project} />
          </UnorderedList>
        </ItemAccordion>
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
              <List data={data.home} />
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
      <Content />
    </LayoutWithMenu>
  );
};

export default App;
