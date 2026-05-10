import './styles.css';

const reviews = [
  {
    name: 'Frank',
    service: 'Stage 2 Tuning',
    text:
      'Ik heb onlangs een Stage 2 tuning laten doen bij KV Tuned en ben echt onder de indruk van het resultaat. De prestaties van mijn auto zijn aanzienlijk verbeterd en de klantenservice was uitstekend.',
  },
  {
    name: 'Danny',
    service: 'OBD Tuning',
    text:
      'Mijn auto loopt nu soepeler en is zuiniger. De prijs was heel redelijk en de technici waren zeer kundig en vriendelijk. Ik zal zeker terugkomen voor toekomstige upgrades.',
  },
  {
    name: 'Rachid',
    service: 'BDM Tuning',
    text:
      'De BDM tuning heeft mijn auto getransformeerd. De toename in kracht is duidelijk voelbaar en de algehele rijervaring is veel aangenamer geworden.',
  },
];

const services = [
  'Tuning Stage 1',
  'Tuning Stage 2',
  'Tuning Stage 3',
  'DSG / S-tronic',
  'DPF / OPF Off',
  'AdBlue Off',
  'Pops and Bang',
  'Rev Limit Off',
  'Vmax Off',
];

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <a class="brand" href="#hero" aria-label="KV Tuned home">
        <span class="brand-text">
          <strong>Gasssdropppp</strong>
          <small>Rekentool & tuning</small>
        </span>
      </a>

      <nav class="nav" aria-label="Hoofdmenu">
        <a href="#diensten">Diensten</a>
        <a href="#rekentool">Rekentool</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="cta-button" href="https://api.whatsapp.com/send?phone=+31654122801" target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>

    <main>
      <section class="hero" id="hero">
        <div class="hero-copy">
          <p class="eyebrow">Kevin Veen - Tuned</p>
          <h1>Bekijk direct wat voor winst er behaald kan worden bij uw auto.</h1>
          <p class="lead">
            Gebruik de rekentool om snel inzicht te krijgen in de mogelijkheden voor jouw auto.
            Daarna plannen we samen de juiste tuning of software-optimalisatie.
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="#rekentool">Open rekentool</a>
            <a class="secondary-action" href="#contact">Neem contact op</a>
          </div>
        </div>

        <div class="hero-card">
          <div class="hero-metric">
            <span>Snelle reactie</span>
            <strong>WhatsApp binnen bereik</strong>
          </div>
          <div class="hero-metric">
            <span>Focus</span>
            <strong>Meer vermogen, soepel rijden</strong>
          </div>
          <div class="hero-metric">
            <span>Locatie</span>
            <strong>Ambachtsweg 5L, Oosthuizen</strong>
          </div>
        </div>
      </section>

      <section class="panel" id="rekentool">
        <div class="section-heading">
          <p class="eyebrow">Rekentool</p>
          <h2>Bereken je potentieel</h2>
          <p>
            De calculator hieronder gebruikt de externe API van Fast Chiptuning Files.
          </p>
        </div>

        <div class="iframe-shell">
          <iframe
            id="tuningIframe"
            title="KV Tuned rekentool"
            src="https://fast-chiptuningfiles.com/api/car-iframe/?token=8.6b8b9324d2605bb9d3110e66e74a6446df6d3f5867c93b830443f06cde212c32"
            loading="lazy"
            scrolling="yes"
          ></iframe>
        </div>
      </section>

      <section class="panel" id="diensten">
        <div class="section-heading compact">
          <p class="eyebrow">Diensten</p>
          <h2>Ondersteunde tuningopties</h2>
        </div>
        <div class="service-grid">
          ${services
            .map(
              (service) => `
                <article class="service-card">
                  <span>${service}</span>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="panel" id="reviews">
        <div class="section-heading">
          <p class="eyebrow">Reviews</p>
          <h2>Wat zeggen anderen?</h2>
          <p>Lees hier onze reviews. Heb je zelf feedback? Mail ons via het contactgedeelte.</p>
        </div>

        <div class="review-grid">
          ${reviews
            .map(
              (review) => `
                <article class="review-card">
                  <p class="review-text">${review.text}</p>
                  <div class="review-meta">
                    <strong>${review.name}</strong>
                    <span>${review.service}</span>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="cta-band">
        <p>Kies vandaag nog voor een vernieuwde rijervaring en word opnieuw verliefd op jouw auto.</p>
      </section>
    </main>

    <footer class="footer" id="contact">
      <div>
        <h3>Contact</h3>
        <ul>
          <li>Ambachtsweg 5L, Oosthuizen</li>
          <li><a href="https://api.whatsapp.com/send?phone=+31654122801" target="_blank" rel="noreferrer">WhatsApp contact</a></li>
          <li><a href="mailto:infokvtuned@gmail.com">infokvtuned@gmail.com</a></li>
        </ul>
      </div>

      <div>
        <h3>Openingstijden</h3>
        <ul>
          <li>Maandag t/m vrijdag: 17:30 - 22:00</li>
          <li>Zaterdag: 09:00 - 17:00</li>
          <li>Zondag op afspraak</li>
        </ul>
      </div>

      <div>
        <h3>Snelkoppelingen</h3>
        <ul>
          <li><a href="#diensten">Diensten</a></li>
          <li><a href="#rekentool">Rekentool</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </div>
    </footer>
  </div>
`;

window.addEventListener('message', (event) => {
  if (event.origin !== 'https://fast-chiptuningfiles.com') return;

  const data = event.data;
  if (typeof data === 'object' && data && data.type === 'resize' && data.height) {
    const iframe = document.getElementById('tuningIframe');
    if (iframe) {
      iframe.style.height = `${data.height}px`;
    }
  }
});
