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
import Logo from '../../assets/images/Frame.png';
import HeaderMobileMenu from './headerMobileMenu';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const SearchBar = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  height: '40px',
  border: '1px solid black',
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.only('xs')]: {
    marginLeft: '0px',
    borderRadius: '5px 0px 0px 5px',
    width: '235px',
  },
  [theme.breakpoints.only('sm')]: {
    marginLeft: '30px',
    width: '350px',
  },
  [theme.breakpoints.only('md')]: {
    marginLeft: '20px',
    width: '500px',
  },
  [theme.breakpoints.up('md')]: {
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledAppBar sx={{ boxShadow: 0 }} position='relative'>
      <Container>
        <StyledToolBar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: { xs: '24px', sm: '0px' },
            }}
          >
            <Box component='img' src={Logo} alt='ntt-Logo' />
            <Menu
              onClick={() => setMenuOpen((prev) => !prev)}
              sx={{ display: { xs: 'flex', sm: 'none' }, cursor: 'pointer' }}
            />
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
      <HeaderMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </StyledAppBar>
  );
};

export default Header;
