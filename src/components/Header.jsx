import { ExpandMore, Search, Menu } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  InputBase,
  MenuItem,
  Select,
  styled,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import Logo from '../assets/images/Frame.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'black',
  borderBottom: '1px solid black',
  padding: '20px 0px 0px 0px',
  [theme.breakpoints.only('xs')]: {
    padding: '20px 0px 30px 0px',
  },
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SearchBar = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  height: '40px',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.only('xs')]: {
    marginLeft: '0px',
    borderRadius: '5px 0px 0px 5px',
    width: '100%',
  },
  [theme.breakpoints.only('sm')]: {
    marginLeft: '30px',
    width: '350px',
  },
  [theme.breakpoints.only('md')]: {
    marginLeft: '20px',
    width: '500px',
  },
  [theme.breakpoints.not('md')]: {
    marginLeft: '20px',
    width: '10x',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '75px',
    width: '650px',
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#0059BC',
  width: '110px',
  height: '40px',
  marginLeft: '10px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
    borderRadius: '0px 5px 5px 0px',
  },
}));

const Header = () => {
  const [selectValue, setSelectValue] = useState('Categories');

  return (
    <StyledAppBar sx={{ boxShadow: 0 }} position='relative'>
      <Container>
        <StyledToolBar>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: { xs: '24px', md: '0px' },
            }}
          >
            <Box component='img' src={Logo} alt='ntt-Logo' />
            <Menu sx={{ display: { xs: 'block', md: 'none' } }} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <SearchBar>
              <InputBase
                placeholder='Search...'
                sx={{
                  margin: '10px',
                  width: 'calc(100% - 132px)',
                }}
              />
              <Select
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                sx={{
                  borderRadius: '0',
                  display: { xs: 'none', sm: 'flex' },
                  width: '132px',
                }}
                IconComponent={ExpandMore}
              >
                <MenuItem value='Categories'>Categories</MenuItem>
                <MenuItem value='Category 1'>Category 1</MenuItem>
                <MenuItem value='Category 2'>Category 2</MenuItem>
                <MenuItem value='Category 3'>Category 3</MenuItem>
              </Select>
            </SearchBar>
            <CustomButton variant='contained'>
              <Search />
            </CustomButton>
          </Box>
        </StyledToolBar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
