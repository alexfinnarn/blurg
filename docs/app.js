import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export class HelloController extends Controller {
  static targets = [ "name" ]

  connect() {
    console.log('Hello Gerald!');
  }
}
