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
                  .p-wrap { font-family: Georgia, serif; background: #FBE6E8; }
                  .p-hero {
                    background: #FBE6E8;
                    padding: 3rem 2rem 2.5rem;
                    text-align: center;
                    border-bottom: 1px solid #e0b8bc;
                  }
                  .p-hero-label {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: #9B5A62;
                    margin-bottom: 1rem;
                  }
                  .p-hero h1 {
                    font-size: 48px;
                    font-weight: normal;
                    color: #2A1F1F;
                    letter-spacing: -0.01em;
                    line-height: 1;
                    margin-bottom: 0.5rem;
                    font-family: Georgia, serif;
                  }
                  .p-hero-sub {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 14px;
                    color: #8B5A60;
                    font-weight: 300;
                    font-style: italic;
                  }
                  .p-list {
                    max-width: 820px;
                    margin: 0 auto;
                    padding: 2rem 1.5rem 4rem;
                  }
                  .p-year-divider {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                    color: #9B5A62;
                    padding: 1.75rem 0 0.6rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                  }
                  .p-year-divider::before { content: ''; width: 20px; height: 1px; background: #c9868e; }
                  .p-year-divider::after { content: ''; flex: 1; height: 1px; background: #c9868e; }
                  .p-item {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.25rem;
                    background: #fff;
                    border-radius: 6px;
                    border: 1px solid #EDD5D8;
                    text-decoration: none;
                    color: inherit;
                    margin-bottom: 0.5rem;
                    transition: border-color 0.15s;
                  }
                  .p-item:hover { border-color: #C07880; }
                  .p-item:hover .p-title { color: #8B4A52; }
                  .p-title {
                    font-size: 16px;
                    color: #2A1F1F;
                    font-weight: normal;
                    line-height: 1.35;
                    margin-bottom: 6px;
                    transition: color 0.12s;
                    font-family: Georgia, serif;
                  }
                  .p-meta { display: flex; align-items: center; gap: 10px; }
                  .p-source {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 10px;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #8B4A52;
                    background: #FBE6E8;
                    border: 1px solid #e0b8bc;
                    border-radius: 3px;
                    padding: 2px 7px;
                  }
                  .p-date {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    font-size: 12px;
                    color: #B09098;
                  }
                  .p-arrow {
                    font-size: 16px;
                    color: #D4A0A8;
                    transition: color 0.12s, transform 0.12s;
                  }
                  .p-item:hover .p-arrow { color: #8B4A52; transform: translate(2px, -2px); }
                </style>

                <div class="p-wrap">
                  <div class="p-hero">
                    <p class="p-hero-label">Amager Records i medierne</p>
                    <h1>Presse</h1>
                    <p class="p-hero-sub">Artikler og omtale gennem årene</p>
                  </div>
                  <div class="p-list">
                    <div class="p-year-divider">2026</div>
                    <a class="p-item" href="https://www.juicynet.dk/2026/02/13/til-jazz-paa-amager-paa-en-torsdag/" target="_blank" rel="noopener">
                      <div><div class="p-title">Til jazz på Amager på en torsdag</div><div class="p-meta"><span class="p-source">JuicyNet</span><span class="p-date">13. feb. 2026</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2025</div>
                    <a class="p-item" href="https://www.dr.dk/nyheder/kultur/et-ud-af-24-eksemplarer-rockgruppe-har-sendt-en-helt-saerlig-vinyl-til-dansk" target="_blank" rel="noopener">
                      <div><div class="p-title">Ét ud af 24 eksemplarer</div><div class="p-meta"><span class="p-source">DR Kultur</span><span class="p-date">19. maj 2025</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2024</div>
                    <a class="p-item" href="https://www.juicynet.dk/2024/01/12/musik-vinyler-og-kaffe-midt-paa-amager/" target="_blank" rel="noopener">
                      <div><div class="p-title">Musik, vinyler og kaffe midt på Amager</div><div class="p-meta"><span class="p-source">JuicyNet</span><span class="p-date">12. jan. 2024</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2023</div>
                    <a class="p-item" href="https://amagerliv.dk/amager/niels-sagde-jobbet-op-og-lejede-droemmelokalet-nu-aabner-han-saerlig-cafe-i-historisk-bygning-paa-amagerbrogade" target="_blank" rel="noopener">
                      <div><div class="p-title">Niels sagde jobbet op og lejede drømmelokalet</div><div class="p-meta"><span class="p-source">Amagerliv</span><span class="p-date">ca. 2023</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2021</div>
                    <a class="p-item" href="https://amagerliv.dk/amager/makkerpar-skilles-amager-records-dropper-nye-plader-og-bliver-ren-secondhand" target="_blank" rel="noopener">
                      <div><div class="p-title">Makkerpar skilles</div><div class="p-meta"><span class="p-source">Amagerliv</span><span class="p-date">3. maj 2021</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2020</div>
                    <a class="p-item" href="https://ugeavisen.dk/amager/hvis-man-vil-have-pladebutik-skal-man-eddermame-ville-det-100-procent" target="_blank" rel="noopener">
                      <div><div class="p-title">Hvis man vil have pladebutik skal man eddermame ville det 100 procent</div><div class="p-meta"><span class="p-source">Ugeavisen</span><span class="p-date">7. dec. 2020</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <div class="p-year-divider">2018</div>
                    <a class="p-item" href="https://ugeavisen.dk/amager/pladespillerne-paa-kirkegaardsvej-her-er-vinyl-blevet-en-landeplage" target="_blank" rel="noopener">
                      <div><div class="p-title">Pladespillerne på Kirkegårdsvej</div><div class="p-meta"><span class="p-source">Ugeavisen</span><span class="p-date">11. dec. 2018</span></div></div>
                      <div class="p-arrow">↗</div>
                    </a>
                    <a class="p-item" href="https://www.spottedbylocals.com/copenhagen/amager-records/" target="_blank" rel="noopener">
                      <div><div class="p-title">Amager Records — Music on vinyl</div><div class="p-meta"><span class="p-source">Spotted by Locals</span><span class="p-date">2018</span></div></div>
                      <div class="p-arrow">↗</div>
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
