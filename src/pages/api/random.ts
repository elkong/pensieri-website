export const prerender = false;

import postUrls from '../../data/post-urls.json';
import { getRandomInt } from '../../utils/getRandomInt.ts';

export function GET() {

    const randomUrl = postUrls[getRandomInt(0, postUrls.length)];

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