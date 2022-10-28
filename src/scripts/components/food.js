class Food extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
  <div class="food__container">
    <div class="food__list"></div>
  </div>`
  }
}

customElements.define('section-food', Food)
