const tools = [
  {
    name: "Artist & Residence Registration",
    href: "https://script.google.com/a/macros/studiokura.com/s/AKfycbwWGmeLH7Jk7S1wRLpUHfaMmfdW9X6bSNHXvICK9MQz8TjduGz3xZC0j-HCOSbbq7A3/exec",
    description:
      "Register artist and residency information in a structured format for the management system."
  },
  {
    name: "Exhibition Post Generator",
    href: "https://script.google.com/a/macros/studiokura.com/s/AKfycbx6hdivF24e9TCMkpslV54P4QxPJWHlf4uAvd_yUG_YEHsCsMzZEtHAsM-NmZRhiHK7/exec",
    description:
      "Create exhibition post content and structured data for the internal information system."
  },
  {
    name: "Exhibition Caption Tool",
    href: "https://hirofumimatsuzaki.github.io/exhibition-caption-tool/",
    description: "Prepare and format exhibition captions for printing."
  }
];

const upcomingTools = [
  "Mail Reply Assistant",
  "Artist Database",
  "Residency Workflow",
  "Exhibition Archive"
];

function createToolCard(tool, index) {
  const card = document.createElement("article");
  card.className = "tool-card";

  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">Tool ${index + 1}</span>
      <h3 class="card-title">${tool.name}</h3>
      <p class="card-description">${tool.description}</p>
    </div>
    <div class="card-footer">
      <span class="card-status">Ready to use</span>
      <a class="button-link" href="${tool.href}" target="_blank" rel="noreferrer">Open</a>
    </div>
  `;

  return card;
}

function createComingSoonCard(name) {
  const card = document.createElement("article");
  card.className = "coming-soon-card";

  card.innerHTML = `
    <div class="card-top">
      <span class="card-index">Planned</span>
      <h3 class="card-title">${name}</h3>
      <p class="card-description">Reserved for future workflow support as the internal portal expands.</p>
    </div>
    <div class="card-footer">
      <span class="card-status">Coming soon</span>
    </div>
  `;

  return card;
}

function renderCards(items, target, renderer) {
  items.forEach((item, index) => {
    target.append(renderer(item, index));
  });
}

const toolGrid = document.querySelector("#tool-grid");
const comingSoonGrid = document.querySelector("#coming-soon-grid");

renderCards(tools, toolGrid, createToolCard);
renderCards(upcomingTools, comingSoonGrid, createComingSoonCard);
