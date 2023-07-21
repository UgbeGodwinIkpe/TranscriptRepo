// react imports
import React from 'react'

// mui imports
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

function sidebar({menuItems}) {
  return (
   <div className="flex items-center md:block hidden">
        <List>
            {menuItems && menuItems.map((menuItem)=>(
                <ListItem
                    key={menuItem.title}
                >
                    <ListItemIcon>{menuItem.icon}</ListItemIcon>
                    <ListItemText primary={menuItem.title} />
                </ListItem>
            ))}
            
        </List>
   </div>
  )
}

export default sidebar