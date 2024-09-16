import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { memo } from "react";
import authImg from "./../../assets/images/Auth/AuthImage.png";
import AuthForm from "../../components/Authform";
const AuthPage = memo(() => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} position={'relative'}>
      <Container maxW={"container.md"} padding={0}>
        <Flex
         
          justifyContent={"center"}
          alignItems={"center"}
      
          gap={20}
        >
          {/* Left */}
          <Box display={{ base: "none", md: "block" }}>
            <VStack spacing={4} align={"stretch"}>
              <Image src={authImg} alt={"ilaila-auth-image"} />

              <h1>Socializing should be effortless and enjoyable</h1>
              <br />
              <p>
                Discover a space where you can meet people who share your
                passions, spark conversations, and make every moment of
                connection count.
              </p>
            </VStack>
          </Box>

          {/* right */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm>

            </AuthForm>
          </VStack>
        </Flex>

        <Box position={'absolute'} bottom={0} left={0} height={10} background={"blue"} content="" width={"100vw"}></Box>
        
      </Container>
    </Flex>
  );
});
AuthPage.displayName = "AuthPage";

export default AuthPage;
