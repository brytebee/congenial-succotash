import { Request, Response } from "express";

const Home = (req: Request, res: Response) => {
  res.send(`
      <div>
        <h1>Welcome to my website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    `);
};

export default Home;
