/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-resto-idb'
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestoContract'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (data) => {
      await FavoriteRestaurant.deleteRestaurant(data.id)
    })
  })

  itActsAsFavoriteRestaurantModel(FavoriteRestaurant)
})
