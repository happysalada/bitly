import React from 'react';
import List, {ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const Notifi = props => {
  return <Paper style={{margin: '10px', backgroundColor: '#ededed'}}>
    <List>
      <ListItem>
        <Typography variant="title" style={{marginRight: '50px'}}>{props.title}</Typography>
      </ListItem>
      <ListItem>
        <Typography style={{fontSize: '18px'}}>
          {props.message}
        </Typography>
      </ListItem>
    </List>
  </Paper>;
};

export default Notifi;
