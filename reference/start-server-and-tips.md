```js
const startServer = () => {

  const app = express();

  /** Middlewarses :
   * functions which are passed control during execution of asynchronous functions
  */
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(express.static("public"));  // for serving static files


  /** Healthcheck :
   *  Check API is working */
  app.get("/ping", (req, res, next) =>
    res.status(200).json({ message: "pong" })
  );

  /** Error handling :
   * On accessing invalid router or other errors */
  app.use((req, res, next) => {
    const error = new Error("not found");

    return res.status(404).json({ message: error.message });
  });

  /** Routes :
   * Seperate file to handle the endpoints of the API */
  app.use("/", router);

  /** Start server :
   *  Start server on port <PORT_NUMBER> */
  app.listen(PORT_NUMBER, () => {
    console.log(`Server started on port ${PORT_NUMBER`);
  });
}
```
