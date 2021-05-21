const data = require('../DATA.json')

const getRestaurants = () => {
    let post = '';
    data.restaurants.forEach(restaurant => {
    
        post += `
            <article class="resto-item">
                <img class="img-thumbnail" src="${restaurant.pictureId}" alt="thumbnail restoran">

                <p class="city">${restaurant.city}</p>
                <span class="rating">5.0</span>
                <div class="content">
                    <h1 class="title"><strong><a href="#">${restaurant.name}</a></strong></h1>
                    <p class="description">${restaurant.description}</p>
                </div> 
            </article>
        `;
    
    })
    document.querySelector('#resto-lists').innerHTML = post
}

export default getRestaurants

