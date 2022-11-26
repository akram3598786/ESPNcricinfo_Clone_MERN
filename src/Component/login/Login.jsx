import React from "react";
import { Box, Text, Input, Heading, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import NavbarFant from "../Fantacy-navbar/Navbar";
import Sideimg from "../sideimg/Sideimg";
import { FaStethoscope } from "react-icons/fa";
const Login = () => {
  const navigate = useNavigate();
  const [password, setpass] = React.useState("");
  const [email, setemail] = React.useState("");
  const [data, setdata] = React.useState({ email: "", password: "", name: "" });

  // React.useEffect(() => {
  //   fetch("https://rupesh-team.herokuapp.com/login")
  //     .then((res) => res.json())
  //     .then((res) => setdata(res))
  //     .catch((err) => alert(err));
  // }, []);

  function loginuser() {
    let newform = JSON.stringify({ email, password });
    console.log(newform);
    fetch("https://dark-gold-firefly-gear.cyclic.app/user/login", {
      method: "POST",

      body: newform,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);

        alert("Login Successfull");
        navigate("/matches");
      })
      .catch((error) => alert("Invalid Login"));
  }

  function loginfn() {
    if (email == data.email && password == data.password) {
      alert("Login Successfull");
      navigate("/matches");
    } else {
      alert("Enter Wrong Password or Email");
    }
  }
  return (
    <>
      <NavbarFant />
      <Sideimg />
      <Box display="flex">
        <Box mt="20" w="40%">
          <Box
            gap="5"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Heading>LOGIN</Heading>
            <Text mt="-2" mb="5">
              Please Enter Your Email and Password
            </Text>
            <Input
              onChange={(e) => setemail(e.target.value)}
              w="70%"
              bg="#f1f2f4"
              type="email"
              size="lg"
              name="email"
              placeholder="Enter Email"
            />
            <Input
              onChange={(e) => setpass(e.target.value)}
              w="70%"
              bg="#f1f2f4"
              type="text"
              size="lg"
              name="password"
              placeholder="Enter Password.."
            />
            <Button onClick={loginuser} w="70%" colorScheme="purple" size="lg">
              Login
            </Button>
            <Text mb="-12px">Don't Have Account SignUp</Text>
            <Link to="/signup">
              <Button variant="link" color="red">
                SignUp
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
