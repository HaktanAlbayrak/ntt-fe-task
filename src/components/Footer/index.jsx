import React from 'react';
import {
  Box,
  Container,
  Grid,
  InputBase,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import footerLogo from '../../assets/images/footer-logo.png';
import { footerItems } from './footerData';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const StyledEmailInput = styled('div')({
  width: '400px',
  height: '40px',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  color: '#000000',
  marginTop: '55px',
});

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#0059BC' }} mt={15}>
      <Container sx={{ marginTop: '65px' }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              component='img'
              sx={{
                height: 42,
                width: 170,
              }}
              alt='Footer logo'
              src={footerLogo}
            />
            <Typography
              variant='p'
              mt={4}
              sx={{
                color: '#FFFFFF',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '18.75px',
                width: '407px',
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
              aliquam neque.
            </Typography>
            <StyledEmailInput>
              <InputBase
                placeholder='Email'
                fullWidth={true}
                sx={{
                  margin: '10px',
                }}
              />
              <Box
                sx={{
                  backgroundColor: '#00254F',
                  width: '100px',
                  height: '100%',
                  color: '#FFFFFF',
                  fontWeight: 400,
                  fontSize: 16,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                Sign Up
              </Box>
            </StyledEmailInput>
          </Grid>
          <Grid
            item
            md={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#FFFFFF',
              }}
              mt={5}
            >
              {footerItems.map((item) => {
                return (
                  <Box>
                    <Typography key={item.id} variant='h5' mb={2}>
                      {item.title}
                    </Typography>
                    {item.subItems.map((sItem, index) => {
                      return (
                        <Typography
                          key={index}
                          variant='h6'
                          sx={{ fontWeight: 400, fontSize: '20px' }}
                        >
                          {sItem.subTitle}
                        </Typography>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={5}
        p={3}
        sx={{ borderTop: '2px solid #D9D9D9', width: '100%', color: '#FFFFFF' }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6'>contact@nttdata.com</Typography>
          <Typography variant='h6'>+3 9876 765 444</Typography>
          <Stack direction='row' spacing={2}>
            <Box>
              <Instagram />
            </Box>
            <Box>
              <Facebook />
            </Box>
            <Box>
              <Twitter />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
