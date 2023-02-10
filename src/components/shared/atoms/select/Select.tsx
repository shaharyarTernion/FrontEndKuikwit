import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './Styles';

export default function SelectSmall() {
  const [age, setAge] = React.useState('Today');
  const { classes } = useStyles();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <FormControl size="small"className={classes.formControl}>
      <InputLabel id="demo-select-small" className={classes.inputLabel}>Today</InputLabel>
      <Select
        value={age}
        label="Time"
        onChange={handleChange}
        className={classes.select}
        // className={classes.form}
      >
        <MenuItem className={classes.menuItem} value={"Today"}>Today</MenuItem>
        <MenuItem className={classes.menuItem} value={"Yesterday"}>Yesterday</MenuItem>
        <MenuItem className={classes.menuItem} value={"This Week"}>This Week</MenuItem>
        <MenuItem className={classes.menuItem} value={"This Month"}>This Month</MenuItem>
      </Select>
    </FormControl>
  );
}
