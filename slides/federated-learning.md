---
clicks: 4
---
<script setup>
const sites = [
  { n: 'Site A', x: 128, th: 'θA' },
  { n: 'Site B', x: 380, th: 'θB' },
  { n: 'Site C', x: 632, th: 'θC' },
]
const subs = [
  'A global model lives on the server. Each site keeps its own data.',
  '① <strong>Broadcast</strong> the current global model to every site.',
  '② Each site <strong>trains it on its own data</strong> — locally.',
  '③ Only the <strong>weight updates</strong> travel back, never the data.',
  '④ <strong>FedAvg</strong> averages them into a new global model — then repeat.',
]
</script>
<div class="flex flex-col h-full" style="gap: 0.35rem;">
<h2 style="font-size: 1.05em; text-align: center;">Federated learning : move the model, not the data</h2>
<div class="arch-sub"><transition name="regfade" mode="out-in"><span :key="Math.min($clicks, 4)" v-html="subs[Math.min($clicks, 4)]"></span></transition></div>
<div class="arch2-stage">
<svg class="arch2-svg" viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg">
<template v-for="s in sites" :key="s.n"><g :transform="`translate(${s.x},0)`"><rect x="-75" y="44" width="150" height="84" rx="13" fill="rgba(0,176,79,0.07)" stroke="rgba(0,176,79,0.4)" stroke-width="1.2" /><text x="0" y="66" text-anchor="middle" fill="#7fd6a3" class="a2-db">{{ s.n }}</text><rect x="-34" y="78" width="68" height="26" rx="7" :fill="$clicks >= 2 ? 'rgba(0,176,79,0.22)' : ($clicks === 1 ? 'rgba(254,174,0,0.22)' : 'rgba(255,255,255,0.05)')" :stroke="$clicks >= 2 ? '#7fd6a3' : ($clicks === 1 ? '#FEAE00' : 'rgba(255,255,255,0.25)')" stroke-width="1.2" /><text x="0" y="95" text-anchor="middle" :fill="$clicks >= 2 ? '#aef0c8' : ($clicks === 1 ? '#ffd36b' : '#7f8c9a')" class="a2-sub">{{ $clicks >= 2 ? s.th : ($clicks >= 1 ? 'θ' : '·') }}</text><text x="0" y="120" text-anchor="middle" fill="#9fb4c4" class="a2-small">local data</text></g></template>
<rect x="262" y="244" width="236" height="80" rx="14" fill="rgba(92,235,255,0.07)" stroke="rgba(92,235,255,0.4)" stroke-width="1.2" />
<text x="380" y="268" text-anchor="middle" fill="#5cebff" class="a2-db">Server · FedAvg</text>
<text x="380" y="286" text-anchor="middle" fill="#9fb4c4" class="a2-sub">global model θ</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 4 }"><text x="380" y="308" text-anchor="middle" fill="#ffd36b" class="a2-sub">θ ← Σ (nₖ / n) · θₖ</text></g>
<g class="arch2-reveal" :class="{ on: $clicks === 1 }">
<text x="380" y="178" text-anchor="middle" fill="#FEAE00" class="a2-sub">global model θ</text>
<path d="M340 242 C250 210 170 175 130 132" stroke="#FEAE00" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="125,138 128,128 134,136" fill="#FEAE00" />
<path d="M380 242 L380 132" stroke="#FEAE00" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="375,136 380,127 385,136" fill="#FEAE00" />
<path d="M420 242 C510 210 590 175 630 132" stroke="#FEAE00" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="626,136 632,128 635,138" fill="#FEAE00" />
</g>
<g class="arch2-reveal" :class="{ on: $clicks === 3 }">
<text x="380" y="170" text-anchor="middle" fill="#5cebff" class="a2-sub">weight updates θₖ</text>
<path d="M130 132 C170 175 250 210 340 242" stroke="#5cebff" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="335,236 344,243 333,247" fill="#5cebff" />
<path d="M380 132 L380 242" stroke="#5cebff" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="375,236 380,245 385,236" fill="#5cebff" />
<path d="M630 132 C590 175 510 210 420 242" stroke="#5cebff" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path><polygon points="425,236 416,243 427,247" fill="#5cebff" />
</g>
</svg>
</div>
</div>
