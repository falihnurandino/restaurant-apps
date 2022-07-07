/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-resto-idb'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unlike a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestaurant.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(1)
  })

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="delete from favorite restaurant"]'))
      .toBeTruthy()
  })

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="add to favorite restaurant"]'))
      .toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    document.querySelector('[aria-label="delete from favorite restaurant"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurant.getAllRestaurants())
      .toEqual([])
  })

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    await FavoriteRestaurant.deleteRestaurant(1)
    document.querySelector('[aria-label="delete from favorite restaurant"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestaurant.getAllRestaurants())
      .toEqual([])
  })
})
