const createLikeButtonTemplate = () => `
    <button id="likeButton" aria-label="like this resto" class="btn-favorite">
        <i class="fal fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button id="likeButton" aria-label="unlike this resto" class="btn-favorite">
        <i class="fas fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
