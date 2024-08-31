import { Controller } from "@hotwired/stimulus"
import { put } from "@rails/request.js"

// Connects to data-controller="checkbox"
export default class extends Controller {
  
  static values = { url: String }
  async update(e) {
    e.preventDefault()
    let checkbox = e.target
    let checked = checkbox.checked
    console.log('Updating the Checkbox!') 
    await put(
      this.urlValue, {
        body: {
          completed: checked
        },
        responseKind: "turbo-stream"
      }
    )
  }
}
