import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.resolve('./src/blog');
const OUT_FILE = path.resolve('./src/data/post-urls.json');

function getPostUrls(): string[] {
    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
    return files.map(file => {
        const fullPath = path.join(POSTS_DIR, file);
        const raw = fs.readFileSync(fullPath, 'utf-8');
        const { data } = matter(raw);

        const pubDate = data.pubDate.toISOString();
        const year = pubDate.slice(0, 4);
        const month = pubDate.slice(5, 7);
        const day = pubDate.slice(8, 10);
        return `/posts/${year}/${month}/${day}/${data.slug}`;
    });
}


function main() {
    const urls = getPostUrls();

    fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
    fs.writeFileSync(OUT_FILE, JSON.stringify(urls, null, 2), 'utf-8');
}

main();