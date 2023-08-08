// react imports
import React from 'react'

// mui imports
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

// rrd imports
import { Link } from 'react-router-dom'

function sidebar({menuItems}) {
  return (
   <div className="flex items-center md:block hidden">
        <div className='md:p-5'>
            <Link to={`/`} className='font-bold'>TranscriptDigita</Link>
        </div>
        <List className='p-2 gap-y-2 flex flex-col'>
            {menuItems && menuItems.map((menuItem)=>(
                <Link 
                    key={menuItem.title} 
                    to={menuItem.path}
                >
                    <ListItem
                        key={menuItem.title}
                        className={`${menuItem.isActive == true ? `bg-[#6B3FA0] bg-opacity-10` : ``} hover:bg-[#6B3FA0] hover:bg-opacity-10 rounded-lg`}
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