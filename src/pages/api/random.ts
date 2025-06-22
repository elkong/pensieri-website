import { getCollection } from 'astro:content';
import { getPostParams } from '../../utils/postParams';
import { getRandomInt } from '../../utils/getRandomInt.ts';

export async function GET() {
    const posts = await getCollection('blog');

    const urls = posts.map(
        post => `/posts/${getPostParams(post).path}`
    )

    const randomUrl = urls[getRandomInt(0, urls.length)];

    return new Response(
        JSON.stringify({ url: randomUrl }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
}