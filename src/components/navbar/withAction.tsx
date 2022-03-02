import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
    Icon,
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    AddIcon,
    ChevronRightIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Explore",
        children: [
            {
                label: "Trending NFTs",
                subLabel: "NFTs that are on the rise",
                href: "#",
            },
            {
                label: "Most Popular NFTs",
                subLabel: "Most popular NFTs of all time",
                href: "#",
            },
        ],
    },
    {
        label: "Stat",
        children: [
            {
                label: "Ranking",
                subLabel: "NFT Leaderboard",
                href: "#",
            },
            {
                label: "Activity",
                subLabel: "NFTs with the highest community interaction",
                href: "#",
            },
        ],
    },
    {
        label: "Learn about Web3",
        href: "#",
    },
];

// const Links = ["Explore", "Stats"];

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={"group"}
            display={"block"}
            p={2}
            rounded={"md"}
            _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
        >
            <Stack p={1} direction={"row"} align={"center"}>
                <Box>
                    <Text
                        transition={"all .3s ease"}
                        _groupHover={{ color: "pink.400" }}
                        fontWeight={500}
                    >
                        {label}
                    </Text>
                    <Text fontSize={"sm"}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={"all .3s ease"}
                    transform={"translateX(-10px)"}
                    opacity={0}
                    _groupHover={{
                        opacity: "100%",
                        transform: "translateX(0)",
                    }}
                    justify={"flex-end"}
                    align={"center"}
                    flex={1}
                >
                    <Icon
                        color={"pink.400"}
                        w={5}
                        h={5}
                        as={ChevronRightIcon}
                    />
                </Flex>
            </Stack>
        </Link>
    );
};

const withAction: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();

    interface MenuItems {
        name: string;
        onClick: () => void;
        id: string;
    }

    const MenuLinksBefore: Array<MenuItems> = [
        {
            name: "Profile",
            onClick: () => {
                router.push("/profile");
            },
            id: "1",
        },
        {
            name: "Inventory",
            onClick: () => {
                router.push("/inventory");
            },
            id: "2",
        },
    ];

    const MenuLinksAfter: Array<MenuItems> = [
        {
            name: "Log Out",
            onClick: () => {
                router.push("/");
            },
            id: "3",
        },
    ];

    return (
        <>
            <Box
                position="fixed"
                w="100vw"
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Box>NFTKart</Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {/* {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))} */}
                            {NAV_ITEMS.map((navItem) => (
                                <Box key={navItem.label}>
                                    <Popover
                                        trigger={"hover"}
                                        placement={"bottom-start"}
                                    >
                                        <PopoverTrigger>
                                            <Link
                                                p={2}
                                                href={navItem.href ?? "#"}
                                                fontSize={"sm"}
                                                fontWeight={500}
                                                color="gray.600"
                                                _hover={{
                                                    textDecoration: "none",
                                                    color: "gray.800",
                                                }}
                                            >
                                                {navItem.label}
                                            </Link>
                                        </PopoverTrigger>

                                        {navItem.children && (
                                            <PopoverContent
                                                border={0}
                                                boxShadow={"xl"}
                                                // bg={popoverContentBgColor}
                                                p={4}
                                                rounded={"xl"}
                                                minW={"sm"}
                                            >
                                                <Stack>
                                                    {navItem.children.map(
                                                        (child) => (
                                                            <DesktopSubNav
                                                                key={
                                                                    child.label
                                                                }
                                                                {...child}
                                                            />
                                                        ),
                                                    )}
                                                </Stack>
                                            </PopoverContent>
                                        )}
                                    </Popover>
                                </Box>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Button
                            variant={"solid"}
                            colorScheme={"teal"}
                            size={"sm"}
                            mr={4}
                            leftIcon={<AddIcon />}
                        >
                            Create
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                {MenuLinksBefore.map((e) => (
                                    <MenuItem key={e.id} onClick={e.onClick}>
                                        {e.name}
                                    </MenuItem>
                                ))}
                                <MenuDivider />
                                {MenuLinksAfter.map((e) => (
                                    <MenuItem key={e.id} onClick={e.onClick}>
                                        {e.name}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Box>
            <Box p={4}>{children}</Box>
        </>
    );
};

export default withAction;
