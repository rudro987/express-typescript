import express, { NextFunction, Request, Response } from "express";

const app = express();

//parsers

app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next();
}

app.get('/', logger, (req: Request, res: Response) => {
    res.send("Hello from tanvir's server!!");
});

// app.get('/:userId', (req: Request, res: Response) => {
//     console.log(req.params);
//     res.send("Hello from tanvir's server!!");
// });

// app.get('/', (req: Request, res: Response) => {
//     console.log(req.query);
//     res.send("Hello from tanvir's server!!");
// });


app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json({
        message: "Successfully received data"
    })
    
})

export default app;