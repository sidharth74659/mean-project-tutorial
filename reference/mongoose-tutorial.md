Mongoose Tutorial :

- [ ] Connect to DB

1.  Create a connection to the database.

    ```js
    const uri = "mongodb://localhost:27017/employees";
    const mongoose = require("mongoose");
    ```

2.  Connect to the database.

    ```js
    await mongoose.connect(uri);
    ```

    2.1. On Error:

    ```js
    console.error(err);
    ```

    2.2. [On Success](./start-server-and-tips.md):

    ```js
    console.log("Connected to MongoDB");

    startServer();  // Visit ./start-server-and-tips.md
    ```

3.  [Create a Model and export it](./building-a-model-with-mongoose.md).

    ```js
    const EmployeeModel: IEmployeeModel =
      model < IEmployeeModel > ("Employee", EmployeeSchema);
    ```

<!-- 4.  Create a new document.

    ```js
    const employee = new EmployeeModel({
      name: "John",
      age: 30,
      position: "developer",
    });
    ```

5.  Save the document.

    ```js
    await employee.save();
    ```

6.  Find all documents.

    ```js
    const employees = await EmployeeModel.find();
    ```

7.  Find a document by id.

    ```js
    const employee = await EmployeeModel.findById(id);
    ``` -->
