---
clicks: 3
---
<script setup>
const subs = [
  'An analyst with dsFlowerClient, a DataSHIELD server with dsFlower.',
  '① <strong>dsFlower</strong> spawns a <strong>Flower SuperNode</strong> on the server.',
  '② The SuperNode connects to your <strong>Flower SuperLink</strong> over gRPC / TLS.',
  '③ Each round trains locally; only <strong>model updates</strong> flow, gated by the privacy profile.',
]
</script>
<div class="flex flex-col h-full" style="gap: 0.4rem;">
<h2 style="font-size: 1.05em; text-align: center;">dsFlower : a DataSHIELD package that drives Flower</h2>
<div class="arch-sub"><transition name="regfade" mode="out-in"><span :key="Math.min($clicks, 3)" v-html="subs[Math.min($clicks, 3)]"></span></transition></div>
<div class="arch2-stage">
<svg class="arch2-svg" viewBox="0 0 800 344" xmlns="http://www.w3.org/2000/svg">
<rect x="24" y="98" width="178" height="168" rx="14" fill="rgba(92,235,255,0.08)" stroke="rgba(92,235,255,0.42)" stroke-width="1.2" />
<text x="113" y="122" text-anchor="middle" fill="#5cebff" class="a2-title">Analyst</text>
<circle cx="113" cy="150" r="11" fill="#5cebff" /><path d="M95 182 C95 164 131 164 131 182 Z" fill="#5cebff" />
<rect x="34" y="194" width="158" height="20" rx="10" fill="rgba(92,235,255,0.12)" stroke="rgba(92,235,255,0.45)" stroke-width="1" /><text x="113" y="208" text-anchor="middle" fill="#aef0ff" class="a2-badge">dsFlowerClient</text>
<rect x="34" y="220" width="158" height="20" rx="10" fill="rgba(254,174,0,0.12)" stroke="rgba(254,174,0,0.5)" stroke-width="1" /><text x="113" y="234" text-anchor="middle" fill="#ffd36b" class="a2-badge">Flower SuperLink</text>
<rect x="356" y="60" width="300" height="244" rx="16" fill="rgba(0,176,79,0.07)" stroke="rgba(0,176,79,0.4)" stroke-width="1.2" />
<text x="506" y="84" text-anchor="middle" fill="#7fd6a3" class="a2-title">DataSHIELD server</text>
<rect x="380" y="98" width="252" height="50" rx="10" fill="rgba(0,176,79,0.16)" stroke="rgba(127,214,163,0.6)" stroke-width="1" />
<text x="506" y="118" text-anchor="middle" fill="#aef0c8" class="a2-pkg">dsFlower</text>
<text x="506" y="135" text-anchor="middle" fill="#9fb4c4" class="a2-sub">stages data · spawns the SuperNode</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 1 }"><path d="M506 148 V168" stroke="#FEAE00" stroke-width="2.2" stroke-dasharray="3 4" fill="none" /><polygon points="501,166 506,174 511,166" fill="#FEAE00" /><rect x="380" y="176" width="252" height="50" rx="10" fill="rgba(254,174,0,0.13)" stroke="rgba(254,174,0,0.55)" stroke-width="1" /><text x="506" y="196" text-anchor="middle" fill="#ffd36b" class="a2-pkg">Flower SuperNode</text><text x="506" y="213" text-anchor="middle" fill="#9fb4c4" class="a2-sub">trains the model locally</text></g>
<rect x="380" y="252" width="252" height="40" rx="9" fill="rgba(255,179,102,0.08)" stroke="rgba(255,179,102,0.22)" stroke-width="1" />
<text x="506" y="270" text-anchor="middle" fill="#ffb366" class="a2-pat">Local data</text>
<text x="506" y="284" text-anchor="middle" fill="#b0b8c0" class="a2-small">never leaves the server</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 2 }">
<text x="280" y="186" text-anchor="middle" fill="#c8d0d8" class="a2-sub">gRPC / TLS</text>
<path d="M380 201 H205" stroke="#7fd6a3" stroke-width="2.4" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 3 }"><text x="292" y="210" text-anchor="middle" fill="#7fd6a3" class="a2-small">global model ↓ · weight updates ↑</text></g>
</svg>
</div>
</div>
