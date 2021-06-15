
import React, { useState } from 'react';
import { Typography,TextField,Button,FormGroup,List,ListItem,ListItemText, FormLabel} from '@material-ui/core';
function App() {
  const [todolist, settodolist] = useState([]);
  const [item, setitem] = useState("");
  return (
    <div >
     
<FormGroup style={{alignItems:"center"}}>
<Typography variant="h2" component="h2" >
  Welcome to To Do List App
</Typography>
<TextField
style={{paddingBottom:"1rem",paddingTop:"1rem"}}
    id="todolist"
    label="To Do List"
    variant="outlined"
    color="secondary"
    value={item} onChange={(e) => { setitem(e.target.value); e.preventDefault() }}
    onKeyDown={(e)=>{if (e.keyCode === 13) { 
      e.preventDefault()}
    }}
  />
  <Button variant="contained" color="primary"  onClick={(e) => { e.preventDefault();settodolist(list => [...list, item]); setitem("") }}>
  Add
</Button>

{todolist.length>0 && <Typography variant="h6" component="h2" style={{marginTop:"5rem"}}>
  The To Do List is as Follows
</Typography>}
<List  aria-label="contacts">
  {

todolist.map((item,i)=>
  <ListItem >
  <ListItemText primary={(i+1)+". "+item} />
</ListItem>
  )
  
     
     }
    </List>
    </FormGroup>
    </div>

  )
}

export default App;
