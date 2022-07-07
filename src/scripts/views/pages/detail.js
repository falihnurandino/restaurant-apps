import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/resto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'
import FormReviewInitiator from '../../utils/form-review-initiator'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import FavoriteRestaurant from '../../data/favorite-resto-idb'

const Detail = {
  async render () {
    return `
        <section class="detail-resto">
          <div id='detail-posts'></div>
          <div id="formReviewContainer"></div>
          <div id="likeButtonContainer"></div>
        </section>
        `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const data = await RestaurantSource.getRestaurantDetail(url.id)
    const dataContainer = document.querySelector('#detail-posts')
    dataContainer.innerHTML += createRestoDetailTemplate(data)

    await FormReviewInitiator.init({
      formReviewContainer: document.querySelector('#formReviewContainer'),
      id: data.id
    })

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurant,
      data: {
        id: data.id,
        name: data.name,
        city: data.city,
        rating: data.rating,
        pictureId: data.pictureId,
        description: data.description
      }
    })
  }
}

export default Detail
