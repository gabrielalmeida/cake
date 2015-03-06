Schemas = {};

AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/admin',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Cadastrar-se agora!"
      },
      socialSignUp: "Cadastrar",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recuperar senha"
      },
    },
});

AccountsTemplates.configureRoute('signIn', {
  name: 'signIn', 
  path: '/'
});

AdminConfig = {
  name: 'Cake Vegan Cake',
  collections: {
    Orders: {
      icon: 'tag',
      color: 'green',
      templates: {
        //new: { 
          ////name: 'ordersCreate'
        //} 
      },
      tableColumns: [
        { label: 'Delivery Date', name: 'delivery.date.date', template: 'prettyDate' },
        { label: 'Customer', name: 'delivery.customer' },
        { label: 'Status', name: 'status' },
        { label: 'Total Value', name: 'total' },
      ]
    },
    Customers: {
      icon: 'users',
      color: 'red',
      tableColumns: [
        { label: 'Name', name: 'fullName()' },
        { label: 'Phone', name: 'user.phones.0.number' },
        { label: 'District', name: 'address.district' }, 
      ],

    }
  },
  dashboard: {
    skin: 'blue'
  }
}
