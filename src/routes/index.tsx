import { createBrowserRouter } from 'react-router-dom';
/* pages */
import Home from '../pages/Home';
import Welcome from '../pages/Welcome';
/* access route */
import Access from '../pages/Access';
import { ManageServiceAccounts } from '../pages/Access/ManageServiceAccounts';
import { CreateService } from '../pages/Access/ManageServiceAccounts/CreateService';
import { ManageUsers } from '../pages/Access/ManageUsers';
import { EditUser } from '../pages/Access/ManageUsers/EditUser';
import { CreateUser } from '../pages/Access/ManageUsers/CreateUser';
import { ViewEnvironments } from '../pages/Access/ViewEnvironments';
import { Development } from '../pages/Access/ViewEnvironments/Development';
import { Production } from '../pages/Access/ViewEnvironments/Production';
import { Staging } from '../pages/Access/ViewEnvironments/Staging';
/* layouts */
import { NoSidebarTemplate } from '../layouts/NoSidebarTemplate';
import { SidebarTemplate } from '../layouts/SidebarTemplate';
import { pages } from '../constants/pages';

const router = createBrowserRouter([
  {
    element: <NoSidebarTemplate />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: pages.access.route,
        element: <SidebarTemplate />,
        children: [
          {
            index: true,
            element: <Access />,
          },
          {
            path: pages.access.manageServiceAccounts.route,
            children: [
              {
                index: true,
                element: <ManageServiceAccounts />,
              },
              {
                path: pages.access.manageServiceAccounts.createService.route,
                element: <CreateService />,
              },
            ],
          },
          {
            path: pages.access.manageUsers.route,
            children: [
              {
                index: true,
                element: <ManageUsers />,
              },
              {
                path: pages.access.manageUsers.createUser.route,
                element: <CreateUser />,
              },
              {
                path: ':id',
                element: <EditUser />,
              },
            ],
          },
          {
            path: pages.access.viewEnvironments.route,
            children: [
              {
                index: true,
                element: <ViewEnvironments />,
              },
              {
                path: pages.access.viewEnvironments.development.route,
                element: <Development />,
              },
              {
                path: pages.access.viewEnvironments.production.route,
                element: <Production />,
              },
              {
                path: pages.access.viewEnvironments.staging.route,
                element: <Staging />,
              },
            ],
          },
        ],
      },
      {
        path: pages.welcome.title,
        element: <Welcome />,
      },
    ],
  },
  {
    path: 'public',
    element: <div>About</div>,
  },
]);

export default router;
