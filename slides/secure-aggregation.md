---
clicks: 4
---
<script setup>
const sites = [
  { n: 'Site A', x: 128, th: 'θA', mk: 'a3·9f·c1' },
  { n: 'Site B', x: 380, th: 'θB', mk: '2e·b7·40' },
  { n: 'Site C', x: 632, th: 'θC', mk: 'c4·18·6d' },
]
const subs = [
  'Even a weight update can leak information about a site.',
  '① Each site <strong>masks</strong> its update with secret-shared noise.',
  '② The server only ever receives <strong>masked</strong> updates — random to it.',
  '③ On summation the masks <strong>cancel</strong> : the server learns only the aggregate.',
  '<strong>SecAgg+</strong> masks with a few neighbours instead of all pairs : it scales to many sites and tolerates dropouts.',
]
</script>
<div class="flex flex-col h-full" style="gap: 0.35rem;">
<h2 style="font-size: 1.05em; text-align: center;">Secure Aggregation : even the updates stay private</h2>
<div class="arch-sub"><transition name="regfade" mode="out-in"><span :key="Math.min($clicks, 4)" v-html="subs[Math.min($clicks, 4)]"></span></transition></div>
<div class="arch2-stage">
<svg class="arch2-svg" viewBox="0 0 760 330" xmlns="http://www.w3.org/2000/svg">
<template v-for="s in sites" :key="s.n"><g :transform="`translate(${s.x},0)`"><rect x="-80" y="42" width="160" height="88" rx="13" fill="rgba(0,176,79,0.06)" stroke="rgba(0,176,79,0.38)" stroke-width="1.2" /><text x="0" y="64" text-anchor="middle" fill="#7fd6a3" class="a2-db">{{ s.n }}</text><rect x="-52" y="76" width="104" height="28" rx="7" :fill="$clicks >= 1 ? 'rgba(254,174,0,0.16)' : 'rgba(0,176,79,0.2)'" :stroke="$clicks >= 1 ? '#FEAE00' : '#7fd6a3'" stroke-width="1.2" /><text x="0" y="94" text-anchor="middle" :fill="$clicks >= 1 ? '#ffd36b' : '#aef0c8'" class="a2-pkg">{{ $clicks >= 1 ? s.mk : s.th }}</text><text x="0" y="122" text-anchor="middle" :fill="$clicks >= 1 ? '#FEAE00' : '#9fb4c4'" class="a2-small">{{ $clicks >= 1 ? '🔒 masked update' : 'model update' }}</text></g></template>
<rect x="248" y="244" width="264" height="82" rx="14" fill="rgba(92,235,255,0.07)" stroke="rgba(92,235,255,0.4)" stroke-width="1.2" />
<text x="380" y="266" text-anchor="middle" fill="#5cebff" class="a2-db">Server · SuperLink</text>
<g class="arch2-reveal" :class="{ on: $clicks < 3 }"><text x="380" y="292" text-anchor="middle" fill="#9fb4c4" class="a2-sub">sees only masked values</text></g>
<g class="arch2-reveal" :class="{ on: $clicks >= 3 }"><text x="380" y="289" text-anchor="middle" fill="#aef0c8" class="a2-pkg">Σ θₖ  ·  aggregate only</text><text x="380" y="308" text-anchor="middle" fill="#9fb4c4" class="a2-small">masks cancel : Σ mₖ = 0</text></g>
<g class="arch2-reveal" :class="{ on: $clicks >= 2 }">
<path d="M128 132 C170 175 250 210 340 242" stroke="#5cebff" stroke-width="2.2" fill="none" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" from="0" to="-11" dur="0.8s" repeatCount="indefinite" /></path><polygon points="335,236 344,243 333,247" fill="#5cebff" />
<path d="M380 132 L380 242" stroke="#5cebff" stroke-width="2.2" fill="none" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" from="0" to="-11" dur="0.8s" repeatCount="indefinite" /></path><polygon points="375,236 380,245 385,236" fill="#5cebff" />
<path d="M632 132 C590 175 510 210 420 242" stroke="#5cebff" stroke-width="2.2" fill="none" stroke-dasharray="6 5"><animate attributeName="stroke-dashoffset" from="0" to="-11" dur="0.8s" repeatCount="indefinite" /></path><polygon points="425,236 416,243 427,247" fill="#5cebff" />
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 4 }"><rect x="556" y="250" width="150" height="40" rx="9" fill="rgba(254,174,0,0.1)" stroke="rgba(254,174,0,0.45)" stroke-width="1" /><text x="631" y="268" text-anchor="middle" fill="#FEAE00" class="a2-sub">SecAgg+</text><text x="631" y="282" text-anchor="middle" fill="#b0b8c0" class="a2-small">k neighbours · dropouts ok</text></g>
</svg>
</div>
</div>
