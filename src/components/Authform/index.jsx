import { Box, Container, Image, VStack } from "@chakra-ui/react";
import logoImg from "./../../assets/images/Common/Logo.png";

const AuthForm = () => {
  return (
    <Container>
      <Box>
      <VStack>
        <div className="logo-container">
          <Image src={logoImg} alt="logo-img" />
        </div>
      

   

        </VStack>
      </Box>
    </Container>
  );
};

export default AuthForm;
