import { rest } from "msw";
import { postGenerator } from "./post-generator";

const posts = postGenerator();
export const handlers = [
  rest.get("/api/posts", (req, res, ctx) => {
    const result = [];
    for (let i = 0; i < 20; i++) {
      result.push(posts.next().value);
    }
    return res(ctx.status(200), ctx.json(result));
  }),
  rest.get("/api/posts/:id", (req, res, ctx) => {}),
];
