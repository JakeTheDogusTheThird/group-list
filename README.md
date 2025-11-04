# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



groupList= [
  {
    functions: [
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "1",
        maxValue: "500"
      },
      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "1",
        maxValue: "500"
      }
    ],
    groupName: "Group 1",
    id: 22,
    minValue: "1",
    maxValue: "500",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      }
    ],
    warning: ""
  },

  {
    functions: [
      {
        title: "F24 Accountant",
        functionCode: "F24-ACCOUNTANT-PAYMENT",
        minValue: "2",
        maxValue: "100"
      },
      {
        title: "F24",
        functionCode: "F24-PAYMENT",
        minValue: "2",
        maxValue: "150"
      },
      {
        title: "Bonifico Italia",
        functionCode: "TRANSFER",
        minValue: "0",
        maxValue: "250"
      },
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "2",
        maxValue: "150"

      },
      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "2",
        maxValue: "200"
      },

      {
        title: "Bonifico SEPA",
        functionCode: "SEPA-TRANSFER",
        minValue: "2",
        maxValue: "150"
      }
    ],
    groupName: "My group",
    id: 123,
    minValue: "1",
    maxValue: "150",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      },

      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      },

      {
        userId: "09452W4295003",
        userInitials: "CD",
        fullName: "Clone Dispo"
      },

    ],
    warning: "In atessa che il gruppo di firma venga approvato dai master"
  },
  {
    functions: [
      {
        title: "MAV",
        functionCode: "MAV-SLIP",
        minValue: "1",
        maxValue: "10"
      },

      {
        title: "RAV",
        functionCode: "RAV-SLIP",
        minValue: "1",
        maxValue: "10"
      }

    ],
    groupName: "Group Name",
    id: 16,
    minValue: "1",
    maxValue: "10",
    users: [
      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      }
    ]
  },
  {
    functions: [
      {
        title: "Bonifico SEPA",
        functionCode: "SEPA-TRANSFER",
        minValue: "null",
        maxValue: "null"
      }
    ],
    groupName: "Gruppo firma Sepa Transfer",
    id: 71,
    minValue: "50000",
    maxValue: "100000",
    users: [
      {
        userId: "09452W4295001",
        userInitials: "EB",
        fullName: "Elisa Blu"
      },
      {
        userId: "09452W4295002",
        userInitials: "SN",
        fullName: "Sara Neri"
      }
    ],
    warning: "In atessa che il gruppo di firma venga approvato dai master"
  }
]
functions = [
  {
    function_code: " XML-SEPA-SALARY ",
    function_name: "Bonifico XML Stipendi"
  },
  {
    function_code: "EBILL",
    function_name: "EBILL"
  },
  {
    function_code: "XML-INTERNATIONAL-TRANSFER",
    function_name: "CBI_XML INTERNATIONAL TRANSFER"
  },
  {
    function_code: "XML-URGENT-TRANSFER",
    function_name: "Bonifico XML Urgente"
  },
  {
    function_code: "F24-PAYMENT",
    function_name: "F24"
  },
  {
    function_code: "RAV-SLIP",
    function_name: "RAV"
  },
  {
    function_code: "SEPA-TRANSFER",
    function_name: "Bonifico SEPA"
  },
  {
    function_code: "TRANSFER",
    function_name: "Bonifico Italia"
  },
  {
    function_code: "BANKBOOK-STATEMENT",
    function_name: "Bankbook statement"
  },
  {
    function_code: "MAV-SLIP",
    function_name: "MAV"
  },
  {
    function_code: "F24-ACCOUNTANT-PAYMENT",
    function_name: "F24 Accountant"
  },
  {
    function_code: "XML-SEPA-TRANSFER",
    function_name: "XML SEPA"
  }
]
users  = [
  {
    userId: "09452W4295001",
    fullName: "Elisa Blu"
  },
  {
    userId: "09452W4295002",
    fullName: "Sara Neri"
  },
  {
    userId: "09452W4295003",
    fullName: "Clone Dispo"

  },
  {
    userId: "09452W4295010",
    fullName: "Mario Rossi"
  },

  {
    userId: "09452W4295011",
    fullName: "Pinco Pallino"
  },
  {
    userId: "09452W4295012",
    fullName: "Titi Boom"
  },

  {
    userId: "39957125648321",
    fullName: "Roberto Carlos"
  },

  {
    userId: "0945231595011",
    fullName: "Pablo Escobaro"
  },

  {
    userId: "3658415713594sda",
    fullName: "Dominik Toretto"
  },

  {
    userId: "4re9a35s411564+41",
    fullName: "Paul Walker"
  }

]
