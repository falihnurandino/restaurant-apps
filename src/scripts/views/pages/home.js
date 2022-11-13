import RestaurantSource from '../../data/resto-source'
import { createRestoItemTemplate, createMealItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
        <div tabindex="0" class="hero">
          <h2 class="greeting">Ayo kunjungi Restoran Terbaik di Indonesia</h2>
          <p class="tagline">Website terbaik yang menyajikan informasi lokasi restoran di Indonesia</p>
        </div>
        <section class="container">
            <div class="content">
                <h2 tabindex="0" class="katalog-title">Explore Restaurant</h2>
                <div class="katalog-resto" id="restaurant-list">
                </div>
                <h2 tabindex="0" class="katalog-title"> Recommended Food</h2>
               <section-food id="food-list"></section-food>
            </div>
        </section>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.getRestaurantList()

    const meals = await RestaurantSource.getListFood()

    const restaurantList = document.querySelector('#restaurant-list')
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestoItemTemplate(restaurant)
    })

    const mealList = document.querySelector('#food-list')
    meals.slice(-8).forEach((meal) => {
      mealList.innerHTML += createMealItemTemplate(meal)
    })
  }

}

export default Home
