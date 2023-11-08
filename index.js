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
    const templateTickets = await loadTemplate("./pages/tickets/tickets.html");

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
                document.getElementById("title").innerText = "EVENTS"
                document.getElementById("event-images").innerHTML = "<a href='https://www.place2book.com/da/sw2/sales/event_list/EM11444' target='_blank'> <div class='image-item'><img src='./images/events1.png' /></div> </a><a href='https://www.place2book.com/da/sw2/sales/event_list/EM11444' target='_blank'> <div class='image-item-2'><img src='./images/events2.png' /></div> </a><a href='https://www.place2book.com/da/sw2/sales/event_list/EM11444' target='_blank'> <div class='image-item'><img src='./images/events3.png' /></div> </a><a href='https://www.place2book.com/da/sw2/sales/event_list/EM11444' target='_blank'> <div class='image-item-2'><img src='./images/events4.png' /></div> </a>"
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("./images/bar2.png")`;
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.backgroundPosition = "center 65%";
            },
            "/about": () => {
                renderTemplate(templateAbout, "content")
                document.getElementById("title").innerHTML = "ÅBNINGSTIDER"
                document.getElementById("title").style.paddingTop = "0.5%"
                document.getElementById("title").style.paddingBottom = "2%"
                document.getElementById("opening-hours").innerHTML = "MANDAG-FREDAG: 11-17:30 <br>" +
                    "LØRDAG: 11-15 <br>" +
                    "SØNDAG: LUKKET <br>"
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("./images/about4.PNG")`
                document.getElementById("top-box").style.height = "15%";
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.backgroundPosition = "center 90%";
            },
            "/tickets": () => {
                renderTemplate(templateTickets, "content");
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
