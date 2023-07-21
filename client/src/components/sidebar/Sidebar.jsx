// react imports
import React from 'react'

// mui imports
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

// rrd imports
import { Link } from 'react-router-dom'

function sidebar({menuItems}) {
  return (
   <div className="flex items-center md:block hidden">
        <List>
            {menuItems && menuItems.map((menuItem)=>(
                <Link to={menuItem.path}>
                    <ListItem
                        key={menuItem.title}
                    >
                        <ListItemIcon>{menuItem.icon}</ListItemIcon>
                        <ListItemText primary={menuItem.title} />
                    </ListItem>
                </Link>
            ))}
            
        </List>
   </div>
  )
}

export default sidebar