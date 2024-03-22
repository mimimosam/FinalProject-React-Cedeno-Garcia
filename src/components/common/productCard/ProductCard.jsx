import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = (product) => {
  const id = product.id;
  return (
    <Flex
      flex="1"
      gap="4"
      justifyContent="space-between"
      alignContent="center"
      flexWrap="wrap"
    >
      <Card
        maxW="sm"
        d="flex"
        bg="transparent"
        _hover={{ bg: "rgb(226,232,240)" }}
      >
        <CardBody>
          <Image src={product.img} alt={product.alt} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading size="md"> {product.name} </Heading>
            <Text>In Stock: {product.stock}</Text>
            <Text fontSize="2x1">Price:${product.price}</Text>
          </Stack>
          <Link to={`/product/${id}`}>
            <Button colorScheme="orange" size="sm" variant="outline">
              See Description
            </Button>
          </Link>
        </CardBody>
      </Card>
    </Flex>
  );
};
