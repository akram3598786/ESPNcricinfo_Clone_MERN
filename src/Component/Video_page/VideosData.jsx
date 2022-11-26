import { Box, Flex, Image, SimpleGrid, Skeleton, Spacer, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const VideosData = ({ query, title, headTitle, dataShowLimit = [1,2,4], limit = '' }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id); 

    }, [])

    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/espncricinfoData${query}?_limit=${limit}`).then(res => (
            setData(res.data)
        )).catch(error => (
            console.log(error)
        ))
    }, [query]);

    // const { style, mode } = useContext(DarkModeContext)
    // const getStyle = (mode) => {
    //     return mode ? {
    //         color: "white"
    //     } : null
    // }

    // const newStyle = getStyle(mode)

    let date = new Date().toLocaleString("en-US", { day: '2-digit' });
    let month = new Date().toLocaleString("en-US", { month: "long" });
    let year = new Date().getFullYear();

    const featuredVideos = (
        <Skeleton isLoaded={loading}>
            <Box >
                <Flex alignItems={'center'}>
                    {/* <Text style={newStyle} align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'} color={'#454647'}>{headTitle}</Text> */}
                    <Spacer />
                    <Link to={`/${title}`}>
                        <Text p={3} color={"#03A9F4"}>view all videos</Text>
                    </Link>
                </Flex>
                <SimpleGrid columns={dataShowLimit} gap={2} p={3}>
                    {data?.map((ele, index) => (
                        <Link to={`/${title}/${ele.heading}`} key={index} state={{ query: `${query}`, title: `${ele.heading}` }}>
                            <Box >
                                <Flex direction={'column'} gap={1}>
                                    <Box w={'100%'}
                                        h={180}
                                        borderRadius={8}
                                        overflow={"hidden"}>
                                        <Image src={ele.img}
                                            w={"100%"}
                                            h={180}
                                            transition={'transform .5s, filter 1.5s ease-in-out'}
                                            _hover={{ transform: "scale(1.1)" }}>
                                        </Image>
                                    </Box>
                                    <Text align={'left'} fontWeight={'bold'} fontSize={14}>{ele.heading}</Text>
                                    <Text align={'left'} fontSize={12}>{`${month} ${date},${year}`}</Text>
                                </Flex>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </Box>
        </Skeleton>
    )

    const shows = (
        <Skeleton isLoaded={loading}>
            <Box >
                <Flex alignItems={'center'}>
                    {/* <Text style={newStyle} align={'left'} p={3} fontWeight={'bold'} fontSize={'x-large'} color={'#454647'} >{headTitle}</Text> */}
                </Flex>
                <SimpleGrid columns={dataShowLimit} gap={2} p={3}>
                    {data?.map((ele, index) => (
                        <Box key={index} borderRadius={8} w={'140px'} h={'180px'} backgroundImage={`${ele.backgroundImg}`}>
                            <Flex alignItems={'center'} justifyContent={'center'} pt={'50px'}>
                                <Image src={ele.img} w={'90px'}></Image>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Skeleton>
    )

    const videos = (
        <Skeleton isLoaded={loading}>
             <Box > {/* style={newStyle} */}
                <SimpleGrid columns={dataShowLimit} gap={4} p={3}>
                    {data?.map((ele, index) => (
                        <Link key={index} to={`/${title}/${ele.heading}`} state={{ query: `${query}`, title: `${ele.heading}` }}>
                            <Box h={"320px"} p={3} background={'white'} borderRadius={8} boxShadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}>
                                <Flex direction={'column'} gap={1}>
                                    <Box w={'100%'}
                                        h={180}
                                        borderRadius={8}
                                        overflow={"hidden"}>
                                        <Image src={ele.img}
                                            w={"100%"}
                                            h={180}
                                            transition={'transform .5s, filter 1.5s ease-in-out'}
                                            _hover={{ transform: "scale(1.1)" }}>
                                        </Image>
                                    </Box>
                                    <Box pr={4}>
                                        <Text align={'left'} fontWeight={'bold'} fontSize={14}>{ele.heading}</Text>
                                        <Text align={'left'} fontSize={12}>{`${month} ${date},${year}`}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </Box>
        </Skeleton>
    )


    return (
        <>
            {query === "FeaturedVideos" ? featuredVideos : ""}
            {query === "ESPNcricinfoShows" ? shows : ""}
            {query === "Videos" ? videos : ""}
        </>
    )
}

export default VideosData
