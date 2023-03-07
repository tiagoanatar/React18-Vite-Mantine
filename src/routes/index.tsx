import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<NoSidebarTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path={pages.access.route} element={<SidebarTemplate />}>
          <Route index element={<Access />} />
          <Route path={pages.access.manageServiceAccounts.route}>
            <Route index element={<ManageServiceAccounts />} />
            <Route
              path={pages.access.manageServiceAccounts.createService.route}
              element={<CreateService />}
            />
          </Route>
          <Route path={pages.access.manageUsers.route}>
            <Route index element={<ManageUsers />} />
            <Route path={pages.access.manageUsers.createUser.route} element={<CreateUser />} />
            <Route path=":id" element={<EditUser />} />
          </Route>
          <Route path={pages.access.viewEnvironments.route}>
            <Route index element={<ViewEnvironments />} />
            <Route
              path={pages.access.viewEnvironments.development.route}
              element={<Development />}
            />
            <Route path={pages.access.viewEnvironments.production.route} element={<Production />} />
            <Route path={pages.access.viewEnvironments.staging.route} element={<Staging />} />
          </Route>
        </Route>
        <Route path={pages.welcome.title} element={<Welcome />} />
      </Route>
      <Route path="public" element={<div>About</div>} />
    </Route>
  )
);

export default router;
