const data = require('../DATA.json')

const getRestaurants = () => {
    let post = '';
    data.restaurants.forEach(restaurant => {
    
        post += `
            <article class="resto-item">
                <a href="#"><img class="img-thumbnail" src="${restaurant.pictureId}" alt="thumbnail restoran"></a>

                <p class="city">${restaurant.city}</p>
                <span class="rating">${restaurant.rating}</span>
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

