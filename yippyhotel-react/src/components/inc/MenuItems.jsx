import React from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { MdHotelClass } from 'react-icons/md';
import { TfiClose } from 'react-icons/tfi';
import * as AiIcons  from 'react-icons/ai';

export const MenuData = [
    {
        title: 'HOME',
        path:'/',
        icon: <AiIcons.AiOutlineAlignCenter/>,
        cName:'nav_text'
    },
    {
        title: 'SIGNIN',
        path:'/signin',
        icon: <AiIcons.AiFillAmazonCircle />,
        cName:'nav_text'
    }
]
