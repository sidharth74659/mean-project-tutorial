##### Mongoose Tutorial :

- [ ] Building a Model

1. Create an interface representing a document in MongoDB.

   ```js
   interface IEmployee {
     // for reusing the same interface for network and database
     name: string;
     age: number;
     position: string;
   }

   interface IEmployeeModel extends Model<IEmployee> {
     // for models(that contain _id,..) and
     //extra methods for querying or manipulating the data like :
     //findByName(name: string): IEmployee;
   }
   ```

2. Create a Schema corresponding to the document interface.

   ```js
   const EmployeeSchema: Schema = new Schema({
     name: { type: String, required: true },
     age: { type: Number, required: true },
     position: { type: String, required: true },
   });
   ```

3. Create a Model and export it.

   ```js
   const EmployeeModel: IEmployeeModel =
     model < IEmployeeModel > ("Employee", EmployeeSchema);
   ```
