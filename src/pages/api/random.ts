export const prerender = false;

import { getCollection } from 'astro:content';
import { getPostParams } from '../../utils/postParams.ts';
import { getRandomInt } from '../../utils/getRandomInt.ts';

// let cachedUrls: string[] | undefined;

export async function GET() {

    // if (!cachedUrls) {
    //     const posts = await getCollection('blog');

    //     const urls = posts.map(
    //         post => `/posts/${getPostParams(post).path}`
    //     )
    // }

    // const urls = cachedUrls!;

    const posts = await getCollection('blog');

    const urls = posts.map(
        post => `/posts/${getPostParams(post).path}`
    )    

    const randomUrl = urls[getRandomInt(0, urls.length)];

    return new Response(
        JSON.stringify({ 
            url: randomUrl,
            // timestamp: new Date().toISOString(),
        }),
        {
            headers: { 
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store',
            }
        }
    );
}