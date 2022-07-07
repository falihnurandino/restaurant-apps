/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.katalog-resto')
  I.see('', '.katalog-resto')
})

Scenario('like and unlike a restaurant', async ({ I }) => {
  // like resto
  I.see('', '.katalog-resto')

  I.amOnPage('/')

  I.seeElement('.katalog-resto')

  const firstResto = locate('.card .card-a-tag').first()
  const firstRestoTitle = await I.grabTextFrom(locate('.card .card-title').first())
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.katalog-resto')

  const likeRestoTitle = await I.grabTextFrom(locate('.card .card-title').first())
  assert.strictEqual(firstRestoTitle, likeRestoTitle)

  // unlike resto
  I.amOnPage('/')

  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')

  I.see('', '.katalog-resto')
})
