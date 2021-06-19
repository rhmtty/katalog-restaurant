import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
    <article class="resto-item">
        <a href="/#/detail/${resto.id}"><img class="img-thumbnail" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}"></a>

        <p class="city">${resto.city}</p>
        <span class="rating">${resto.rating}</span>
        <div class="content">
            <h1 class="title"><strong><a href="/#/detail/${resto.id}">${resto.name}</a></strong></h1>
            <p class="description">${resto.description}</p>
        </div>
    </article>
`;

const createRestoDetailTemplate = (resto) => `
    <img src="${resto.restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId : './images/heros/hero-image_2.jpg'}" alt="${resto.restaurant.name}">
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
