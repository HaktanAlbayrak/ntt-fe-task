import { Box, Button, Container, styled } from '@mui/material';
import React, { useRef, useState } from 'react';
import NavBarItem from './NavBarItem';
import { menuItems } from '../../navbarItems';
import './navbar.css';

const StyledButton = styled(Button)({
  borderRadius: '0',
  color: 'black',
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  return (
    <Container
      p={0}
      maxWidth='xl'
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
        p={2}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
          }}
          className='navbar-item'
        >
          {menuItems.map((item) => {
            return (
              <StyledButton
                key={item.id}
                id={item.id}
                sx={{
                  borderBottom: '2px solid transparent',
                  '&:hover': { borderBottom: '2px solid #0059BC' },
                }}
                onMouseOver={(e) => {
                  setAnchorEl(e.target.id);
                }}
                ref={btnRef}
              >
                {item.itemName}
              </StyledButton>
            );
          })}
          <NavBarItem
            isOpen={isOpen}
            anchorEl={anchorEl}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
