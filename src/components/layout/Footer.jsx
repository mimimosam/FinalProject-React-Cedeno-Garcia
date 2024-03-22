import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "2", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Image />
        </Stack>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Made by Samantha Cedeño. All rights
          reserved.
        </Text>
      </Stack>
    </Container>
  );
};
