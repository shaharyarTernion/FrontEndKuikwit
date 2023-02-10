
// import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Card } from '@mui/material';
import Select from '../../../shared/atoms/select/Select';
import TimelineIcon from '@mui/icons-material/Timeline';
import ReactApexChart from 'react-apexcharts';

// chart data
import chartData from '../LineChart/data';
import TabsComponent from '../../../shared/atoms/tabsComponent/TabsComponent';
import useStyles from '../totalChatsChart/Styles';

const LineChart: React.FC = () => {
    const { classes } = useStyles()

    return (
        <>
            <Card className={classes.chart}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <Typography className={classes.typography} m={2}>Total Sales
                                            <TimelineIcon className={classes.transferIcon} />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6}>
                                <Grid container>
                                    <Grid item lg={8}>
                                        <TabsComponent />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <Select />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <ReactApexChart {...chartData} />
                    </Grid>
                </Grid>
            </Card>

        </>
    );
};


export default LineChart;
