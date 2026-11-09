/**
 * ============================================================================
 * APPLICATION LOGIC — BRUCEFEST 2027 ("Gravity Across Scales")
 * ============================================================================
 */

(function () {
  "use strict";

  const config = window.CONFERENCE_CONFIG;
  if (!config) {
    console.error("CONFERENCE_CONFIG is missing. Check config.js.");
    return;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --------------------------------------------------------------------------
  // 1. RENDER TOP BANNER & HERO
  // --------------------------------------------------------------------------
  function renderHeroAndBanner() {
    const { event } = config;

    const bannerEl = document.getElementById("status-banner");
    if (event.statusBanner && event.statusBanner.enabled) {
      document.getElementById("banner-badge").textContent = event.statusBanner.badge;
      document.getElementById("banner-message").textContent = event.statusBanner.message;
    } else if (bannerEl) {
      bannerEl.style.display = "none";
    }

    document.getElementById("nav-short-name").textContent = event.shortName;
    document.getElementById("nav-title").textContent = event.title;
    document.getElementById("hero-honoree-badge").textContent = event.honoreeBadge;
    document.getElementById("hero-title-main").textContent = event.title;
    document.getElementById("hero-subtitle").textContent = event.subtitle;
    document.getElementById("hero-dates").textContent = event.datesDisplay;
    document.getElementById("hero-location").textContent = event.locationShort;

    const descContainer = document.getElementById("hero-description");
    if (descContainer && Array.isArray(event.description)) {
      descContainer.innerHTML = event.description
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
    }
  }

  // --------------------------------------------------------------------------
  // 2. RENDER EXACT HELLINGS–DOWNS CURVE + COSMIC VARIANCE BAND SVG
  // --------------------------------------------------------------------------
  function renderHellingsDownsPlot() {
    const svg = document.getElementById("hd-curve-svg");
    if (!svg) return;

    const width = 380;
    const height = 210;
    const padLeft = 42;
    const padRight = 18;
    const padTop = 18;
    const padBottom = 34;

    const plotW = width - padLeft - padRight;
    const plotH = height - padTop - padBottom;

    // y range: [-0.35, 0.65]
    const yMin = -0.35;
    const yMax = 0.65;

    const xToPx = (deg) => padLeft + (deg / 180) * plotW;
    const yToPx = (val) => padTop + ((yMax - val) / (yMax - yMin)) * plotH;

    // Exact Hellings-Downs function Gamma(theta)
    function hellingsDowns(deg) {
      if (deg <= 0.0001) return 0.5;
      const rad = (deg * Math.PI) / 180;
      const x = (1 - Math.cos(rad)) / 2;
      return 0.5 - 0.25 * x + 0.75 * x * Math.log(x);
    }

    // Approximate cosmic variance standard deviation envelope for visual representation
    function cosmicVarianceSigma(deg) {
      const rad = (deg * Math.PI) / 180;
      return 0.085 + 0.045 * Math.cos(rad) * Math.cos(rad);
    }

    const pointsMean = [];
    const pointsUpper = [];
    const pointsLower = [];

    for (let deg = 0; deg <= 180; deg += 2) {
      const mu = hellingsDowns(deg);
      const sig = cosmicVarianceSigma(deg);
      const px = xToPx(deg).toFixed(1);
      pointsMean.push(`${px},${yToPx(mu).toFixed(1)}`);
      pointsUpper.push(`${px},${yToPx(mu + sig).toFixed(1)}`);
      pointsLower.unshift(`${px},${yToPx(mu - sig).toFixed(1)}`);
    }

    const zeroY = yToPx(0).toFixed(1);
    const areaPoints = [...pointsUpper, ...pointsLower].join(" ");
    const meanPath = "M " + pointsMean.join(" L ");

    // Tick marks for 0, 45, 90, 135, 180 deg
    const xTicks = [0, 45, 90, 135, 180]
      .map((deg) => {
        const px = xToPx(deg).toFixed(1);
        return `
          <line x1="${px}" y1="${padTop}" x2="${px}" y2="${padTop + plotH}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
          <text x="${px}" y="${height - 10}" fill="rgba(255,255,255,0.6)" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="middle">${deg}°</text>
        `;
      })
      .join("");

    // Y ticks: -0.2, 0.0, 0.2, 0.5
    const yTicks = [-0.2, 0.0, 0.25, 0.5]
      .map((val) => {
        const py = yToPx(val).toFixed(1);
        return `
          <text x="${padLeft - 6}" y="${Number(py) + 3}" fill="rgba(255,255,255,0.55)" font-family="JetBrains Mono, monospace" font-size="9" text-anchor="end">${val.toFixed(2)}</text>
        `;
      })
      .join("");

    svg.innerHTML = `
      <defs>
        <linearGradient id="cvBand" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#e5a952" stop-opacity="0.28" />
          <stop offset="50%" stop-color="#e5a952" stop-opacity="0.16" />
          <stop offset="100%" stop-color="#e5a952" stop-opacity="0.26" />
        </linearGradient>
      </defs>

      <!-- Grid & Zero Line -->
      ${xTicks}
      ${yTicks}
      <line x1="${padLeft}" y1="${zeroY}" x2="${padLeft + plotW}" y2="${zeroY}" stroke="rgba(255,255,255,0.22)" stroke-dasharray="4 3" stroke-width="1" />
      <line x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${padTop + plotH}" stroke="rgba(255,255,255,0.25)" stroke-width="1" />
      <line x1="${padLeft}" y1="${padTop + plotH}" x2="${padLeft + plotW}" y2="${padTop + plotH}" stroke="rgba(255,255,255,0.25)" stroke-width="1" />

      <!-- Cosmic Variance Band -->
      <polygon points="${areaPoints}" fill="url(#cvBand)" />

      <!-- Hellings-Downs Mean Curve -->
      <path d="${meanPath}" fill="none" stroke="#f1c682" stroke-width="2.5" stroke-linecap="round" />

      <!-- Axis Labels -->
      <text x="${padLeft + plotW - 4}" y="${padTop + 14}" fill="#f1c682" font-family="JetBrains Mono, monospace" font-size="9.5" text-anchor="end">Hellings–Downs Γ(θ) ± σ_CV</text>
    `;
  }

  // --------------------------------------------------------------------------
  // 3. RENDER TOPICS GRID
  // --------------------------------------------------------------------------
  function renderTopics() {
    const grid = document.getElementById("topics-grid");
    if (!grid || !Array.isArray(config.topics)) return;

    grid.innerHTML = config.topics
      .map(
        (t) => `
        <article class="topic-card">
          <div>
            <div class="topic-meta">
              <span class="topic-category">${escapeHtml(t.category)}</span>
              <span class="topic-scale">${escapeHtml(t.scale)}</span>
            </div>
            <h3 class="topic-title">${escapeHtml(t.title)}</h3>
            <p class="topic-desc">${escapeHtml(t.description)}</p>
          </div>
        </article>
      `
      )
      .join("");
  }

  // --------------------------------------------------------------------------
  // 4. RENDER BRUCE ALLEN TRIBUTE
  // --------------------------------------------------------------------------
  function renderTribute() {
    const { tribute } = config;
    if (!tribute) return;

    document.getElementById("tribute-heading").textContent = tribute.heading;
    document.getElementById("tribute-lead").textContent = tribute.lead;

    const timeline = document.getElementById("tribute-timeline");
    if (timeline && Array.isArray(tribute.highlights)) {
      timeline.innerHTML = tribute.highlights
        .map(
          (item) => `
          <article class="tribute-card">
            <span class="tribute-era">${escapeHtml(item.era)}</span>
            <h3 class="tribute-card-title">${escapeHtml(item.title)}</h3>
            <p class="tribute-card-summary">${escapeHtml(item.summary)}</p>
          </article>
        `
        )
        .join("");
    }
  }

  // --------------------------------------------------------------------------
  // 5. RENDER SPEAKERS (WIP OR CONFIRMED LIST)
  // --------------------------------------------------------------------------
  function renderSpeakers() {
    const container = document.getElementById("speakers-container");
    const { speakers } = config;
    if (!container || !speakers) return;

    if (speakers.wip || !speakers.confirmedList || speakers.confirmedList.length === 0) {
      container.innerHTML = `
        <div class="wip-placeholder-card">
          <span class="wip-badge">⏳ ${escapeHtml(speakers.wipBadge || "Work in Progress")}</span>
          <h3 class="wip-title">${escapeHtml(speakers.wipTitle)}</h3>
          <p class="wip-message">${escapeHtml(speakers.wipMessage)}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="committee-grid">
        ${speakers.confirmedList
          .map(
            (sp) => `
            <article class="member-card">
              <h3 class="member-name">${escapeHtml(sp.name)}</h3>
              <p class="member-affil">${escapeHtml(sp.affiliation)}</p>
              ${sp.topic ? `<span class="topic-scale" style="display:inline-block;margin-top:0.5rem;">${escapeHtml(sp.topic)}</span>` : ""}
            </article>
          `
          )
          .join("")}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 6. RENDER SCHEDULE / SESSIONS (WIP BANNER + SESSIONS SKELETON)
  // --------------------------------------------------------------------------
  function renderSchedule() {
    const wipBanner = document.getElementById("schedule-wip-banner");
    const grid = document.getElementById("schedule-grid");
    const { schedule } = config;
    if (!schedule) return;

    if (wipBanner) {
      if (schedule.wip) {
        wipBanner.style.display = "flex";
        wipBanner.innerHTML = `
          <span class="wip-alert-icon" aria-hidden="true">⚠</span>
          <div class="wip-alert-content">
            <strong>${escapeHtml(schedule.wipBadge || "Program Under Construction")}</strong>
            <p>${escapeHtml(schedule.wipNote)}</p>
          </div>
        `;
      } else {
        wipBanner.style.display = "none";
      }
    }

    if (grid && Array.isArray(schedule.sessions)) {
      grid.innerHTML = schedule.sessions
        .map((s) => {
          const topicIsTbd = !s.topic || s.topic.toUpperCase() === "TBD";
          const chairIsTbd = !s.chair || s.chair.toUpperCase() === "TBD";
          return `
            <article class="session-card">
              <div class="session-header">
                <h3 class="session-name">${escapeHtml(s.sessionName)}</h3>
                <span class="session-day-tag">${escapeHtml(s.dayLabel || "Date TBD")}</span>
              </div>
              <div class="session-field">
                <span class="session-field-label">Topic:</span>
                <span class="session-field-value ${topicIsTbd ? "is-tbd" : ""}">
                  ${escapeHtml(s.topic || "To Be Determined")}
                </span>
              </div>
              <div class="session-field">
                <span class="session-field-label">Chair:</span>
                <span class="session-field-value ${chairIsTbd ? "is-tbd" : ""}">
                  ${escapeHtml(s.chair || "To Be Determined")}
                </span>
              </div>
            </article>
          `;
        })
        .join("");
    }
  }

  // --------------------------------------------------------------------------
  // 7. RENDER REGISTRATION & EXTERNAL PAYMENT PORTAL
  // --------------------------------------------------------------------------
  function renderRegistration() {
    const container = document.getElementById("registration-container");
    const { registration } = config;
    if (!container || !registration) return;

    const detailsHtml = (registration.details || [])
      .map(
        (d) => `
        <div class="reg-detail-item">
          <span class="reg-detail-label">${escapeHtml(d.label)}</span>
          <span class="reg-detail-value">${escapeHtml(d.value)}</span>
        </div>
      `
      )
      .join("");

    const regBtn = registration.registrationUrl
      ? `<a href="${escapeHtml(registration.registrationUrl)}" target="_blank" rel="noopener" class="btn btn-primary">${escapeHtml(registration.registrationButtonText)}</a>`
      : `<span class="btn btn-disabled-wip" aria-disabled="true">🔒 ${escapeHtml(registration.registrationButtonText)}</span>`;

    const payBtn = registration.paymentUrl
      ? `<a href="${escapeHtml(registration.paymentUrl)}" target="_blank" rel="noopener" class="btn btn-secondary">${escapeHtml(registration.paymentButtonText)}</a>`
      : `<span class="btn btn-disabled-wip" aria-disabled="true">🔒 ${escapeHtml(registration.paymentButtonText)}</span>`;

    container.innerHTML = `
      ${
        registration.wip
          ? `
        <div class="reg-wip-banner">
          <div class="reg-wip-text">
            <h3>⏳ ${escapeHtml(registration.wipBadge)}</h3>
            <p>${escapeHtml(registration.wipMessage)}</p>
          </div>
        </div>
      `
          : ""
      }
      <div class="reg-details-grid">
        ${detailsHtml}
      </div>
      <div class="reg-actions-row">
        ${regBtn}
        ${payBtn}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 8. RENDER VENUE & ISCHIA TRAVEL GUIDE
  // --------------------------------------------------------------------------
  function renderVenue() {
    const container = document.getElementById("venue-container");
    const { venueAndTravel } = config;
    if (!container || !venueAndTravel) return;

    const stepsHtml = (venueAndTravel.travelSteps || [])
      .map(
        (st) => `
        <div class="travel-step-card">
          <span class="travel-step-kicker">${escapeHtml(st.step)}</span>
          <h4 class="travel-step-title">${escapeHtml(st.title)}</h4>
          <p class="travel-step-desc">${escapeHtml(st.description)}</p>
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="venue-status-card">
        ${
          venueAndTravel.venueWip
            ? `<span class="wip-badge">⏳ ${escapeHtml(venueAndTravel.venueWipBadge)}</span>`
            : ""
        }
        <h3>${escapeHtml(venueAndTravel.venueName)}</h3>
        <p>${escapeHtml(venueAndTravel.venueDescription)}</p>
        <div class="hotel-note-box">
          <strong>Accommodation &amp; Hotel Block:</strong><br />
          ${escapeHtml(venueAndTravel.hotelBlockNote)}
        </div>
      </div>

      <div class="travel-steps-list">
        ${stepsHtml}
      </div>
    `;
  }

  // --------------------------------------------------------------------------
  // 9. RENDER ORGANIZING COMMITTEE
  // --------------------------------------------------------------------------
  function renderCommittee() {
    const container = document.getElementById("committee-container");
    const { committees } = config;
    if (!container || !committees) return;

    const socHtml = (committees.soc || [])
      .map(
        (m) => `
        <article class="member-card">
          <h3 class="member-name">${escapeHtml(m.name)}</h3>
          <p class="member-affil">${escapeHtml(m.affiliation)}</p>
        </article>
      `
      )
      .join("");

    const coordHtml = (committees.coordination || [])
      .map(
        (c) => `
        <div class="coordination-box">
          <div>
            <span class="coord-label">${escapeHtml(c.role)}</span>
            <h3 class="member-name">${escapeHtml(c.name)}</h3>
            <p class="member-affil">${escapeHtml(c.affiliation)}</p>
          </div>
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="committee-grid">
        ${socHtml}
      </div>
      ${coordHtml}
    `;
  }

  // --------------------------------------------------------------------------
  // 10. INTERACTIVE ACTIONS: .ICS DOWNLOAD, COPY SAVE-THE-DATE, MOBILE NAV
  // --------------------------------------------------------------------------
  function setupInteractions() {
    const { event } = config;

    // .ics Calendar download
    const icsBtn = document.getElementById("download-ics-btn");
    if (icsBtn) {
      icsBtn.addEventListener("click", () => {
        const icsLines = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//BruceFest 2027//Gravity Across Scales//EN",
          "CALSCALE:GREGORIAN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          "UID:brucefest-2027-ischia@aei.mpg.de",
          `DTSTAMP:20261109T120000Z`,
          `DTSTART;VALUE=DATE:${event.startDateISO}`,
          `DTEND;VALUE=DATE:${event.endDateISO}`,
          `SUMMARY:${event.title}: ${event.subtitle} (${event.shortName})`,
          `LOCATION:${event.locationShort}`,
          `DESCRIPTION:${event.honoreeBadge}. Dates: ${event.datesDisplay}. Location: ${event.locationShort}.`,
          "END:VEVENT",
          "END:VCALENDAR"
        ];

        const blob = new Blob([icsLines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "BruceFest-2027-Gravity-Across-Scales.ics";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    // Copy Save-the-Date summary
    const copyBtn = document.getElementById("copy-std-btn");
    const copyLabel = document.getElementById("copy-std-label");
    if (copyBtn && copyLabel) {
      copyBtn.addEventListener("click", async () => {
        const text = `${event.title}: ${event.subtitle}\n${event.honoreeBadge} (${event.shortName})\nDates: ${event.datesDisplay}\nLocation: ${event.locationShort}`;
        try {
          await navigator.clipboard.writeText(text);
          const original = copyLabel.textContent;
          copyLabel.textContent = "Copied to Clipboard!";
          setTimeout(() => {
            copyLabel.textContent = original;
          }, 2200);
        } catch (err) {
          console.error("Clipboard copy failed:", err);
        }
      });
    }

    // Mobile nav toggle
    const navToggle = document.getElementById("mobile-nav-toggle");
    const primaryNav = document.getElementById("primary-nav");
    if (navToggle && primaryNav) {
      navToggle.addEventListener("click", () => {
        const isOpen = primaryNav.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      primaryNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          primaryNav.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  // Initialize all
  renderHeroAndBanner();
  renderHellingsDownsPlot();
  renderTopics();
  renderTribute();
  renderSpeakers();
  renderSchedule();
  renderRegistration();
  renderVenue();
  renderCommittee();
  setupInteractions();
})();
