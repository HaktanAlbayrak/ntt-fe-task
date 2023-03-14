import { Box, Button, Container, styled } from '@mui/material';
import React, { useState } from 'react';
import NavBarItem from './NavBarItem';
import { menuItems } from './navbarData';
import './navbar.css';

const StyledButton = styled(Button)({
  borderRadius: '0',
  color: 'black',
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Container
      p={0}
      maxWidth='xl'
      sx={{ display: { xs: 'none', sm: 'block' }, justifyContent: 'center' }}
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
              >
                {item.itemName}
              </StyledButton>
            );
          })}
          <NavBarItem anchorEl={anchorEl} />
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
