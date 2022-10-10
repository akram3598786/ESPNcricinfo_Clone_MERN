import styles from "../CenterBox/center.module.css";
import styless from "./news.module.css"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getnews,
  getnewsloading,
  getnewerror,
} from "../../Redux/centrebox/action";
import { Fetchdata } from "../../Redux/centrebox/action";
import { RightNavBox } from "./rightnewdiv";
import {
  Box,
    Flex,
    Heading,
  } from "@chakra-ui/react";
  import { NavBox } from "./newdiv";

export const News = ({ theme }) => {
  const dispatch = useDispatch();
  const newsdisplay = useSelector((state) => state.news);
  let [arr1, setarr] = React.useState([]);
  const newsloading = useSelector((state) => state.loading);
  const newserror = useSelector((state) => state.error);

  React.useEffect(() => {
    dispatch(Fetchdata());
  }, []);



  function getnewsdata() {
    dispatch(getnewsloading());
    fetch(`https://cricbuzz-cricket.p.rapidapi.com/news/v1/index`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bd73fbab72msh41aa8b1ae34d02fp1118fcjsnb86ef1d3cf9d",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        return dispatch(getnews(res.storyList));
      })

      .catch((error) => dispatch(getnewerror()));
  }

  return (
    <Flex  justifyContent="space-evenly" margin="15px 0 0 0"> 

        <Box>
          <Heading borderTopRadius="10px" fontSize="28px" p="15px" border="1px solid #EDEEF0" >Latest News</Heading>
          {newsdisplay.map((news) =>
            news.story === undefined ? (
              console.log(news)
            ) : (
              <NavBox key={news.story.id} theme={theme} info={news.story} />
            )
          )}
          {newsdisplay.map((news) =>
            news.story === undefined ? (
              console.log(news)
            ) : (
              <NavBox key={news.story.id} theme={theme} info={news.story} />
            )
          )}
        </Box>



      
          <Box>
          <Heading borderTopRadius="10px" p="15px" border="1px solid #EDEEF0" fontSize="16px" > Most Read</Heading>
            {newsdisplay.map((news) =>
              news.story === undefined ? (
                console.log(news)
              ) : (
                <RightNavBox
                  key={news.story.id}
                  theme={theme}
                  info={news.story}
                />
              )
            )}

        
          </Box>
    
    </Flex>
  )
}
