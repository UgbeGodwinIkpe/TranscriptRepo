// react imports
import React from 'react'
import {HiOutlineRectangleGroup, HiListBullet, HiOutlineBell, HiOutlineCog6Tooth} from 'react-icons/hi2'

// mui imports
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const menuItems = [
    {
        title: 'Dashboard',
        icon: <HiOutlineRectangleGroup size={20}/>,
        path: ''
    },

    {
        title: 'Alumni List',
        icon: <HiListBullet size={20}/>,
        path: ''
    },

    {
        title: 'Request',
        icon: <HiOutlineBell size={20}/>,
        path: ''
    },

    {
        title: 'Settings',
        icon: <HiOutlineCog6Tooth size={20}/>,
        path: ''
    },


]

function sidebar({menu}) {
  return (
   <div className="md:block hidden">
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