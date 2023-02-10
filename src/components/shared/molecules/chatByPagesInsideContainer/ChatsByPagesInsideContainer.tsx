import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material';
import useStyles from './Styles';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 'none',
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '18px',
        fontStyle: 'normal',
        color: '#fff',
        lineWidth: '20px',
        background: "black"
    },
});

const ChatsByPagesInsideContainer: React.FC = () => {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.inside} direction="column">
            <Grid item xs={1}>
                <StyledTooltip title="Bajaj Finery ada  lorem ispme subhasd subhasd Bajaj Finery subhasd Bajaj Finery subhasd Bajaj Finery">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item xs={1} >
                            <Avatar className={classes.profile}><Typography>S</Typography></Avatar>
                        </Grid>
                        <Grid item xs={9} pt={1}>
                            <Typography className={classes.name} display="inline">
                                Bajaj Finery lorem ispme subhasd asdj
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.figure}>
                                1839
                            </Typography>
                        </Grid>
                    </Grid>
                </StyledTooltip>
            </Grid>
        </Grid >
    )
}

export default ChatsByPagesInsideContainer