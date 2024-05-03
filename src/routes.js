import { Navigate } from 'react-router-dom';

import ComplateAccount from './pages/ComplateAccount/ComplateAccount';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Explore from './pages/Explore/Explore';
import Guide from './pages/Guide/Guide';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import Auth from './pages/Auth/Auth';

import UserAccount from './pages/UserAccount/Index';
import UserAccountHome from './pages/UserAccount/Home/Home';
import Followers from './pages/UserAccount/Followers/Followers';
import Messages from './pages/UserAccount/Messages/Messages';
import Protection from './pages/UserAccount/Protection/Protection';
import Posts from './pages/UserAccount/Posts/Posts';
import SendMessage from './pages/UserAccount/SendMessage/SendMessage';
import Settings from './pages/UserAccount/Settings/Settings';
import AddPost from './pages/UserAccount/AddPost/AddPost';
import Premium from './pages/UserAccount/Premium/Premium';

import AdminPanel from './pages/AdminPanel/Index';
import AdminHome from './pages/AdminPanel/Home/Home';
import Users from './pages/AdminPanel/Users/Users';
import AdminFollowers from './pages/AdminPanel/Followers/Followers';
import AdminMessages from './pages/AdminPanel/Messages/Messages';
import AdminProtection from './pages/AdminPanel/Protection/Protection';
import AdminPosts from './pages/AdminPanel/Posts/Posts';
import AdminSettings from './pages/AdminPanel/Settings/Settings';
import SiteDetailes from './pages/AdminPanel/SiteDetailes/SiteDetailes';
import Support from './pages/AdminPanel/Support/Support';

let routes = [

    { path: '/', element: <Home /> },
    { path: '/:userID', element: <User /> },
    { path: '/explore', element: <Explore /> },
    { path: '/guide', element: <Guide /> },
    { path: '/auth', element: <Auth /> },
    { path: '/complate-account', element: <ComplateAccount /> },
    { path: '/welcome', element: <Welcome /> },

    {
        path: '/account',
        element: <UserAccount />,
        children: [
            { path: '', element: <Navigate to='dashbord' /> },
            { path: 'dashbord', element: <UserAccountHome /> },
            { path: 'followers', element: <Followers /> },
            { path: 'send-message', element: <SendMessage /> },
            { path: 'messages', element: <Messages /> },
            { path: 'protection', element: <Protection /> },
            { path: 'posts', element: <Posts /> },
            { path: 'add-post', element: <AddPost /> },
            { path: 'premium', element: <Premium /> },
            { path: 'settings', element: <Settings /> },
        ]
    },

    {
        path: '/admin-account',
        element: <AdminPanel />,
        children: [
            { path: '', element: <Navigate to='dashbord' /> },
            { path: 'dashbord', element: <AdminHome /> },
            { path: 'users', element: <Users /> },
            { path: 'followers', element: <AdminFollowers /> },
            { path: 'messages', element: <AdminMessages /> },
            { path: 'protection', element: <AdminProtection /> },
            { path: 'posts', element: <AdminPosts /> },
            { path: 'support', element: <Support /> },
            { path: 'site-detailes', element: <SiteDetailes /> },
            { path: 'settings', element: <AdminSettings /> },
        ]
    },


    { path: '*', element: <NotFound /> },

]

export default routes