import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const CheckoutContainer = ({ formSubmit, gettingInfo, orderId }) => {
  return (
    <>
      {" "}
      {orderId ? (
        <Card
          align="center"
          boxShadow="2xl"
          p="6"
          rounded="md"
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <CardHeader>
            <Heading>Succesfull purchase!</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="xl" mx="4">
              {" "}
              The ID for your order is:
            </Text>{" "}
            <Text fontSize="xl" fontWeight="700" m="2">
              {" "}
              {orderId}
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="orange">
              {" "}
              <Link to="/">Continue Shopping</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Container
          maxW="lg"
          py={{ base: "12", md: "24" }}
          px={{ base: "0", sm: "8" }}
        >
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>Checkout</Heading>
            <Text color="fg.muted">Enter your information to proceed</Text>

            <Box
              py={{ base: "0", sm: "8" }}
              px={{ base: "4", sm: "10" }}
              bg={{ base: "transparent", sm: "bg.surface" }}
              boxShadow="2xl"
              p="6"
              rounded="md"
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <Stack spacing="5">
                <form onSubmit={formSubmit}>
                  <FormControl isRequired>
                    <FormLabel htmlFor="name">Enter your name</FormLabel>
                    <Input
                      id="name"
                      placeholder="John Wesker"
                      type="text"
                      onChange={gettingInfo}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      id="email"
                      placeholder="wesker.j@gmail.com"
                      type="email"
                      onChange={gettingInfo}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="phone">Phone</FormLabel>
                    <Input
                      id="phone"
                      placeholder="1234567890"
                      type="phone"
                      onChange={gettingInfo}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    my={{ base: "12", md: "10" }}
                    spacing={{ base: "2", md: "3" }}
                    textAlign="center"
                    colorScheme="orange"
                  >
                    Proceed to get Order ID
                  </Button>
                </form>
              </Stack>
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};
