import React, { useState } from 'react';
import { Box, Button, MenuItem, Select, styled } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const StyledButton = styled(Button)({
  borderRadius: '0',
  color: 'black',
});

const NavbarItemTablet = ({ menuItems }) => {
  const [selectValue, setSelectValue] = useState(0);

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
      }}
      className='navbar-item'
    >
      {menuItems.slice(0, 6).map((item) => {
        return (
          <StyledButton
            key={item.id}
            sx={{
              borderBottom: '2px solid transparent',
            }}
          >
            {item.itemName}
          </StyledButton>
        );
      })}
      {menuItems.length > 6 && (
        <Select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
            '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              border: 0,
            },
            '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
              {
                border: 0,
              },
            color: 'black',
            fontWeight: 500,
            marginBottom: '5px',
            display: { xs: 'none', sm: 'flex' },
          }}
          IconComponent={ExpandMore}
        >
          <MenuItem value={0}>More</MenuItem>
          {menuItems.slice(6).map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.itemName}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </Box>
  );
};

export default NavbarItemTablet;
