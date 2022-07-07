import FavoriteRestaurant from '../../src/scripts/data/favorite-resto-idb'
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'

const createLikeButtonPresenterWithRestaurant = async (data) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurant,
    data
  })
}

export { createLikeButtonPresenterWithRestaurant }
