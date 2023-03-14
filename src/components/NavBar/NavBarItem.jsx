import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import navBarImage from '../../assets/images/menuPhoto.png';
import { menuItems } from '../../navbarItems';

const NavBarItem = ({ isOpen, anchorEl, setIsOpen }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredItems = menuItems.filter((item) => item.id === 2);
    setFilteredData(filteredItems);
  }, [anchorEl]);

  return (
    <>
      {filteredData.length > 0 && (
        <Box
          component='div'
          sx={{
            background: '#F4F5F6',
          }}
          p={5}
          className='sub-bar'
        >
          <Stack direction='row' spacing={17}>
            {filteredData[0].subItems.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography variant='h6'>{item.subHeader}</Typography>
                  <Stack direction='column' spacing={1} mt='12px'>
                    {item.subHeaderItems.map((hItem, index) => {
                      return (
                        <Button
                          key={index}
                          sx={{ color: 'black' }}
                          onClick={() => setIsOpen(false)}
                        >
                          {hItem.subItemName}
                        </Button>
                      );
                    })}
                  </Stack>
                </Box>
              );
            })}
            <img
              src={navBarImage}
              style={{ borderRadius: '2', width: '600px', height: '380px' }}
            />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default NavBarItem;
