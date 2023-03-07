import { IconUserCircle, IconLogin, IconGitPullRequest, IconHome } from '@tabler/icons';
import { Menu } from '@mantine/core';
import { Link } from 'react-router-dom';
import { pages } from '../constants/pages';

export function MainMenu() {
  return (
    <>
      <Link to={pages.access.route}>
        <Menu.Item icon={<IconHome size={14} color="gray" stroke={1.5} />}>{pages.access.titleSecondary}</Menu.Item>
      </Link>
      <Link to={`${pages.access.route}/${pages.access.manageUsers.route}`}>
        <Menu.Item icon={<IconUserCircle size={14} color="gray" stroke={1.5} />}>{pages.access.manageUsers.title}</Menu.Item>
      </Link>
      <Link to={`${pages.access.route}/${pages.access.manageServiceAccounts.route}`}>
        <Menu.Item icon={<IconLogin size={14} color="gray" stroke={1.5} />}>{pages.access.manageServiceAccounts.title}</Menu.Item>
      </Link>
      <Link to={`${pages.access.route}/${pages.access.viewEnvironments.route}`}>
        <Menu.Item icon={<IconGitPullRequest size={14} color="gray" stroke={1.5} />}>{pages.access.viewEnvironments.title}</Menu.Item>
      </Link>
    </>
  );
}
