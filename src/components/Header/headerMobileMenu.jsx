import { Close } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { menuItems } from '../../utils/navbarData';

const headerMobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      {menuOpen && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            backgroundColor: '#FFFFFF',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 999,
          }}
          p={2}
        >
          <Box sx={{ display: 'flex', justifyContent: 'right' }}>
            <Close onClick={() => setMenuOpen((prev) => !prev)} />
          </Box>
          {menuItems.map((item) => {
            return (
              <Typography
                variant='h6'
                sx={{ width: '100%' }}
                m={2}
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                {item.itemName.length > 20
                  ? item.itemName.substr(0, 15).concat('...')
                  : item.itemName}
              </Typography>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default headerMobileMenu;
