import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
 formControl: {
  margin: theme.spacing(5),
  minWidth: 120,
 },
 selectEmpty: {
  marginTop: theme.spacing(2),
 },
}));

function SelectBar({ num, handleChange }) {
 // destructuring props i.e. {num, handleChange} = props
 // notes "handleChange" is a passed funtion in props object
 const classes = useStyles();
 return (
  <FormControl className={classes.formControl}>
   <InputLabel id="demo-simple-select-helper-label"></InputLabel>

   <Select
    labelId="demo-simple-select-helper-label"
    id="demo-simple-select-helper"
    value={num}
    onChange={handleChange}
   >
    <MenuItem value=""><em>None</em></MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    <MenuItem value={40}>40</MenuItem>
    <MenuItem value={31}>31</MenuItem>
    <MenuItem value={46}>46</MenuItem>
    <MenuItem value={60}>60</MenuItem>
    
   </Select>

   <FormHelperText>Select your fav pokemon number !</FormHelperText>
  </FormControl>
 )
}

export default SelectBar;