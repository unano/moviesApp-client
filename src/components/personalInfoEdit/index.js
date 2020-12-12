import React, {useContext, useState} from "react";
import "../../globals/fontawesome";
import useForm from "react-hook-form";
import {PersonalContext} from '../../contexts/personalContext'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const PersonalInfoEdit = ({history, userInfo}) => {
    const {handleSubmit} = useForm();
    const context = useContext(PersonalContext);
    const [buttonValue, setButtonValue] = useState('0');
    const [user,setUser]=useState(userInfo);

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
    const classes = useStyles();
    const handleButtonChange = (e) => {
        setButtonValue(e.target.value);
        var container=user;
        container.gender=e.target.value;
        context.setUser(container)
    };
    const birthdayChange = (e) => {
        var container=user;
        container.birthday=e.target.value;
        setUser(container)
    };
    const hobbyChange = (e) => {
        var container=user;
        container.hobby=e.target.value;
        setUser(container)
    };
    const movieChange = (e) => {
        var container=user;
        container.movies=e.target.value;
        setUser(container)
    };
    const actorChange = (e) => {
        var container=user;
        container.actors=e.target.value;
        setUser(container)
    };
    const introChange = (e) => {
        var container=user;
        container.introduce=e.target.value;
        setUser(container)
    };
    
    const onSubmit = () => {
        context.setUser(user);
        history.push("/info");
  };

  return (
      <div className="content" style={{width:501, height:550}}>
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
       <p style={{fontSize:20}}>Username: {userInfo.username}</p>
      <FormLabel style={{float: "left", fontSize:12, color:"grey"}}>Gender</FormLabel>
      <RadioGroup style={{float: "left"}}
       class="form-horizontal" aria-label="gender" name="gender" value={buttonValue} onChange={handleButtonChange}>
        <FormControlLabel value="female" control={<Radio color="default"/>} label="Female" />
        <FormControlLabel value="male" control={<Radio color="default"/>} label="Male" />
       </RadioGroup>
        <TextField
          name="Birthday"
          style={{marginBottom:20}}
          id="date"
          label="Birthday"
          type="date"
          defaultValue={userInfo.birthday}
          className={classes.textField}
          onChange={birthdayChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br/>
        <br/>
        <TextField
          name="hobby"
          id="outlined-multiline-static"
          style={{width: 455, marginBottom:14}}
          label="hobby"
          multiline
          rows={1}
          defaultValue={userInfo.hobby}
          onChange={hobbyChange}
          variant="outlined"
        />
        <br/>
        <TextField
          name="movie"
          id="outlined-multiline-static"
          style={{width: 455, marginBottom:14}}
          label="favorite movie"
          multiline
          rows={1}
          defaultValue={userInfo.movies}
          onChange={movieChange}
          variant="outlined"
        />
        <br/>
        <TextField
          name="actor"
          id="outlined-multiline-static"
          style={{width: 455, marginBottom:14}}
          label="favorite actor"
          multiline
          rows={1}
          defaultValue={userInfo.actors}
          onChange={actorChange}
          variant="outlined"
        />
        <br/>
        <TextField
          name="introduce"
          id="outlined-multiline-static"
          style={{width: 455, marginBottom:14}}
          label="Personal introduction"
          multiline
          rows={3}
          defaultValue={userInfo.introduce}
          onChange={introChange}
          variant="outlined"
        />
        <Button variant="contained" style={{float: "right"}} onClick={() => history.goBack()}>Back</Button>
        <Button variant="contained" type="submit" color="primary" 
        style={{float: "right" ,marginRight:10, backgroundColor: "darkturquoise"}}>
        Update
        </Button>
      </div>
    </form>
      </div>
  );
};

export default PersonalInfoEdit;