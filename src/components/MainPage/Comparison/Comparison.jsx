import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { quoteCompare } from '../../../util/comparison';
import stockroofvid from '../../../assets/images/stockroofvid.mp4'
import { useTheme } from '@material-ui/core';

const Comparison = () => {
  const theme = useTheme();

  return (
    <>
      <video autoPlay loop muted style={{
        position: "absolute",
        top: 0,
        left: 0,
        filter: 'brightness(50%)',
        height: 'inherit',
        width: '100%',
        objectFit: 'cover',
        zIndex: -1
      }}>
        <source src={stockroofvid} type='video/mp4' />
      </video>
      <Typography variant="h2" align="center" pb={8}>
        Gates is built different
      </Typography>
      <Grid
        container
        sx={{
          width: '100%',
          pt: 0,
          [theme.breakpoints.up('lg')]: {
            p: '0 10rem 5rem 10rem',
          },
          '& > div': {
            p: 0,
            [theme.breakpoints.up('lg')]: {
              p: '8px'
            },
            borderBottom: 'solid white 4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          },
          '& > div > p': { fontWeight: 'bold', verticalAlign: 'center', padding: '1rem', fontSize: '1rem' }
        }}
      >
        <Grid xs={4} sx={{ borderTop: 'none', borderLeft: 'none' }}>
        </Grid>
        <Grid xs={4} sx={{ border: 'solid white 4px', borderTop: 'none', backgroundColor: 'rgb(6, 40, 65, 0.7)' }}>
          <Typography align='center' fontWeight='bold'>
            Gates Quote
          </Typography>
        </Grid>
        <Grid xs={4} sx={{ borderRight: 'transparent' }}>
          <Typography align='center'>
            Other guys
          </Typography>
        </Grid>
        {quoteCompare.map((option, i) => (
          <React.Fragment key={option.name + i}>
            <Grid xs={4} sx={{ borderRight: 'solid white 4px' }}>
              <Typography align='center'>
                {option.name}
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ backgroundColor: 'rgb(6, 40, 65, 0.7)', borderRight: 'solid white 4px' }}>
              <Typography align='center' variant='body3'>
                {option.gates}
              </Typography>
            </Grid>
            <Grid xs={4} sx={{ borderRight: 'transparent' }}>
              <Typography align='center' variant='body3'>
                {option.others}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
}

export default Comparison;