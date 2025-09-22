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
                setActiveLink("menu", match.url);
                done();
            }
        })
        .on({
            "/": () => {
                document.getElementById("content").innerHTML = `     
            <section class="section-right">
            <div>
                <img class="img" src="./images/butik2.jpg" />
            </div>
            <div>
                <p class="info-text-top">
                    Amager Records handler med second hand vinyl og har et bredt udvalg inden for rock, psyche, jazz, soul/funk, indie, hiphop, metal og klassisk. <br>
                    Vi kuraterer vores udvalg hårdt, så hos os finder du både sjældenheder, gode klassikere og titler i alle genrer og prisklasser.
                    En del af vores titler er også til salg på <a href="https://www.discogs.com/user/amagerrecords.dk" target='_blank'>Discogs</a>.
                    Alle plader i butikken er ultralydsrensede, så de står så flotte og rene som overhovedet muligt. Vi renser også dine plader, hvis du har brug for det.
                </p>
            </div>
        </section>
        <section class="section-left">
            <div>
                <h1 class="mini-title">Køb</h1>
                <p class="info-text-køb">
                    Har du en pladesamling der står på loftet og samler støv?  Har du arvet en samling eller trænger du blot til at skifte ud i din egen samling, skal du ikke tøve med at komme til os. <br>
                    Vi opkøber plader i de fleste genrer og bruger god tid på at vurdere din samling. Det er vigtigt for os, at du kan føle dig tryg i processen og at vores bud bliver så fair som muligt.
                    Vi betaler ca. 25%  af den vurderede salgspris kontant. Ønsker du i stedet at bytte, er det til ca. halvdelen af vores forventede salgspris.
                </p>
            </div>
            <div>
                <img class="img" src="./images/køb.jpg" alt="" />
            </div>
        </section>
        <section class="section-right">
            <div>
                <img class="img" src="./images/øl.jpeg" />
            </div>
            <div>
                <h1 class="mini-title">Kaffe, øl og vinbar</h1>
                <p class="info-text-right">
                    I Amager Records kan du også få god økologisk kaffe, øl og vin. <br><br>
                    Vi elsker, når du kommer forbi og hygger med dig selv eller en flok venner over en kop kaffe, en øl eller et glas vin - også selvom du ikke er typen, der hører plader til dagligt. Amager Records er for alle.
                </p>
            </div>
        </section>
        <section class="section-left">
            <div>
                <h1 class="mini-title-left">Events</h1>
                <p class="info-text-left">
                    Amager Records har etableret sig som en yderst aktiv musikscene på Amager for både etablerede kunstnere og nye talenter inden for de mange genrer. Alsidighed og "nysgerrighed" er kodeordene for de koncerter vi sætter op, så du er garanteret en god oplevelse i Amager Records intime rammer. Køb billet <a href="https://www.place2book.com/da/sw2/sales/event_list/EM11444" target='_blank'>her</a>. <br><br>
                    Hold øje på vores <a href="https://www.facebook.com/amagerrecords/" target='_blank'>facebook</a>, <a href="https://www.instagram.com/amagerrecords/" target='_blank'>instagram</a> og <a href="https://www.discogs.com/user/amagerrecords.dk" target='_blank'>discogs</a>.

                </p>
            </div>
            <div>
                <img class="img" src="./images/koncert.JPG" />
            </div>
            
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1757682547245!6m8!1m7!1sCAoSHENJQUJJaEQ2eVRybGNzRkY2NzQzVXIxUy1CWF8.!2m2!1d55.65665584420639!2d12.6093572634597!3f354.58659108101466!4f0.5823936828342653!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById("title").innerHTML = `AMAGER RECORDS <p id="extra-content">SECOND HAND VINYL</p>`;
                document.getElementById("opening-hours").style.display = "none";
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("./images/index.jpg")`;
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.height = "100vh";
                document.getElementById("top-box").style.backgroundPosition = "center";
            },
            "/about": () => {
                renderTemplate(templateAbout, "content")
                document.getElementById("title").innerHTML = "ÅBNINGSTIDER"
                document.getElementById("opening-hours").style.display = "block"
                document.getElementById("title").style.paddingTop = "0.5%"
                document.getElementById("title").style.paddingBottom = "1%"
                document.getElementById("opening-hours").innerHTML = "MANDAG: LUKKET <br>" +
                    "TIRSDAG-FREDAG: 12-17:30 <br>" +
                    "LØRDAG: 11-15 <br>" +
                    "SØNDAG: LUKKET <br>"
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url("./images/Butik.jpeg")`
                document.getElementById("top-box").style.height = "15%";
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.height = "110vh";
                document.getElementById("top-box").style.backgroundPosition = "center 90%";
            },
            "/tickets": () => {
                window.open("https://www.place2book.com/da/sw2/sales/event_list/EM11444", "_blank");
            },
            "/webshop": () => {
                window.open("https://www.discogs.com/user/amagerrecords.dk", "_blank");
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

        const menuLinks = document.querySelectorAll('#menu .nav-link');

        menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {

            const navbarNav = document.getElementById('navbarNav');

            if (navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
            }
        });
    });
});
