import type { CollectionEntry } from "astro:content";

export function comparePostsByDate(
    a: CollectionEntry<'blog'>,
    b: CollectionEntry<'blog'>
) {
    const dateDifference = b.data.pubDate.getTime() - a.data.pubDate.getTime();

    if (dateDifference != 0) {
        return dateDifference;
    } else {
        return a.data.ordering - b.data.ordering;
    }
}