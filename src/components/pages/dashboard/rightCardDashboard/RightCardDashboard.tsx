import React from 'react'
import { Box, Typography, Grid } from '@mui/material';
import useStyles from './Styles';

const RightCardDashboard: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.paper}>
      <Grid container>
        <Grid item lg={10} xs={6}>
          <Grid container>
            <Grid item lg={10}>
              <Typography
                gutterBottom
                className={classes.text}
              >
                Ongoing Chats
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={2} xs= {6}>
          <Typography
            className={classes.figure}
          >
            1500
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default RightCardDashboard
