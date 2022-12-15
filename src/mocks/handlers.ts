import { rest } from "msw";

export const handlers = [
  rest.get("/api/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "First post",
          body: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          title: "Second post",
          body: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          title: "Third post",
          body: "Lorem ipsum dolor sit amet",
        },
        {
          id: 4,
          title: "Fourth post",
          body: "Lorem ipsum dolor sit amet",
        },
      ])
    );
  }),
  rest.get("/api/posts/:id", (req, res, ctx) => {}),
];
