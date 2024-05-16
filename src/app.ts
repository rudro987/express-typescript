import express, { NextFunction, Request, Response } from "express";

const app = express();

//parsers

app.use(express.json());

//router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello from tanvir server!!");
});

// app.get('/:userId', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send("Hello from tanvir's server!!");
// });

// app.get('/', (req: Request, res: Response) => {
//     console.log(req.query);
//     res.send("Hello from tanvir's server!!");
// });

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data",
  });
});

export default app;
