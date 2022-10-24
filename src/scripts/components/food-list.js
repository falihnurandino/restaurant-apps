import './food-item'

class FoodList extends HTMLElement {
  set foods (foods) {
    this._foods = foods
    this.render()
  }

  get foods () {
    return this._foods
  }

  render () {
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item')
      foodItemElement.classList('card')
      foodItemElement.food = food
      this.appendChild(foodItemElement)
    })
  }
}

customElements.define('food-list', FoodList)
