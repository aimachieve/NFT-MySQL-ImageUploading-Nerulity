import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Stack, Button, Grid } from '@mui/material';
import { varFadeInUp, varWrapEnter, varFadeInRight } from '../../animations';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.default,
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={2} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  // top: 0,
  // right: 0,
  // bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  // position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: '50%',
    // height: '64vh'
  },

  [theme.breakpoints.up('md')]: {
    right: '8%',
    width: '50%',
    // height: '64vh'
  }
}));

// ----------------------------------------------------------------------

export default function HeroSection() {
  return (
    <>
      <RootStyle
        initial="initial"
        animate="animate"
        variants={varWrapEnter}
        sx={{ mt: { xl: 0, lg: 0, md: 0, sm: 14, xs: 8 } }}
      >
        <Container maxWidth="lg">
          <Box>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={4}>
                <Box>
                  <motion.div variants={varFadeInRight}>
                    <Typography variant="h1" sx={{ color: 'white' }}>
                      NFTs like<br /> No Other
                    </Typography>
                  </motion.div>

                  <motion.div variants={varFadeInRight}>
                    <Typography sx={{ color: 'common.white' }} fontSize={20}>
                      A Smart mix between DeFi and CeFi
                    </Typography>
                  </motion.div>

                  <motion.div variants={varFadeInRight}>
                    <Button variant="contained" sx={{ mt: 2, borderRadius: 0, fontSize: { xs: 14, sm: 18 }, py: 1, px: 3 }}>
                      View on OpenSea
                    </Button>
                  </motion.div>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <motion.div variants={varFadeInUp}>
                  <Box
                    component="img"
                    alt="hero"
                    src="/assets/images/landing-boxes.webp"
                    sx={{}}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
