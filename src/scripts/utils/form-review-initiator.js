import RestaurantSource from '../data/resto-source'
import { createFormReviewTemplate } from '../views/templates/template-creator'

const FormReviewInitiator = {
  async init ({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer
    this._id = id

    await this._renderForm()
  },

  async _renderForm () {
    this._formReviewContainer.innerHTML = createFormReviewTemplate()

    const btnReview = document.querySelector('.btn-review')

    btnReview.addEventListener('click', async () => {
      const inputName = document.querySelector('.inputName')
      const inputReview = document.querySelector('.inputReview')
      const form = document.querySelector('form')

      const reviewData = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value
      }

      if (inputName.value === '') {
        alert('Nama tidak boleh kosong!')
      } else if (inputReview.value === '') {
        alert('Review tidak boleh kosong!')
      } else {
        await RestaurantSource.postRestaurantReview(reviewData)
        form.reset()
      }
    })
  }

}

export default FormReviewInitiator
