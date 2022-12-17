import { rest } from 'msw';
import { postGenerator } from './post-generator';

const posts = postGenerator();
export const handlers = [
	rest.get('/api/posts/:index1/:index2', (req, res, ctx) => {
		const { index1, index2 } = req.params;
		const result = [];
		for (let i = Number(index1); i < Number(index2); i++) {
			result.push(posts.next().value);
		}
		return res(ctx.status(200), ctx.json(result));
	}),
	rest.get('/api/posts/:id', (req, res, ctx) => {}),
];
