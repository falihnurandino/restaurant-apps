/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteResto) => {
  it('should return the restaurant that has been added', async () => {
    favoriteResto.putRestaurant({ id: 1 })
    favoriteResto.putRestaurant({ id: 2 })

    expect(await favoriteResto.getRestaurant(1))
      .toEqual({ id: 1 })
    expect(await favoriteResto.getRestaurant(2))
      .toEqual({ id: 2 })
    expect(await favoriteResto.getRestaurant(3))
      .toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteResto.putRestaurant({ aProperty: 'property' })

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([])
  })

  it('can return all of te restaurant that have been added', async () => {
    favoriteResto.putRestaurant({ id: 1 })
    favoriteResto.putRestaurant({ id: 2 })

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should remove favorite restaurant', async () => {
    favoriteResto.putRestaurant({ id: 1 })
    favoriteResto.putRestaurant({ id: 2 })
    favoriteResto.putRestaurant({ id: 3 })

    await favoriteResto.deleteRestaurant(1)

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 }
      ])
  })

  it('should handle request to remove a restaurant ene though the restaurant has not been added', async () => {
    favoriteResto.putRestaurant({ id: 1 })
    favoriteResto.putRestaurant({ id: 2 })
    favoriteResto.putRestaurant({ id: 3 })

    await favoriteResto.deleteRestaurant(4)

    expect(await favoriteResto.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export { itActsAsFavoriteRestaurantModel }
