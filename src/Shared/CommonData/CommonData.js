import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';

export const list_menu_drawer = [
    {
        index: 0,
        name: 'Dashboard',
        icon: <HomeIcon className='icon-style'/>,
        link: '/admin'
    },
    {
        index: 1,
        name: 'Course',
        icon: <MenuBookIcon className='icon-style'/>,
        link: '/admin/course'
    },
    {
        index: 2,
        name: 'Students',
        icon: <PersonIcon className='icon-style'/>,
        link: '/admin/student'
    },
    {
        index: 3,
        name: 'About',
        icon: <InfoIcon className='icon-style'/>,
        link: ''
    }
];

export const listShift = [
    {
        id: 'MORNING',
        name: 'Morning'
    },
    {
        id: 'AFTERNOON',
        name: 'Afternoon'
    },
    {
        id: 'NIGHT',
        name: 'Night'
    }
];