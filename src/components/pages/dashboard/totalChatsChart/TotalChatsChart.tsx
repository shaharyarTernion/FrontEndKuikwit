import { useState, useMemo } from 'react'
import { Grid, Card } from '@mui/material';
import Select from '../../../shared/atoms/select/Select';
import ReactApexChart from 'react-apexcharts';
// chart data
import chartData from './growth';
import TabsComponent from '../../../shared/atoms/tabsComponent/TabsComponent';
import useStyles from './Styles';
import ToggleImage from '../../../shared/atoms/toggleChartIcon/ToggleImage';

const TotalChatsChart: React.FC = () => {
    const { classes } = useStyles();
    const [chartType, setChartType] = useState(true);

    const onTransferClick = () => {
        setChartType(!chartType);
    }
    const type = chartType ? "bar" : "line";

    const apexcharts = useMemo(() => <ReactApexChart key={type} {...chartData} type={type} />, [type])
    return (
        <>
            <Card className={classes.chart}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <Grid container direction="column" spacing={1}>
                                    <Grid item>
                                        <ToggleImage type={chartType} onTransferClick={onTransferClick} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={6}>
                                <Grid container>
                                    <Grid item lg={7}>
                                        <TabsComponent />
                                    </Grid>
                                    <Grid item lg={5}>
                                        <Select />
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {apexcharts}
                    </Grid>
                </Grid>
            </Card>

        </>
    );
};


export default TotalChatsChart;
