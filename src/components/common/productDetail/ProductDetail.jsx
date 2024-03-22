import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ItemCount } from "../itemCount/ItemCount";

export const ProductDetail = ({ product, onAdd, initial }) => {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "400px" }}
          src={product.img}
          alt={product.name}
        />
        <Stack>
          <CardBody>
            <Heading size="lg">{product.name}</Heading>

            <Text py="2">Description: {product.description}</Text>
            <Text py="2">Price: ${product.price}</Text>
            <Text size="xs">Stock: {product.stock}</Text>
            <ItemCount onAdd={onAdd} initial={initial} product={product} />
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
};
