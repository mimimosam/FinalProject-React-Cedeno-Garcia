import {
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarWidget from "../common/carWidget/CarWidget";

export const Navbar = () => {
  return (
    <>
      <Container maxW="2x1" bg="orange.400" centerContent>
        <Breadcrumb separator={""}>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Menu isLazy>
              <MenuButton>Categories</MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/category/vegetables">Vegetables</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/category/fruits">Fruits</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/category/wearables">Wearables</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </BreadcrumbItem>
          <CarWidget />
        </Breadcrumb>
      </Container>
    </>
  );
};
