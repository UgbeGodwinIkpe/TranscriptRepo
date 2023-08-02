import React from 'react';
import './mobileMenu.css'

import {HiOutlineBellAlert, HiOutlineBuildingOffice2} from 'react-icons/hi2'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function MobileMenu() {

    const menuItems = [
        {
            title: 'Home',
            path: '',
            isActive: false,
            icon: <HiOutlineBuildingOffice2 size={30}/>
        },

        {
            title: 'Home',
            path: '',
            isActive: false,
            icon: <HiOutlineBuildingOffice2 size={30}/>
        },

        {
            title: 'Home',
            path: '',
            isActive: true,
            icon: <HiOutlineBuildingOffice2 size={30}/>
        },

        {
            title: 'Home',
            path: '',
            isActive: false,
            icon: <HiOutlineBuildingOffice2 size={30}/>
        },
    ]

  return (
    <div className='flex flex-col fixed top-16 w-full bg-white p-3'>
         <List className='p-2 gap-y-2 flex flex-col'>
            {menuItems && menuItems.map((menuItem)=>(
                <Link 
                    key={menuItem.title} 
                    to={menuItem.path}
                    className='border-b'
                >
                    <ListItem
                        key={menuItem.title}
                        className={`${menuItem.isActive == true ? `bg-[#6B3FA0] bg-opacity-10` : ``} `}
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

export default MobileMenu