import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import useStyles from '../../../pages/dashboard/totalChatsChart/Styles';
import React from 'react'
import { Typography, } from '@mui/material';

type Props = {
    type: boolean,
    onTransferClick: () => void
  }
const ToggleImage: React.FC<Props> = ({ type, onTransferClick }) => {
    const { classes } = useStyles();
    return (
        <Typography className={classes.typography} onClick={onTransferClick} m={2}>Total Chats
            {type ? <LeaderboardIcon className={classes.transferIcon} /> : <TimelineIcon className={classes.transferIcon} />}
        </Typography>
    )
}

export default ToggleImage