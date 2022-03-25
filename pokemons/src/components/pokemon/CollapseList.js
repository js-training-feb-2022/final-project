
import { 
  List,
  ListItem,
  ListItemButton,
  Collapse,
  ListItemText
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';

export default function CollapseList(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          {props.list.map((abitity, index) => 
            <ListItem key={index}>
              { abitity[props.listKey].name }
            </ListItem>
          )}
        </List>
      </Collapse>
    </React.Fragment>
  );
}