import React from 'react'
import { Button, CardActions, CardContent, Divider, Grid, Typography, Card } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import useStyles from './Styles'
import TotalPagesInsideContainer from '../../../shared/molecules/chatByPagesInsideContainer/ChatsByPagesInsideContainer';
const ChatsByPages: React.FC = () => {

    const { classes } = useStyles();

    return (
        <>
            <Card className={classes.root} >
                <CardContent>
                    <Grid container >
                        <Grid item xs={12} className={classes.top}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography className={classes.typography}>Chats By Pages</Typography>
                                </Grid>
                                <Grid item>
                                    <MoreHorizOutlinedIcon
                                        fontSize="small"

                                        className={classes.menu}
                                    />

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <TotalPagesInsideContainer />
                            <Divider />
                            <TotalPagesInsideContainer />
                            <Divider />
                            <TotalPagesInsideContainer />
                            <Divider />
                            <TotalPagesInsideContainer />
                            <Divider />
                            <TotalPagesInsideContainer />
                            <Divider />
                            <TotalPagesInsideContainer />
                            <Divider />


                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ pt: 0, justifyContent: 'center' }} className={classes.bottom}>
                    <Button size="small" disableElevation>
                        View All
                        <ChevronRightOutlinedIcon />
                    </Button>
                </CardActions>
            </Card>

        </>
    );
}

export default ChatsByPages
