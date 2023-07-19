// react imports
import React from 'react'
import {HiOutlineRectangleGroup, HiListBullet, HiOutlineBell, HiOutlineCog6Tooth} from 'react-icons/hi2'

// mui imports
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'

const menuItems = [
    {
        title: 'Dashboard',
        icon: <HiOutlineRectangleGroup/>,
        path: ''
    },

    {
        title: 'Alumni List',
        icon: <HiListBullet/>,
        path: ''
    },

    {
        title: 'Request',
        icon: <HiOutlineBell/>,
        path: ''
    },

    {
        title: 'Settings',
        icon: <HiOutlineCog6Tooth/>,
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