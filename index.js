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
                <h2 class="mini-title">Second hand vinyl og pladebutik på Amager</h2>
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
                <h2 class="mini-title">Vi opkøber vinylplader og pladesamlinger</h2>
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
                <h2 class="mini-title">Pladebutik med kaffe, øl og vinbar</h2>
                <p class="info-text-right">
                    I Amager Records kan du også få god økologisk kaffe, øl og vin. <br><br>
                    Vi elsker, når du kommer forbi og hygger med dig selv eller en flok venner over en kop kaffe, en øl eller et glas vin - også selvom du ikke er typen, der hører plader til dagligt. Amager Records er for alle.
                </p>
            </div>
        </section>
        <section class="section-left">
            <div>
                <h2 class="mini-title-left">Events og intime koncerter hos Amager Records</h2>
                <p class="info-text-left">
                    Amager Records har etableret sig som en yderst aktiv musikscene på Amager for både etablerede kunstnere og nye talenter inden for de mange genrer. Alsidighed og "nysgerrighed" er kodeordene for de koncerter vi sætter op, så du er garanteret en god oplevelse i Amager Records intime rammer. Køb billet <a href="https://www.place2book.com/da/sw2/sales/event_list/EM11444" target='_blank'>her</a>. <br><br>
                    Hold øje på vores <a href="https://www.facebook.com/amagerrecords/" target='_blank'>facebook</a>, <a href="https://www.instagram.com/amagerrecords/" target='_blank'>instagram</a> og <a href="https://www.discogs.com/user/amagerrecords.dk" target='_blank'>discogs</a>.
                </p>
            </div>
            <div>
                <img class="img" src="./images/koncert.JPG" />
            </div>
        </section>
        <section id="faq" style="padding: 3rem 5vw; max-width: 900px; margin: 0 auto;">
          <h2 class="mini-title" style="margin-bottom: 1.5rem;">Ofte stillede spørgsmål</h2>
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq1">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody1" aria-expanded="false" aria-controls="faqBody1">Hvor ligger Amager Records, og hvornår er I åbne?</button>
              </h3>
              <div id="faqBody1" class="accordion-collapse collapse" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Amager Records ligger på Amagerbrogade 135, 2300 København S.<br><br><strong>Mandag:</strong> Lukket<br><strong>Tirsdag–fredag:</strong> 12–17:30<br><strong>Lørdag:</strong> 11–15<br><strong>Søndag:</strong> Lukket – i udgangspunktet, men vi holder jævnligt åbent alligevel. Hold øje med os på de sociale medier for hvornår det sker.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody2" aria-expanded="false" aria-controls="faqBody2">Sælger Amager Records nye eller kun brugte plader?</button>
              </h3>
              <div id="faqBody2" class="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Amager Records specialiserer sig i second hand vinyl. Alle plader er ultralydsrensede inden salg, så de fremstår så rene og flotte som muligt. En stor del af vores udvalg er også tilgængeligt på <a href="https://www.discogs.com/user/amagerrecords.dk" target="_blank">Discogs</a>.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody3" aria-expanded="false" aria-controls="faqBody3">Hvilke genrer finder man hos Amager Records?</button>
              </h3>
              <div id="faqBody3" class="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Hos Amager Records finder du second hand vinyl inden for rock, psych, jazz, soul, funk, indie, hiphop, metal og klassisk. Vi kuraterer udvalget hårdt, så der både er sjældenheder, klassikere og titler i alle prisklasser.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody4" aria-expanded="false" aria-controls="faqBody4">Hvad betaler Amager Records for en pladesamling?</button>
              </h3>
              <div id="faqBody4" class="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Vi opkøber plader i de fleste genrer og betaler ca. 25% af den vurderede salgspris kontant. Ønsker du i stedet at bytte til plader, giver vi ca. halvdelen af vores forventede salgspris i bytteværdi. Vi bruger god tid på at vurdere din samling, så du kan føle dig tryg i processen.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody5" aria-expanded="false" aria-controls="faqBody5">Hvad koster det at rense sine plader hos Amager Records?</button>
              </h3>
              <div id="faqBody5" class="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Vi tilbyder ultralydsrensning af vinyl til konkurrencedygtige priser. Kontakt os på <a href="mailto:info@amagerrecords.dk">info@amagerrecords.dk</a> eller ring på <a href="tel:+4553532300">+45 53 53 23 00</a> for aktuelle priser.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody6" aria-expanded="false" aria-controls="faqBody6">Hvilke typer koncerter og events holder Amager Records?</button>
              </h3>
              <div id="faqBody6" class="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Amager Records er en aktiv musikscene på Amager med koncerter inden for mange genrer – fra etablerede kunstnere til nye talenter. Vi lægger vægt på alsidighed og nysgerrighed, og alle events foregår i butikkens intime rammer. Billetter købes via vores hjemmeside.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="faq7">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqBody7" aria-expanded="false" aria-controls="faqBody7">Kan man få mad og drikke hos Amager Records?</button>
              </h3>
              <div id="faqBody7" class="accordion-collapse collapse" aria-labelledby="faq7" data-bs-parent="#faqAccordion">
                <div class="accordion-body">Ja – i Amager Records kan du få økologisk kaffe, øl, vand og vin. Vi er et sted for alle, uanset om du er pladenørd eller bare vil hygge med en kop kaffe eller en af vores egne lokalt bryggede fadøl.</div>
              </div>
            </div>
          </div>
        </section>
        <iframe style="width:100%; height:450px;" src="https://www.google.com/maps/embed?pb=!4v1757682547245!6m8!1m7!1sCAoSHENJQUJJaEQ2eVRybGNzRkY2NzQzVXIxUy1CWF8.!2m2!1d55.65665584420639!2d12.6093572634597!3f354.58659108101466!4f0.5823936828342653!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
                document.getElementById("title").innerHTML = `AMAGER RECORDS <p id="extra-content">SECOND HAND VINYL</p>`;
                document.getElementById("opening-hours").style.display = "none";
                document.getElementById("top-box").style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("./images/index.jpg")`;
                document.getElementById("top-box").style.backgroundSize = "cover";
                document.getElementById("top-box").style.height = "100vh";
                document.getElementById("top-box").style.backgroundPosition = "center";
                dataLayer.push({
                    event: 'virtualPageview',
                    pagePath: '/',
                    pageTitle: 'Home'
                });
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
                dataLayer.push({
                    event: 'virtualPageview',
                    pagePath: '/about',
                    pageTitle: 'About'
                });
            },
            "/presse": () => {
                document.getElementById("content").innerHTML = `
                <style>
                  .presse-hero {
                    background: #FBE6E8;
                    border-bottom: 1px solid #e8c8cb;
                    text-align: center;
                    padding: 3.5rem 1.5rem 3rem;
                  }
                  .presse-hero-eyebrow {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 11px;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #9B5A62;
                    margin-bottom: 0.75rem;
                  }
                  .presse-hero h1 {
                    font-size: 42px;
                    font-weight: normal;
                    letter-spacing: 0.02em;
                    color: #2A1F1F;
                    margin-bottom: 0.75rem;
                    line-height: 1.15;
                    font-family: Georgia, serif;
                  }
                  .presse-hero p {
                    font-size: 16px;
                    color: #6B4A4E;
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-weight: 300;
                  }
                  .presse-main {
                    max-width: 860px;
                    margin: 0 auto;
                    padding: 3rem 1.5rem 4rem;
                  }
                  .presse-year-group { margin-bottom: 3rem; }
                  .presse-year-label {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 11px;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: #9B5A62;
                    margin-bottom: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                  }
                  .presse-year-label::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: #e8c8cb;
                  }
                  .presse-card {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    background: #fff;
                    border: 1px solid #EDD5D8;
                    border-radius: 6px;
                    text-decoration: none;
                    color: inherit;
                    margin-bottom: 0.6rem;
                    transition: border-color 0.15s, box-shadow 0.15s;
                  }
                  .presse-card:hover {
                    border-color: #C07880;
                    box-shadow: 0 2px 12px rgba(176,100,108,0.08);
                  }
                  .presse-source {
                    flex-shrink: 0;
                    background: #FBE6E8;
                    border: 1px solid #e8c8cb;
                    border-radius: 4px;
                    padding: 5px 10px;
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 11px;
                    letter-spacing: 0.05em;
                    color: #8B4A52;
                    text-align: center;
                    min-width: 110px;
                  }
                  .presse-body { flex: 1; min-width: 0; }
                  .presse-title {
                    font-size: 16px;
                    font-weight: normal;
                    color: #2A1F1F;
                    line-height: 1.35;
                    margin-bottom: 4px;
                    font-family: Georgia, serif;
                  }
                  .presse-date {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 12px;
                    color: #9B7A7E;
                  }
                  .presse-arrow { flex-shrink: 0; color: #C07880; font-size: 20px; line-height: 1; }
                </style>

                <div class="presse-hero">
                  <p class="presse-hero-eyebrow">Amager Records i medierne</p>
                  <h1>Presse</h1>
                  <p>Et udvalg af artikler og omtale gennem årene</p>
                </div>

                <div class="presse-main">
                  <div class="presse-year-group">
                    <div class="presse-year-label">2026</div>
                    <a class="presse-card" href="https://www.juicynet.dk/2026/02/13/til-jazz-paa-amager-paa-en-torsdag/" target="_blank" rel="noopener">
                      <div class="presse-source">JuicyNet</div>
                      <div class="presse-body"><div class="presse-title">Til jazz på Amager på en torsdag</div><div class="presse-date">13. feb. 2026</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2025</div>
                    <a class="presse-card" href="https://www.dr.dk/nyheder/kultur/et-ud-af-24-eksemplarer-rockgruppe-har-sendt-en-helt-saerlig-vinyl-til-dansk" target="_blank" rel="noopener">
                      <div class="presse-source">DR Kultur</div>
                      <div class="presse-body"><div class="presse-title">Ét ud af 24 eksemplarer</div><div class="presse-date">19. maj 2025</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2024</div>
                    <a class="presse-card" href="https://www.juicynet.dk/2024/01/12/musik-vinyler-og-kaffe-midt-paa-amager/" target="_blank" rel="noopener">
                      <div class="presse-source">JuicyNet</div>
                      <div class="presse-body"><div class="presse-title">Musik, vinyler og kaffe midt på Amager</div><div class="presse-date">12. jan. 2024</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2023</div>
                    <a class="presse-card" href="https://amagerliv.dk/amager/niels-sagde-jobbet-op-og-lejede-droemmelokalet-nu-aabner-han-saerlig-cafe-i-historisk-bygning-paa-amagerbrogade" target="_blank" rel="noopener">
                      <div class="presse-source">Amagerliv</div>
                      <div class="presse-body"><div class="presse-title">Niels sagde jobbet op og lejede drømmelokalet</div><div class="presse-date">ca. 2023</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2021</div>
                    <a class="presse-card" href="https://amagerliv.dk/amager/makkerpar-skilles-amager-records-dropper-nye-plader-og-bliver-ren-secondhand" target="_blank" rel="noopener">
                      <div class="presse-source">Amagerliv</div>
                      <div class="presse-body"><div class="presse-title">Makkerpar skilles</div><div class="presse-date">3. maj 2021</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2020</div>
                    <a class="presse-card" href="https://ugeavisen.dk/amager/hvis-man-vil-have-pladebutik-skal-man-eddermame-ville-det-100-procent" target="_blank" rel="noopener">
                      <div class="presse-source">Ugeavisen</div>
                      <div class="presse-body"><div class="presse-title">Hvis man vil have pladebutik skal man eddermame ville det 100 procent</div><div class="presse-date">7. dec. 2020</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                  <div class="presse-year-group">
                    <div class="presse-year-label">2018</div>
                    <a class="presse-card" href="https://ugeavisen.dk/amager/pladespillerne-paa-kirkegaardsvej-her-er-vinyl-blevet-en-landeplage" target="_blank" rel="noopener">
                      <div class="presse-source">Ugeavisen</div>
                      <div class="presse-body"><div class="presse-title">Pladespillerne på Kirkegårdsvej</div><div class="presse-date">11. dec. 2018</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                    <a class="presse-card" href="https://www.spottedbylocals.com/copenhagen/amager-records/" target="_blank" rel="noopener">
                      <div class="presse-source">Spotted by Locals</div>
                      <div class="presse-body"><div class="presse-title">Amager Records — Music on vinyl</div><div class="presse-date">2018</div></div>
                      <div class="presse-arrow">↗</div>
                    </a>
                  </div>
                </div>`;
                document.getElementById("title").innerHTML = "";
                document.getElementById("opening-hours").style.display = "none";
                document.getElementById("top-box").style.backgroundImage = "none";
                document.getElementById("top-box").style.backgroundColor = "#FBE6E8";
                document.getElementById("top-box").style.height = "0";
                document.getElementById("top-box").style.padding = "0";
                dataLayer.push({
                    event: 'virtualPageview',
                    pagePath: '/presse',
                    pageTitle: 'Presse'
                });
            },
            "/tickets": () => {
                window.open("https://www.place2book.com/da/sw2/sales/event_list/EM11444", "_blank");
                dataLayer.push({
                    event: 'virtualPageview',
                    pagePath: '/tickets',
                    pageTitle: 'Tickets'
                });
            },
            "/webshop": () => {
                window.open("https://www.discogs.com/user/amagerrecords.dk", "_blank");
                dataLayer.push({
                    event: 'virtualPageview',
                    pagePath: '/webshop',
                    pageTitle: 'Webshop'
                });
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
