import { Box, Flex } from '@chakra-ui/react'
import React from 'react';
import SidebarRightData from '../Component/Video_page/SidebarRightData'
import VideosData from '../Component/Video_page/VideosData'

const Videos = () => {
  return (
    <Box w={'100%'} >
      <Box w={"80%"} m={'auto'}>
        <Flex direction={'column'} gap={2}>
          <VideosData query={"FeaturedVideos"} title={"Videos"} headTitle={"Featured Videos"} />
          <VideosData query={"ESPNcricinfoShows"} title={"Videos"} headTitle={"ESPNcricinfo shows"} dataShowLimit={[2,3,8]}/>
          <Flex>
            <Box w={"75%"}>
              <VideosData query={"Videos"} title={"Videos"} headTitle={"Videos"} dataShowLimit={[1,1,3]}/>
            </Box>
            <Box w={"24%"} mt={3}>
              <SidebarRightData />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Videos