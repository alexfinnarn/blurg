import {Application, Controller} from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

class HomepageController extends Controller {
  static targets = ['theater'];

  revealSadness() {
    this.theaterTarget.innerHTML = `    
    <div class="shadow-xl w-full h-full">
      <iframe src="https://www.youtube.com/embed/tRBDMMVctu8"
              title="Foo"
              width="100%"
              height="100%"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>`;
  }
}

window.Stimulus = Application.start();
Stimulus.register("homepage", HomepageController);
