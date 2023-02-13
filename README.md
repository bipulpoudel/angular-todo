Angular todo app with MS translation
====================================

This is an Angular Todo App developed using TypeScript, Angular-Material UI, Postgres, and MS AI Translation. This app allows users to add items to their to-do list and translate them using Microsoft AI Translation.

Source for the content app running at: https://angular-todo-sand.vercel.app/

Features
--------

- User authentication (signup and login)
- Adding items to to-do list
- Translating items using Microsoft AI Translation
- Deleting the todo
- Admin UI to view all users and their usage history

Frontend folder structure:
--------------------------
The frontend part of this project is structured in the following way:

```
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components
│   │   ├── All the component list out here
│   ├── guards
│   │   ├── All the guards for authentication and authorization
│   ├── interceptors
│   │   └── All the interceptors
│   ├── interfaces
│   │   ├── All the typescript interfaces used in app
│   ├── material.module.ts
│   ├── pages
│   │   ├── All the pages components
│   └── services
│       ├── All the services for callin the backend api
|
├── environments
    ├── environment.prod.ts
    └── environments.ts
```

The directory structure has the following components:

- app-routing.module.ts: This is the main routing module file responsible for setting up the routes in the application.

- app.component.html, app.component.spec.ts, app.component.ts: These are the main component files for the application. The HTML file is the template file, the spec.ts is the test file, and the ts file is the component implementation file.

- app.module.ts: This is the main module file for the application, which brings together all the different components and modules used in the application.

- components: This folder contains subfolders for different UI components used in the application. Each subfolder contains the HTML, scss, spec.ts and ts   files for a specific component.

- guards: This folder contains the guard files, which are responsible for handling access control for different routes in the application.

- interceptors: This folder contains the interceptor files, which act as middleware and handle HTTP requests and responses.

- interfaces: This folder contains the interface files that define the types and structures used in the application.

- material.module.ts: This file is responsible for setting up the material design library used in the application.

- pages: This folder contains subfolders for different pages in the application. Each subfolder contains the HTML, scss, spec.ts and ts files for a     specific page.

- services: This folder contains subfolders for different services used in the application. Each subfolder contains the service implementation files.

Backend folder structure:
------------------------
The backend part of this project is structured in the following way:

```
.
├── config
│   └── config files
├── controllers
│   └── controllers files
├── entity
│   └── entities files
├── interfaces
│   └── interfaces files
├── middlewares
│   └── middlewares files
├── routes
│   └── route files
└── utils
    └── utils file
```

The structure has the following folders:

- config: This folder contains configuration files related to the database and data source.

- controllers: This folder contains the controller files responsible for handling incoming requests, processing and returning appropriate responses. 

- entity: This folder contains the entity files that define the data model for the application.

- interfaces: This folder contains the interface files defining the types and structure of data used in the application. 

- middlewares: This folder contains the middleware files, which act as filters for incoming requests, processing and forwarding them to the appropriate --   controllers. 

- routes: This folder contains the route files that define the routes for different parts of the application. 

- utils: This folder contains the utility files that provide helper functions for the application.

This directory structure follows a modular approach and separates the application into different components, making it easier to maintain and extend.



Running the App
---------------

- Clone the repository: 
  
  ```
  git clone https://github.com/bipulpoudel/angular-todo.git

  ```

- Go to frontend & backend folder and install dependencies:

   ```
   cd frontend
   npm install
        
   cd backend
   npm install
   ```
   
- Add env files for backend:

    Create a Postgres database and update the database URL in the environment files
    Obtain a Microsoft AI Translation API Key and update it in the environment files

    Update the following environment variables in the environment files

    ```
    PORT=9000
    NODE_ENV="development"
    
    JWT_SECRET=""
    ```

    Microsoft AI Translation API Key

    ```
    TRANSLATOR_TEXT_SUBSCRIPTION_KEY=""
    TRANSLATOR_TEXT_ENDPOINT=""
    TRANSLATOR_TEXT_LOCATION=""
    ```

- Open frontend terminal:
    
    ```
    cd frontend

    ```
    
    Serve frontend:

    ```
    ng serve

    ```
    
- Open backend terminal:
    
    ```
    cd backend

    ```
    
    Serve frontend:

    ```
    npm run dev

    ```
   
Open the app in your browser at http://localhost:4200/
