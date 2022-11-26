import { AspectRatio, Box, Flex, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleVideoData = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = location.state?.query;
  const title = location.state?.title;

  useEffect(() => {
    axios.get(`https://apna-mock-server.herokuapp.com/espncricinfoData${query}?q=${title}`).then(res => (
      setData(res.data)
    )).catch(error => (
      console.log(error)
    ))
  }, [data]);

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let id = setInterval(() => {
      setLoading(true)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <Skeleton isLoaded={loading}>
    <Box>
      {data?.map((ele, index) => (
        <Flex alignItems={'flex-start'} pl={2} pr={4} direction={'column'} gap={3} key={index}>
          <iframe width="100%" height="500px" src={ele.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
          <Heading as={'h1'} align={'left'} size={'lg'}>{title}</Heading>
          <Text align={'left'} fontSize={20}>{ele.description}</Text>
        </Flex>
      ))}
    </Box>
  </Skeleton>
  )
}

export default SingleVideoData

