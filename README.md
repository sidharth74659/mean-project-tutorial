# mean-project-tutorial

- [ ] This project tutorial(or reference) :

  - [server](./reference/mongoose-tutorial.md)

- [ ] Folder Structure :

  ```
  - server
    | - src
      | - database.ts
      | - employee.routes.ts
      | - employee.ts
      | - server.ts

    | - tsconfig.json // enable ts-support for server
    | - .env  // to hold database credentials, port number and other sensitive data


  - client
  ```

    <!-- 
    | - config
    | - db
    | - lib
    | - public
    | - routes
    | - services
    | - views
   -->

- [ ] Dependencies :

  ```js
  "dependencies" :
      cors
      dotenv
      express
      mongodb

      <!-- TODO :
      mongoose
      nodemon
      passport
      monitor XHR requests
         -->

  "devDependencies" :
      typescript
      @types/cors
      @types/express
      @types/node
      ts-node

  "global" :
    // npm install -g
      @angular/cli
      ts-node
      nodemon
  ```

- [ ] Routes : `/employees`
  - [ ] `/view` : View all employees
  - [ ] `/add` : Add new employees
  - [ ] `/update` : Update existing employees

##### Helpful Links :

- [Using MongoDB](https://www.mongodb.com/languages/mean-stack-tutorial)

- [Using Mongoose](https://www.youtube.com/watch?v=72_5_YuDCNA)

- [Status Codes](https://umbraco.com/knowledge-base/http-status-codes/)
