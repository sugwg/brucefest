/**
 * ============================================================================
 * APPLICATION LOGIC — BRUCEFEST 2027 ("Gravity Across Scales")
 * ============================================================================
 */

(function () {
  "use strict";

  const config = window.CONFERENCE_CONFIG;
  if (!config) return;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 1. Masthead & Overview
  function renderMastheadAndOverview() {
    const { event, topics } = config;

    document.getElementById("hero-dates").textContent = event.datesDisplay;
    document.getElementById("hero-location").textContent = event.locationShort;
    document.getElementById("hero-title-main").textContent = event.title;
    document.getElementById("hero-subtitle").textContent = event.subtitle;
    document.getElementById("hero-dedication").textContent = event.dedication;

    const heroImg = document.getElementById("hero-image");
    if (heroImg && event.heroImage) heroImg.src = event.heroImage;

    const heroCap = document.getElementById("hero-caption");
    if (heroCap && event.heroCaption) heroCap.textContent = event.heroCaption;

    const proseEl = document.getElementById("overview-prose");
    if (proseEl && Array.isArray(event.overviewParagraphs)) {
      proseEl.innerHTML = event.overviewParagraphs
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
    }

    const topicsList = document.getElementById("topics-list");
    if (topicsList && Array.isArray(topics)) {
      topicsList.innerHTML = topics
        .map((t, idx) => {
          const num = String(idx + 1).padStart(2, "0");
          return `
            <li>
              <span class="topic-num">${num}</span>
              <span>${escapeHtml(t)}</span>
            </li>
          `;
        })
        .join("");
    }
  }

  // 2. Tribute to Bruce Allen
  function renderTribute() {
    const { tribute } = config;
    if (!tribute) return;

    document.getElementById("tribute-heading").textContent = tribute.heading;

    const img = document.getElementById("tribute-image");
    if (img && tribute.image) img.src = tribute.image;

    const cap = document.getElementById("tribute-caption");
    if (cap && tribute.imageCaption) cap.textContent = tribute.imageCaption;

    const prose = document.getElementById("tribute-prose");
    if (prose && Array.isArray(tribute.paragraphs)) {
      const paragraphsHtml = tribute.paragraphs
        .map((p) => `<p>${escapeHtml(p)}</p>`)
        .join("");
      const profileLinkHtml = tribute.profileUrl
        ? `<div class="editorial-links-row"><a href="${escapeHtml(tribute.profileUrl)}" class="editorial-link" target="_blank" rel="noopener">${escapeHtml(tribute.profileLabel || "Official Webpage")} →</a></div>`
        : "";
      prose.innerHTML = paragraphsHtml + profileLinkHtml;
    }
  }

  // 3. Invited Speakers
  function renderSpeakers() {
    const container = document.getElementById("speakers-container");
    const { speakers } = config;
    if (!container || !speakers) return;

    if (speakers.wip || !speakers.confirmedList || speakers.confirmedList.length === 0) {
      container.innerHTML = `<p class="status-note">${escapeHtml(speakers.wipText)}</p>`;
      return;
    }

    container.innerHTML = `
      <ul class="directory-grid">
        ${speakers.confirmedList
          .map(
            (sp) => `
            <li>
              <span class="dir-name">${escapeHtml(sp.name)}</span>
              <span class="dir-affil">${escapeHtml(sp.affiliation)}</span>
            </li>
          `
          )
          .join("")}
      </ul>
    `;
  }

  // 4. Program Table
  function renderSchedule() {
    const noteEl = document.getElementById("schedule-note");
    const tbody = document.getElementById("schedule-tbody");
    const { schedule } = config;
    if (!schedule) return;

    if (noteEl) {
      noteEl.textContent = schedule.wip ? schedule.wipText : "";
      noteEl.style.display = schedule.wip ? "block" : "none";
    }

    if (tbody && Array.isArray(schedule.sessions)) {
      tbody.innerHTML = schedule.sessions
        .map((s) => {
          const isTbdTopic = !s.topic || /tbd|to be determined/i.test(s.topic);
          const isTbdChair = !s.chair || /tbd|to be determined/i.test(s.chair);
          return `
            <tr>
              <td>${escapeHtml(s.sessionName)}</td>
              <td class="${isTbdTopic ? "td-muted" : ""}">${escapeHtml(s.topic || "To be determined")}</td>
              <td class="${isTbdChair ? "td-muted" : ""}">${escapeHtml(s.chair || "TBD")}</td>
            </tr>
          `;
        })
        .join("");
    }
  }

  // 5. Registration & Payment
  function renderRegistration() {
    const container = document.getElementById("registration-container");
    const { registration } = config;
    if (!container || !registration) return;

    const rowsHtml = (registration.rows || [])
      .map(
        (r) => `
        <div class="ledger-row">
          <span class="ledger-label">${escapeHtml(r.label)}</span>
          <span class="ledger-value">${escapeHtml(r.value)}</span>
        </div>
      `
      )
      .join("");

    const regLink = registration.registrationUrl
      ? `<a href="${escapeHtml(registration.registrationUrl)}" class="editorial-link" target="_blank" rel="noopener">${escapeHtml(registration.registrationLabel)} →</a>`
      : `<span class="editorial-link-inactive">${escapeHtml(registration.registrationLabel)}</span>`;

    const payLink = registration.paymentUrl
      ? `<a href="${escapeHtml(registration.paymentUrl)}" class="editorial-link" target="_blank" rel="noopener">${escapeHtml(registration.paymentLabel)} →</a>`
      : `<span class="editorial-link-inactive">${escapeHtml(registration.paymentLabel)}</span>`;

    container.innerHTML = `
      ${registration.wip ? `<p class="status-note">${escapeHtml(registration.wipText)}</p>` : ""}
      <div class="ledger-list">
        ${rowsHtml}
      </div>
      <div class="editorial-links-row">
        ${regLink}
        ${payLink}
      </div>
    `;
  }

  // 6. Venue & Travel
  function renderVenue() {
    const container = document.getElementById("venue-container");
    const { venueAndTravel } = config;
    if (!container || !venueAndTravel) return;

    const paragraphsHtml = (venueAndTravel.venueParagraphs || [])
      .map((p) => `<p>${escapeHtml(p)}</p>`)
      .join("");

    const linksHtml = `
      <div class="editorial-links-row" style="margin-bottom: 1.5rem;">
        ${
          venueAndTravel.venueUrl
            ? `<a href="${escapeHtml(venueAndTravel.venueUrl)}" class="editorial-link" target="_blank" rel="noopener">${escapeHtml(venueAndTravel.venueName || "Conference Hotel Website")} →</a>`
            : ""
        }
        ${
          venueAndTravel.islandMapUrl
            ? `<a href="${escapeHtml(venueAndTravel.islandMapUrl)}" class="editorial-link" target="_blank" rel="noopener">View Ischia on Google Maps →</a>`
            : ""
        }
      </div>
    `;

    const dirsHtml = (venueAndTravel.directions || [])
      .map(
        (d) => `
        <div class="direction-item">
          <h3 class="direction-title">${escapeHtml(d.title)}</h3>
          <p class="direction-text">${escapeHtml(d.text)}</p>
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <div class="editorial-prose">
        ${paragraphsHtml}
      </div>
      ${linksHtml}
      ${venueAndTravel.venueWipText ? `<p class="status-note">${escapeHtml(venueAndTravel.venueWipText)}</p>` : ""}
      <div class="directions-list">
        ${dirsHtml}
      </div>
    `;
  }

  // 7. Organizing Committee
  function renderCommittee() {
    const container = document.getElementById("committee-container");
    const { committees } = config;
    if (!container || !committees) return;

    const socHtml = (committees.soc || [])
      .map(
        (m) => `
        <li>
          <span class="dir-name">${escapeHtml(m.name)}</span>
          <span class="dir-affil">${escapeHtml(m.affiliation)}</span>
        </li>
      `
      )
      .join("");

    const coordHtml = (committees.coordination || [])
      .map(
        (c) => `
        <div class="coord-block">
          <div class="coord-role">${escapeHtml(c.role)}</div>
          <div class="dir-name">${escapeHtml(c.name)}</div>
          <div class="dir-affil">${escapeHtml(c.affiliation)}</div>
        </div>
      `
      )
      .join("");

    container.innerHTML = `
      <ul class="directory-grid">
        ${socHtml}
      </ul>
      ${coordHtml}
    `;
  }

  // 8. Direct Calendar Links (Google Calendar, Outlook, and iCal .ics)
  function setupCalendarLinks() {
    const { event } = config;
    const summary = `${event.title}: ${event.subtitle} (${event.shortName})`;
    const location = event.calendarLocation || event.locationShort;
    const description = `${event.dedication}. Venue: Hotel Continental Ischia (https://www.hotelcontinentalischia.it/en/). Website: ${event.siteUrl || "https://bruceallen.org/"}`;

    // Google Calendar URL
    const gcalLink = document.getElementById("gcal-link");
    if (gcalLink) {
      const gcalParams = new URLSearchParams({
        action: "TEMPLATE",
        text: summary,
        dates: `${event.startDateISO}/${event.endDateISO}`,
        details: description,
        location: location
      });
      gcalLink.href = `https://calendar.google.com/calendar/render?${gcalParams.toString()}`;
    }

    // Outlook / Microsoft 365 Web Calendar URL
    const outlookLink = document.getElementById("outlook-link");
    if (outlookLink) {
      const outlookParams = new URLSearchParams({
        path: "/calendar/action/compose",
        rru: "addevent",
        subject: summary,
        startdt: event.startDateHyphen || "2027-05-22",
        enddt: event.endDateHyphen || "2027-05-27",
        allday: "true",
        body: description,
        location: location
      });
      outlookLink.href = `https://outlook.office.com/calendar/0/deeplink/compose?${outlookParams.toString()}`;
    }

    // iCal (.ics) file download
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
          "UID:brucefest-2027-ischia@bruceallen.org",
          "DTSTAMP:20261109T120000Z",
          `DTSTART;VALUE=DATE:${event.startDateISO}`,
          `DTEND;VALUE=DATE:${event.endDateISO}`,
          `SUMMARY:${summary}`,
          `LOCATION:${location}`,
          `DESCRIPTION:${description}`,
          `URL:${event.siteUrl || "https://bruceallen.org/"}`,
          "END:VEVENT",
          "END:VCALENDAR"
        ];

        const blob = new Blob([icsLines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "BruceFest-2027-Ischia.ics";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }

  renderMastheadAndOverview();
  renderTribute();
  renderSpeakers();
  renderSchedule();
  renderRegistration();
  renderVenue();
  renderCommittee();
  setupCalendarLinks();
})();
