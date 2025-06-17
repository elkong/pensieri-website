import type { CollectionEntry } from "astro:content";

export function getPostParams(post: CollectionEntry<'blog'>) {
    const pubDate = post.data.pubDate.toISOString().slice(0, 10);

    const pubYear = pubDate.slice(0, 4);
    const pubMonth = pubDate.slice(5, 7);
    const pubDay = pubDate.slice(8, 10);

    const slug = post.data.slug;

    const path = `${pubYear}/${pubMonth}/${pubDay}/${slug}`;

    return {
        year: pubYear,
        month: pubMonth,
        day: pubDay,
        path,
        slug
    };
}