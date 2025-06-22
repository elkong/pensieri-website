import { getPostParams } from '../utils/postParams';
import { getRandomInt } from '../utils/getRandomInt';

export default function GetRandomPost(posts) {
    const randomPost = posts[getRandomInt(0, posts.length)];
    const randomPostPath = getPostParams(randomPost).path;

    return (
        <div class="random-post">
            <div class="nav-link blog-button">
                <a href={`/posts/${randomPostPath}/`}>Random Post</a>
            </div>
        </div>
    )
}