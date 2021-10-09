import {Application, Controller} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

class HomepageController extends Controller {
  static targets = ['theater'];
  revealSadness() {
    this.theaterTarget.innerHTML = `    
    <div class="shadow-xl w-full h-full">
      <iframe src="https://www.youtube.com/embed/tRBDMMVctu8"
              title="The factory of sadness"
              allowFullScreen></iframe>
    </div>`;
  }
}
window.Stimulus = Application.start();
Stimulus.register("homepage", HomepageController);
