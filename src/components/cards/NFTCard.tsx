import React from "react";
import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    Button,
    Tooltip,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";

const NFTCard: React.FC<{
    name: string;
    collectionName: string;
    chain: "ETH" | "POLYGON";
    price: number;
    thumbnail: string;
}> = ({ name, chain, collectionName, price, thumbnail }) => {
    const icons = {
        ETH: <FaEthereum />,
        POLYGON: <FaEthereum color="purple" />,
    };

    const tooltips = {
        ETH: "ETH",
        POLYGON: "ETH on Polygon",
    };

    return (
        <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            w="sm"
            mx="auto"
            cursor="pointer"
            transition="all 100ms linear"
            _hover={{ transform: "translate(0, -5px)" }}
        >
            <Box
                bg="gray.300"
                h="400px"
                w="full"
                rounded="lg"
                shadow="md"
                bgSize="cover"
                bgPos="center"
                style={{
                    backgroundImage: `url(${thumbnail})`,
                }}
            ></Box>

            <Box
                w={{ base: 56, md: 64 }}
                bg={useColorModeValue("white", "gray.800")}
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
            >
                <chakra.h3
                    py={2}
                    textAlign="center"
                    fontWeight="bold"
                    textTransform="uppercase"
                    color={useColorModeValue("gray.800", "white")}
                    letterSpacing={1}
                >
                    {name}
                </chakra.h3>
                <chakra.h4
                    py={2}
                    color="gray.700"
                    textAlign="center"
                    fontSize="sm"
                >
                    {collectionName}
                </chakra.h4>

                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    py={2}
                    px={3}
                    bg={useColorModeValue("gray.200", "gray.700")}
                >
                    <Tooltip label={tooltips[chain]}>
                        <chakra.span
                            fontWeight="normal"
                            fontSize="sm"
                            color={useColorModeValue("gray.800", "gray.200")}
                        >
                            <Flex gap={1} align="center">
                                {icons[chain]} {price}
                            </Flex>
                        </chakra.span>
                    </Tooltip>
                    <Button
                        // bg="gray.800"
                        fontSize="xl"
                        fontWeight="bold"
                        // h={5}
                        // color="white"
                        _focus={{
                            color: "red.400",
                        }}
                        px={2}
                        py={1}
                        rounded="lg"
                        variant="ghost"
                    >
                        <AiOutlineHeart />
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
};

export default NFTCard;
