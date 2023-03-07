import { useState, useEffect } from 'react';
import { createStyles, Navbar } from '@mantine/core';
import {
  IconUserPlus,
  IconUserCircle,
  IconLogin,
  IconGitPullRequest,
  IconCode,
  IconCodeDots,
  IconCodeCircle,
} from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';
import { pages } from '../constants/pages';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: string = getRef('icon');
  return {
    version: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
      color: theme.white,
      fontWeight: 700,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      )}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      marginBottom: 5,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
          0.1
        ),
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
          0.15
        ),
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  };
});

const dataUsers = [
  {
    route: pages.access.manageUsers.route,
    refRoute: `/${pages.access.route}/${pages.access.manageUsers.route}`,
    label: pages.access.manageUsers.title,
    icon: IconUserCircle,
  },
  {
    route: `${pages.access.manageUsers.route}/${pages.access.manageUsers.createUser.route}`,
    refRoute: `/${pages.access.route}/${pages.access.manageUsers.route}/${pages.access.manageUsers.createUser.route}`,
    label: pages.access.manageUsers.createUser.title,
    icon: IconUserPlus,
  },
];

const dataAccounts = [
  {
    route: pages.access.manageServiceAccounts.route,
    refRoute: `/${pages.access.route}/${pages.access.manageServiceAccounts.route}`,
    label: pages.access.manageServiceAccounts.title,
    icon: IconLogin,
  },
  {
    route: `${pages.access.manageServiceAccounts.route}/${pages.access.manageServiceAccounts.createService.route}`,
    refRoute: `/${pages.access.route}/${pages.access.manageServiceAccounts.route}/${pages.access.manageServiceAccounts.createService.route}`,
    label: pages.access.manageServiceAccounts.createService.title,
    icon: IconUserPlus,
  },
];

const dataEnvironments = [
  {
    route: pages.access.viewEnvironments.route,
    refRoute: `/${pages.access.route}/${pages.access.viewEnvironments.route}`,
    label: pages.access.viewEnvironments.title,
    icon: IconGitPullRequest,
  },
  {
    route: `${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.development.route}`,
    refRoute: `/${pages.access.route}/${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.development.route}`,
    label: pages.access.viewEnvironments.development.title,
    icon: IconCode,
  },
  {
    route: `${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.production.route}`,
    refRoute: `/${pages.access.route}/${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.production.route}`,
    label: pages.access.viewEnvironments.production.title,
    icon: IconCodeDots,
  },
  {
    route: `${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.staging.route}`,
    refRoute: `/${pages.access.route}/${pages.access.viewEnvironments.route}/${pages.access.viewEnvironments.staging.route}`,
    label: pages.access.viewEnvironments.staging.title,
    icon: IconCodeCircle,
  },
];

export function SideMenu() {
  const location = useLocation();

  function menuList() {
    if (location.pathname.includes(pages.access.manageUsers.route)) {
      return [...dataUsers];
    }
    if (location.pathname.includes(pages.access.manageServiceAccounts.route)) {
      return [...dataAccounts];
    }
    if (location.pathname.includes(pages.access.viewEnvironments.route)) {
      return [...dataEnvironments];
    }
    return [];
  }

  const data = menuList();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(data[0].label);

  useEffect(() => {
    data.forEach((item) => {
      if (item.refRoute === location.pathname) {
        setActive(item.label);
      }
    });
  }, [location]);

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      to={item.route}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <Navbar height={links.length * 60} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>{links}</Navbar.Section>
    </Navbar>
  );
}
