import { Mail, Home, List } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home',
    children: [
      {
        id: 'devs',
        title: 'Desarrolladores',
        icon: <List size={20} />,
        navLink: '/devs'
      }
    ]
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  }
]
