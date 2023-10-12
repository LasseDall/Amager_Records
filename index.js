//import "https://unpkg.com/navigo" //Will create the global Navigo object used below
import "./navigo_EditedByLars.js"; //Will create the global Navigo, with a few changes, object used below
//import "./navigo.min.js" //Will create the global Navigo object used below

import {
  setActiveLink,
  adjustForMissingHash,
  renderTemplate,
  loadTemplate,
} from "./utils.js";

window.addEventListener("load", async () => {
    const templateEvents = await loadTemplate("./pages/events/events.html");
    const templateAbout = await loadTemplate("./pages/about/about.html");

    adjustForMissingHash();

    const router = new Navigo("/", {hash: true});
    //Not especially nice, BUT MEANT to simplify things. Make the router global so it can be accessed from all js-files
    window.router = router;


    router
        .hooks({
            before(done, match) {
                setActiveLink("menu", match.url)
                done()
            }
        })
        .on({
            "/events": () => {
                renderTemplate(templateEvents, "content")
                document.getElementById("title").innerText = "Events"
                document.getElementById("event-images").innerHTML = "<div class='image-item'><img src='./images/events1.jpg' /></div> <div class='image-item-2'><img src='./images/events2.jpg' /></div> <div class='image-item'><img src='./images/events3.jpg' /></div> <div class='image-item-2'><img src='./images/events4.jpg' /></div>"
                document.getElementById("second-hand").style.display = "none"
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("./images/bar2.png")`;
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.backgroundPosition = "center 65%";
            },
            "/about": () => {
                renderTemplate(templateAbout, "content")
                document.getElementById("title").innerHTML = "<span class='margin'></span>" + "Åbningstider"
                document.getElementById("title").style.paddingTop = "0.5%"
                document.getElementById("second-hand").style.display = "block"
                document.getElementById("extra-content").innerHTML = "MANDAG-FREDAG: 11-17:30 <br>" +
                    "LØRDAG: 11-15 <br>" +
                    "SØNDAG: LUKKET <br>"
                document.getElementById("extra-content").style.textAlign = "center"
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("./images/about.JPG")`
                document.getElementById("top-box").style.height = "15%";
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.backgroundPosition = "center 80%";
            },
        })
        .notFound(() => {
        })
        .resolve()


    window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
        alert(
            "Error: " +
            errorMsg +
            " Script: " +
            url +
            " Line: " +
            lineNumber +
            " Column: " +
            column +
            " StackTrace: " +
            errorObj
        );
    };
});
