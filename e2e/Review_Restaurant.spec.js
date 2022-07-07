/* eslint-disable no-undef */
const assert = require('assert')

Feature('Review Restaurants')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('review one restaurant', async ({ I }) => {
  I.seeElement('.katalog-resto')
  I.click(locate('.card .card-a-tag').first())

  I.seeElement('input#inputName')
  I.seeElement('textarea#inputReview')

  const name = 'falih'
  const review = 'tes review'

  I.seeElement('input#inputName')
  I.fillField('input#inputName', name)

  I.seeElement('textarea#inputReview')
  I.fillField('textarea#inputReview', review)

  I.click('.btn-review')
  I.seeElement('.review-container .review-item:nth-last-of-type(1)')

  const reviewerName = await I.grabTextFrom(locate('.review-container .review-item:nth-last-of-type(1) .review-name'))
  const reviewerReview = await I.grabTextFrom(locate('.review-container .review-item:nth-last-of-type(1) .review-comment'))

  assert.strictEqual(name, reviewerName)
  assert.strictEqual(review, reviewerReview)
})
