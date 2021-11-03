import {Application, Controller} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

class HomepageController extends Controller {
  static targets = ['theater'];
  revealVideo() {
    this.theaterTarget.innerHTML = `    
    <div class="shadow-xl aspect-w-16 aspect-h-9 w-full">
      <iframe src="https://www.youtube.com/embed/Lze2TGk1t-g"
              title="YouTube video player"
              allowFullScreen></iframe>
    </div>`;
  }
}
window.Stimulus = Application.start();
Stimulus.register("homepage", HomepageController);
