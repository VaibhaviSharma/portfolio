const TAG_META = {
  building: { label: 'Concept to production', color: 'blue' },
  gtm:      { label: 'Launch strategy',         color: 'gold' },
  pricing:  { label: 'Pricing & positioning',   color: 'green' },
  data:     { label: 'Experimentation & analytics', color: 'blue' },
  insight:  { label: 'Customer & market insight',   color: 'green' }
};

const ITEMS = [
  {
    id: 'tata-portal', title: 'IZO Multi-Connect self-serve platform', tags: ['building'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    stage: ['Concept', 'Design', 'Launch: $33M pipeline'],
    problem:  'B2B customers needed a way to manage multiple cloud connections in real time, without relying on a sales rep for every change.',
    approach: 'Built IZO Multi-Connect, a self-serve platform for managing multiple cloud connections in real time, grounded in a deep understanding of what B2B customers actually needed.',
    result:   '$33M in pipeline driven by the platform.'
  },
  {
    id: 'tata-fraud', title: 'ML-based fraud detection platform', tags: ['building'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    stage: ['Concept', 'Build', 'Production'],
    problem:  "Fraud losses were mounting on Tata Communications' network with no ML-based detection layer in place.",
    approach: 'Led the platform from concept through production, working closely with engineering to get the model live.',
    result:   '6M+ fraudulent transactions blocked, with international media coverage of the platform.'
  },
  {
    id: 'marketo', title: 'Marketo Optimizer beta program', tags: ['pricing', 'data'],
    period: 'Adobe, 2025–2026', hasDetail: true,
    stage: ['Concept', 'Beta: 25 partners', 'GA: $800K closed'],
    problem:  'Adoption blockers for a new AI credit-based pricing model were invisible until GA, by which point they would already be costing revenue.',
    approach: 'Ran a 25-partner beta specifically to surface blockers early, then used usage and AI-credit data from that beta to design the trial offer and pricing structure before GA rather than after.',
    result:   '8 adoption blockers caught before go-live. 90% of design partners self-activated 3+ use cases within 30 days. 3 deals worth $800K closed ahead of GA.'
  },
  {
    id: 'brand-concierge', title: 'Brand Concierge', tags: ['pricing', 'building'],
    period: 'Adobe, 2025–present', hasDetail: true,
    stage: ['Positioning', 'Trial design', 'Launch: 5 verticals'],
    problem:  'Adobe needed to launch an LLM-powered brand visibility product with no established pricing, packaging, or ICP for the category.',
    approach: 'Owned ICP definition, positioning, packaging, and pricing, including trial design, targeting cross-sell across five verticals. Later diagnosed adoption stalls and realigned teams toward UX over model quality.',
    result:   'Renewal timelines shortened by 15% after the UX realignment.'
  },
  {
    id: 'gtm-reposition', title: "Tata's GTM repositioning", tags: ['gtm'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    problem:  "Tata Communications' go-to-market messaging wasn't resonating against a shifting competitive set.",
    approach: 'Repositioned the GTM strategy and product messaging across the business.',
    result:   '20% growth in the customer base.'
  },
  {
    id: 'enablement', title: 'Field enablement and summit engagements', tags: ['gtm'],
    period: 'Adobe, 2025–present', hasDetail: true,
    problem:  'Field teams needed to translate product capability into industry-specific use cases without waiting on PMM for every deal.',
    approach: 'Built an AI-powered enablement workflow so field teams could self-serve answers and generate cross-industry use cases, and ran 15+ summit engagements including demos, discovery, and hands-on labs.',
    result:   '$4M+ in pipeline influenced, with deals pulled forward roughly 30 days.'
  },
  {
    id: 'dynamic-pricing', title: 'Dynamic pricing for high-value segments', tags: ['pricing'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    problem:  "High-value segments were priced with a flat model that didn't reflect differences in customer value.",
    approach: 'Designed a dynamic pricing model tailored to high-value customer segments.',
    result:   '200% increase in sales within those segments.'
  },
  {
    id: 'data-experiments', title: 'Funnel analysis and activation experiments', tags: ['data'],
    period: 'Adobe and Tata Communications', hasDetail: true,
    problem:  'Adoption levers inside existing products were being guessed at rather than measured.',
    approach: 'Ran Amplitude funnel analysis, A/B tested self-service activation flows, and used power-user adoption research to find where usage was actually breaking down.',
    result:   '11% lift in AI chat adoption, 20% lift in AI skills library usage, and 30% improvement in self-service time-to-activate.'
  },
  {
    id: 'winloss', title: 'Win/loss analysis and competitive intelligence', tags: ['insight'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    problem:  'Win rate varied across financial services, tech, and healthcare, with no shared view of why deals were won or lost.',
    approach: 'Ran win/loss analysis and competitive intelligence across the three verticals, then fed the findings back into positioning and conversion strategy.',
    result:   'Sharpened win rate across the segments studied.'
  },
  {
    id: 'personas', title: 'AI power-user personas', tags: ['insight'],
    period: 'Adobe, 2025–present', hasDetail: true,
    problem:  'Product and UX decisions were being made without a grounded picture of who the AI power users actually were.',
    approach: 'Built 4–6 user personas from customer interviews, industry data, and competitive benchmarking, including dedicated research sessions on AI power-user adoption behavior.',
    result:   'Persona-driven UI/UX recommendations were adopted into the roadmap.'
  },
  {
    id: 'thesis', title: 'The activation-gap thesis', tags: ['insight'],
    period: 'Ongoing', hasDetail: true,
    problem:  "Enterprise AI deployments were stalling, and the common explanation, that the model wasn't good enough, didn't match what was actually happening with customers.",
    approach: 'Traced the stall to the gap between self-serve onboarding and realized value, compounded by fine-tuning timelines and legal review cycles, drawing on firsthand customer-facing work across two companies.',
    result:   'An original thesis that now runs through this portfolio and outreach.'
  },
  {
    id: 'value-framework', title: 'Value-realization framework', tags: ['data'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    problem: 'A service degradation issue had persisted for two years with no clear way to diagnose root cause across traffic, SLAs, and latency.',
    approach: 'Built a value-realization framework with clear milestones and tracking across traffic, SLAs, and latency to pinpoint the issue and ship corrective fixes to production.',
    result: 'Resolved a 2-year-old service degradation issue.'
  },
  {
    id: 'saas-launch', title: 'Cross-functional SaaS launch', tags: ['gtm'],
    period: 'Tata Communications, 2018–2023', hasDetail: true,
    problem: 'A new SaaS solution needed buy-in across engineering, marketing, and sales to launch as one coherent product, not three disconnected efforts.',
    approach: 'Rallied 10+ cross-functional teams around a unified product vision for the launch.',
    result: '$2M in cross-sell revenue generated.'
  },
  {
    id: 'gmail', title: 'Gmail inbox classification agent', tags: ['building'],
    period: 'Personal project', hasDetail: false,
    short: "Built a classification agent with OAuth2, Claude's API, SQLite, and a Streamlit dashboard with an agentic query layer."
  },
  {
    id: 'vocabl', title: 'Vocabl', tags: ['building'],
    period: 'Personal project', hasDetail: false,
    short: 'Live vocab and test-prep app built in React and Vite, with an LLM-generated hint mechanic as the core differentiator.'
  }
];

function tagPillHtml(tag) {
  const meta = TAG_META[tag];
  return `<span class="work-tag" style="color: var(--accent-${meta.color});">${meta.label}</span>`;
}

function tileBg(item) {
  return `var(--accent-${TAG_META[item.tags[0]].color}-bg)`;
}

function renderCompact(item) {
  const desc = item.hasDetail ? item.result : item.short;
  return `
    <div class="work-tile" style="background: ${tileBg(item)};">
      <div class="work-title-row">${item.tags.map(tagPillHtml).join('')}</div>
      <p class="work-title">${item.title}</p>
      <p class="work-period">${item.period}</p>
      <p class="work-short">${desc}</p>
    </div>`;
}

function renderFull(item) {
  let stageHtml = '';
  if (item.stage) {
    stageHtml = `<div class="stage-row">${item.stage.map((s, i) => {
      const isLast = i === item.stage.length - 1;
      const badge = `<span class="stage-badge${isLast ? ' final' : ''}" ${isLast ? 'style="background: var(--accent-green-bg); color: var(--accent-green);"' : ''}>${s}</span>`;
      return i < item.stage.length - 1 ? badge + '<span class="stage-line"></span>' : badge;
    }).join('')}</div>`;
  }
  return `
    <div class="work-tile" style="background: ${tileBg(item)};">
      <div class="work-title-row">${item.tags.map(tagPillHtml).join('')}</div>
      <p class="work-title">${item.title}</p>
      <p class="work-period">${item.period}</p>
      ${stageHtml}
      <p class="detail-para" style="border-left-color: var(--accent-blue);">${item.problem}</p>
      <p class="detail-para" style="border-left-color: var(--accent-gold);">${item.approach}</p>
      <p class="detail-para" style="border-left-color: var(--accent-green);">${item.result}</p>
    </div>`;
}

function render(filter) {
  const grid = document.getElementById('work-list');
  const note = document.getElementById('intro-note');
  let items = ITEMS;
  const useFull = filter !== 'all';
  if (filter !== 'all') {
    items = ITEMS.filter(i => i.tags.includes(filter));
  }
  grid.classList.toggle('expanded-mode', useFull);
  note.textContent = useFull
    ? 'Each project below moves from problem, to approach, to result — read top to bottom.'
    : 'Fifteen projects across five skills — select one above to see the full story behind any of them.';
  grid.innerHTML = items.map(item => {
    if (useFull && item.hasDetail) return renderFull(item);
    return renderCompact(item);
  }).join('');
}

document.getElementById('filters').addEventListener('click', function (e) {
  const pill = e.target.closest('.filter-pill');
  if (!pill) return;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');
  render(pill.getAttribute('data-skill'));
});

render('all');
