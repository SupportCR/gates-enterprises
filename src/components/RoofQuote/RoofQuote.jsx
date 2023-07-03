import { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import Image from "mui-image";
import diagramDrawing from "../../assets/images/diagramDrawing.jpg"

const RoofQuote = () => {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement('script');
    const insertHere = document.getElementById('placeForRoofle')
    script.src = "https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=Y3dZuVyicM3rboTdAfQ_S";
    script.async = true;
    insertHere.appendChild(script);

    return () => {
      insertHere.removeChild(script);
    }
  }, []);

  return (
    <Stack>
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: theme.spacing(32)
      }}>
        <Image
          top='0'
          src={diagramDrawing}
          height="100%"
          width="100%"
          fit="cover"
          bgColor="inherit"
          style={{ zIndex: '-1', opacity: '0.3', position: 'absolute' }}
        />
        <Typography variant="h1" align="center"
          sx={{
            position: 'absolute',
            fontSize: '5rem',
            [theme.breakpoints.up('sm')]: {
              fontSize: '6rem'
            }
          }}>
          Get a Roof Quote
        </Typography>
      </div>
      <div id="placeForRoofle"></div>
    </Stack>
  );
}

export default RoofQuote;