import CONFIG from '../../globals/config'

const createRestoItemTemplate = (resto) => `
<article class="card">
    <a href="#/detail/${resto.id}" class="card-a-tag">
      <div class="card-thumbnail">
        <img class="lazyload card-image" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}">
        <p class="card-rating"><i class="fa-solid fa-star"></i>${resto.rating}</p>
          <p class="card-city"><i class="fa-solid fa-location-dot"></i>${resto.city}</p>
        </div>
        <div class="card-text-section">
          <h2 class="card-title">${resto.name}</h2>
          <p class="card-description">${resto.description}</p>
        </div>
        </a>
    </article>
`

const createRestoDetailTemplate = (data) => `
<div tabindex="0" class="restaurant-detail">
    <h2>${data.name}</h2>
    <div class="desc-content">
          <div class="thumbnail">
            <div class="resto-img">
              <img
                class="lazyload"
                data-src="${CONFIG.BASE_IMAGE_URL}${data.pictureId}"
                alt="restaurant ${data.name}">
            </div>
          </div>
          <p>${data.description}</p>
        </div>
        </div>
    <section class="info">
        <article tabindex="0" class="main-info">
          <h2>Informasi</h2>
          <h3>Alamat</h3>
          <p>${data.address}</p>
          <h3>Kota</h3>
          <p><i class="fa-solid fa-location-dot"></i>${data.city}</p>
          <h3>Rating</h3>
          <p><i class="fa-solid fa-star"></i>${data.rating}</p>
          <h3>Kategori Menu</h3>
            ${data.categories.map((category) => `<p class="resto-category-item" aria-label="category ${category.name}">${category.name}</p>`).join('')}
        </article>
        <article tabindex="0" class="resto-menus">
          <h2>Daftar Menu</h2>
          <div class="menus">
            <div>
              <h3>Makanan</h3>
                 ${data.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </div>
            <div>
              <h3>Minuman</h3>
             ${data.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </div>
          </div>
        </article>
      </section> 
    
    <div class="review">
      <h1 class="review-title" tabindex="0">Review Customer</h1>
      <div class="review-container">
       ${data.customerReviews.map((review) => `
        <div class="review-item" tabindex="0">
          <p class="review-name">${review.name}</p>
          <p class="review-comment">${review.review}</p>
          <p class="review-date">${review.date}</p>
        </div>`).join('')}
      </div>      
    </div>
   
`

const createFormReviewTemplate = () => `
  <form>
    <label for="inputName">Name</label>
    <input type="text" name="nama" class="inputName" id="inputName" placeholder="Enter your Name">
    <label for="inputReview">Review</label>
    <textarea name="review" class="inputReview" id="inputReview" placeholder="Enter your Reviews"></textarea>
    <button type="submit" aria-label="Submit review" class="btn-review">Submit</button>
  </form>
`

const createLikeButtonTemplate = () => `
  <button aria-label="add to favorite restaurant" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="delete from favorite restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFormReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
