# Gravity Across Scales: From the Early Universe to SMBHs (BruceFest 2027)

Official conference website for **Gravity Across Scales: from the early Universe to SMBHs** — A Workshop Celebrating the Career of Prof. Bruce Allen (**22–26 May 2027, Ischia Island, Italy**).

## Hosting on GitHub Pages

This site is a zero-build, data-driven static website. No local build step or package installation is required:

1. Push this repository to GitHub.
2. In your GitHub repository, go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose `main` (or `master`) and `/ (root)`, and click **Save**.

## How to Update Speakers, Schedule, or Registration/Payment Links

All conference content is stored in [`config.js`](./config.js) so any member of the Organizing Committee can update it directly in the GitHub web interface:

1. **Add Confirmed Speakers**:
   Open `config.js`, locate the `speakers` section, set `wip: false`, and add speaker entries to `confirmedList`:
   ```js
   confirmedList: [
     { name: "Jane Doe", affiliation: "Max Planck Institute", topic: "Pulsar Timing Arrays" }
   ]
   ```

2. **Update Session Topics & Chairs**:
   Open `config.js`, locate the `schedule` section, and fill in `dayLabel`, `topic`, and `chair` for `Morning Session I`, `Afternoon Session I`, etc. Set `wip: false` when finalized.

3. **Activate External Registration & Payment Links**:
   Open `config.js`, locate the `registration` section, set `wip: false`, and paste the external URLs into `registrationUrl` and `paymentUrl`.
