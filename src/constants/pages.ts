export const pages = {
  home: {
    route: '/',
    title: 'home',
  },
  welcome: {
    route: 'welcome',
    title: 'Welcome',
  },
  access: {
    route: 'access',
    title: 'What would you like to do today?',
    titleSecondary: 'Home',
    manageServiceAccounts: {
      route: 'manage-service-accounts',
      title: 'Manage Service Accounts',
      createService: {
        route: 'create-service',
        title: 'Create Service Account',
      },
      editAccount: {
        route: 'edit-service',
        title: 'Edit Service Account',
      },
    },
    manageUsers: {
      route: 'manage-users',
      title: 'Manage Users',
      createUser: {
        route: 'create-user',
        title: 'Create User',
      },
      editUser: {
        route: 'edit-user',
        title: 'Edit User',
      },
    },
    viewEnvironments: {
      route: 'view-environments',
      title: 'View Environments',
      development: {
        route: 'development',
        title: 'Development',
      },
      production: {
        route: 'production',
        title: 'Production',
      },
      staging: {
        route: 'staging',
        title: 'Staging',
      },
    },
  },
} as const;
