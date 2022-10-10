import { Box, Container, Image, Skeleton, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SidebarRight.module.css'

const SidebarRightData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    // const { style,hrStyle } = useContext(DarkModeContext)
    useEffect(() => {
        axios.get(`https://apna-mock-server.herokuapp.com/epsnCrickinfoSidebars`).then((res) => {
            setData(res.data)
        }).catch(error => {
            console.log(error)
        })

        let id = setInterval(() => {
            setLoading(true)
        }, 1000)

        return () => clearInterval(id)
    }, [])
    return (
        <Skeleton isLoaded={loading}>
             <div className={styles.sidebarRightData} > {/* style={style} */}
                {data?.map((ele, index) => (
                    <Link key={index} to={`/Article/${ele.title.replace(/\s+/g, '-')}`} state={{ query: `Article`, title: `${ele.title}` }}>
                        <Container pt={3}>
                            <Box w={"100%"} overflow="hidden">
                                <Image src={ele.img} borderRadius={10} w={"100%"} />
                            </Box>
                            <Text pb={3} align="left" mt={2} fontWeight='600' fontSize={'sm'}>{ele.title}</Text>
                            {/* <Text style={hrStyle} /> */}
                        </Container>
                    </Link>
                ))}
            </div>
        </Skeleton>
    )
}

export default SidebarRightData