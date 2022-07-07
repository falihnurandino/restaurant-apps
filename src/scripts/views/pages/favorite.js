import { createRestoItemTemplate } from '../templates/template-creator'
import FavoriteRestaurant from '../../data/favorite-resto-idb'

const Favorite = {
  async render () {
    return `
        <section class="container">
            <div class="content">
                <h2 tabindex="0" class="katalog-title">Favorite Restaurant</h2>
                <div class="katalog-resto" id="restaurant-list">
                </div>
            </div>
        </section>
        `
  },

  async afterRender () {
    const data = await FavoriteRestaurant.getAllRestaurants()
    const dataContainer = document.querySelector('#restaurant-list')
    if (data.legth === 0) {
      dataContainer.innerHTML = '<favorite-message></favorite-message>'
    }

    data.forEach((restaurant) => {
      dataContainer.innerHTML += createRestoItemTemplate(restaurant)
    })
  }
}

export default Favorite
