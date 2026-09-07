customElements.define('site-footer', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <span>&copy; 2026 Long Ago Studios</span>
      <span class="socials">
        <a href="https://www.youtube.com/@LongAgoStudios">YouTube</a>
        <a href="https://bsky.app/profile/jeff-kwak.bsky.social">Bluesky</a>
        <!-- <a href="#">Discord</a> -->
      </span>
    `;
  }
});
