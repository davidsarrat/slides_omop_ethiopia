---
clicks: 2
---
<script setup>
const subs = [
  'An analyst, a DataSHIELD server, and an OMOP CDM database.',
  '<strong>Plug &amp; play</strong> : dsOMOP connects the server to the database with a resource.',
  '<strong>dsOMOPClient</strong> orchestrates; <strong>dsOMOP</strong> executes the retrieval on the database.',
]
</script>
<div class="flex flex-col h-full" style="gap: 0.4rem;">
<h2 style="font-size: 1.08em; text-align: center;">Plug-and-play access to OMOP data</h2>
<div class="arch-sub"><transition name="regfade" mode="out-in"><span :key="Math.min($clicks, 2)" v-html="subs[Math.min($clicks, 2)]"></span></transition></div>
<div class="arch2-stage">
<svg class="arch2-svg" viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="dbtop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a6f94" /><stop offset="1" stop-color="#2a5170" /></linearGradient>
<linearGradient id="dbbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f5e80" /><stop offset="1" stop-color="#1c3c57" /></linearGradient>
</defs>
<rect x="20" y="112" width="152" height="130" rx="14" fill="rgba(92,235,255,0.08)" stroke="rgba(92,235,255,0.42)" stroke-width="1.2" />
<text x="96" y="136" text-anchor="middle" fill="#5cebff" class="a2-title">Analyst</text>
<circle cx="96" cy="166" r="12" fill="#5cebff" /><path d="M75 202 C75 182 117 182 117 202 Z" fill="#5cebff" />
<rect x="34" y="212" width="124" height="20" rx="10" fill="rgba(92,235,255,0.12)" stroke="rgba(92,235,255,0.45)" stroke-width="1" /><text x="96" y="226" text-anchor="middle" fill="#aef0ff" class="a2-badge">dsOMOPClient</text>
<rect x="300" y="58" width="256" height="244" rx="16" fill="rgba(0,176,79,0.07)" stroke="rgba(0,176,79,0.4)" stroke-width="1.2" />
<text x="428" y="83" text-anchor="middle" fill="#7fd6a3" class="a2-title">DataSHIELD server</text>
<rect x="322" y="102" width="212" height="70" rx="11" fill="rgba(0,176,79,0.16)" stroke="rgba(127,214,163,0.6)" stroke-width="1" />
<text x="428" y="132" text-anchor="middle" fill="#aef0c8" class="a2-pkg">dsOMOP</text>
<text x="428" y="151" text-anchor="middle" fill="#9fb4c4" class="a2-sub">executes the data retrieval</text>
<text x="428" y="206" text-anchor="middle" fill="#b0b8c0" class="a2-sub">reads OMOP tables on demand</text>
<rect x="322" y="250" width="212" height="40" rx="9" fill="rgba(255,179,102,0.08)" stroke="rgba(255,179,102,0.22)" stroke-width="1" />
<text x="428" y="269" text-anchor="middle" fill="#ffb366" class="a2-pat">Patient data</text>
<text x="428" y="283" text-anchor="middle" fill="#b0b8c0" class="a2-small">never leaves the server</text>
<ellipse cx="672" cy="126" rx="46" ry="14" fill="url(#dbtop)" stroke="#6cb0e0" stroke-width="1.8" />
<path d="M626 126 V212 a46 14 0 0 0 92 0 V126" fill="url(#dbbody)" stroke="#6cb0e0" stroke-width="1.8" />
<path d="M626 152 a46 14 0 0 0 92 0" fill="none" stroke="#6cb0e0" stroke-width="1.1" opacity="0.45" /><path d="M626 178 a46 14 0 0 0 92 0" fill="none" stroke="#6cb0e0" stroke-width="1.1" opacity="0.45" />
<text x="672" y="240" text-anchor="middle" fill="#8fc4ea" class="a2-db">OMOP CDM</text>
<text x="672" y="254" text-anchor="middle" fill="#9fb4c4" class="a2-sub">PostgreSQL</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 1 }">
<path d="M556 138 H600" stroke="#00D964" stroke-width="3" fill="none" />
<rect x="600" y="130" width="18" height="16" rx="4" fill="#00D964" /><rect x="618" y="133" width="8" height="3" rx="1.5" fill="#cdeedd" /><rect x="618" y="139" width="8" height="3" rx="1.5" fill="#cdeedd" />
<g stroke="#00D964" stroke-width="1.4" stroke-linecap="round" opacity="0.9"><line x1="630" y1="138" x2="636" y2="131" /><line x1="630" y1="138" x2="636" y2="145" /></g>
<text x="595" y="166" text-anchor="middle" fill="#5fe0a0" class="a2-plug">plug &amp; play</text>
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 2 }">
<text x="236" y="126" text-anchor="middle" fill="#5cebff" class="a2-sub">request · orchestrate</text>
<path d="M176 150 C220 138 260 134 296 140" stroke="#5cebff" stroke-width="2.5" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
<polygon points="291,135 302,140 291,145" fill="#5cebff" />
<path d="M296 206 C260 213 220 217 178 206" stroke="#66ddaa" stroke-width="2.5" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
<polygon points="183,201 172,206 183,211" fill="#66ddaa" />
<text x="236" y="226" text-anchor="middle" fill="#66ddaa" class="a2-sub">aggregated data</text>
</g>
</svg>
<div class="arch-resource" :class="{ show: $clicks >= 1 }" style="left: 80%; bottom: 2%;"><div class="arch-res-title">resource</div><div class="arch-res-row"><span class="k">engine</span><span class="v">postgresql</span></div><div class="arch-res-row"><span class="k">url</span><span class="v">…:5432/omop_cdm</span></div><div class="arch-res-row"><span class="k">user</span><span class="v">researcher</span></div><div class="arch-res-row"><span class="k">password</span><span class="v">••••••••</span></div></div>
</div>
</div>
