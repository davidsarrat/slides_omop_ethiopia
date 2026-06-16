---
clicks: 5
---
<script setup>
const subs = [
  'An analyst (R), a DataSHIELD server, and an OMOP CDM database.',
  '① <strong>Plug &amp; play</strong> : dsOMOP connects to the database with a resource.',
  '② <strong>dsOMOPClient</strong> requests the data.',
  '③ <strong>dsOMOP</strong> pulls the records into a server-side dataset.',
  '④ <strong>dsBaseClient</strong> runs <strong>ds.glm</strong> on that dataset.',
  '⑤ Only <strong>aggregated results</strong> return to the analyst.',
]
</script>
<div class="flex flex-col h-full" style="gap: 0.35rem;">
<h2 style="font-size: 1.05em; text-align: center;">Plug-and-play access to OMOP data</h2>
<div class="arch-sub"><transition name="regfade" mode="out-in"><span :key="Math.min($clicks, 5)" v-html="subs[Math.min($clicks, 5)]"></span></transition></div>
<div class="arch2-stage">
<svg class="arch2-svg" viewBox="0 0 820 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="dbtop" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a6f94" /><stop offset="1" stop-color="#2a5170" /></linearGradient>
<linearGradient id="dbbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f5e80" /><stop offset="1" stop-color="#1c3c57" /></linearGradient>
</defs>
<rect x="18" y="92" width="158" height="184" rx="14" fill="rgba(92,235,255,0.08)" stroke="rgba(92,235,255,0.42)" stroke-width="1.2" />
<text x="97" y="114" text-anchor="middle" fill="#5cebff" class="a2-title">Analyst</text>
<circle cx="97" cy="140" r="11" fill="#5cebff" /><path d="M79 172 C79 154 115 154 115 172 Z" fill="#5cebff" />
<rect x="26" y="182" width="142" height="20" rx="10" fill="rgba(92,235,255,0.12)" stroke="rgba(92,235,255,0.45)" stroke-width="1" /><text x="97" y="196" text-anchor="middle" fill="#aef0ff" class="a2-badge">dsOMOPClient</text>
<rect x="26" y="208" width="142" height="20" rx="10" fill="rgba(183,148,246,0.14)" stroke="rgba(183,148,246,0.5)" stroke-width="1" /><text x="97" y="222" text-anchor="middle" fill="#d6c2fb" class="a2-badge">dsBaseClient</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 5 }"><rect x="26" y="242" width="142" height="22" rx="8" fill="rgba(0,217,100,0.12)" stroke="rgba(0,217,100,0.5)" stroke-width="1" /><text x="97" y="257" text-anchor="middle" fill="#5fe0a0" class="a2-badge">β estimates · CI</text></g>
<rect x="312" y="60" width="274" height="224" rx="16" fill="rgba(0,176,79,0.07)" stroke="rgba(0,176,79,0.4)" stroke-width="1.2" />
<text x="449" y="80" text-anchor="middle" fill="#7fd6a3" class="a2-title">DataSHIELD server</text>
<g class="arch2-reveal a2-data-delay" :class="{ on: $clicks >= 3 }"><g class="a2-data-g"><rect x="378" y="156" width="160" height="46" rx="9" fill="rgba(254,174,0,0.13)" stroke="rgba(254,174,0,0.55)" stroke-width="1" /><g stroke="#FEAE00" stroke-width="1" opacity="0.85" fill="none"><rect x="390" y="167" width="20" height="20" rx="2" /><line x1="390" y1="173.6" x2="410" y2="173.6" /><line x1="390" y1="180.3" x2="410" y2="180.3" /><line x1="396.6" y1="167" x2="396.6" y2="187" /><line x1="403.3" y1="167" x2="403.3" y2="187" /></g><text x="420" y="177" text-anchor="start" fill="#ffcd6b" class="a2-sub">patient dataset</text><text x="420" y="191" text-anchor="start" fill="#b0b8c0" class="a2-small">never leaves the server</text></g></g>
<rect x="334" y="94" width="230" height="42" rx="10" fill="rgba(0,176,79,0.16)" stroke="rgba(127,214,163,0.6)" stroke-width="1" />
<text x="449" y="113" text-anchor="middle" fill="#aef0c8" class="a2-pkg">dsOMOP</text>
<text x="449" y="127" text-anchor="middle" fill="#9fb4c4" class="a2-sub">loads OMOP data</text>
<rect x="334" y="222" width="230" height="42" rx="10" fill="rgba(139,92,246,0.14)" stroke="rgba(183,148,246,0.55)" stroke-width="1" />
<text x="449" y="241" text-anchor="middle" fill="#d6c2fb" class="a2-pkg">dsBase</text>
<text x="449" y="255" text-anchor="middle" fill="#9fb4c4" class="a2-sub">runs ds.glm</text>
<ellipse cx="736" cy="82" rx="42" ry="12" fill="url(#dbtop)" stroke="#6cb0e0" stroke-width="1.8" />
<path d="M694 82 V148 a42 12 0 0 0 84 0 V82" fill="url(#dbbody)" stroke="#6cb0e0" stroke-width="1.8" />
<path d="M694 104 a42 12 0 0 0 84 0" fill="none" stroke="#6cb0e0" stroke-width="1.1" opacity="0.45" /><path d="M694 126 a42 12 0 0 0 84 0" fill="none" stroke="#6cb0e0" stroke-width="1.1" opacity="0.45" />
<text x="736" y="184" text-anchor="middle" fill="#8fc4ea" class="a2-db">OMOP CDM</text>
<text x="736" y="198" text-anchor="middle" fill="#9fb4c4" class="a2-sub">PostgreSQL</text>
<g class="arch2-reveal" :class="{ on: $clicks >= 1 }">
<text x="629" y="103" text-anchor="middle" fill="#5fe0a0" class="a2-plug">resource</text>
<path d="M564 115 H674" stroke="#00D964" stroke-width="3" fill="none" />
<g class="a2-plug-g"><rect x="674" y="107" width="17" height="16" rx="4" fill="#00D964" /><rect x="691" y="110" width="8" height="3" rx="1.5" fill="#cdeedd" /><rect x="691" y="117" width="8" height="3" rx="1.5" fill="#cdeedd" /></g>
</g>
<g class="arch2-reveal" :class="{ on: $clicks === 3 }">
<path d="M690 115 H568" stroke="rgba(254,174,0,0.3)" stroke-width="6" fill="none" stroke-linecap="round" />
<circle r="4.2" fill="#FEAE00"><animateMotion path="M690 115 H568" dur="1s" repeatCount="indefinite" /></circle>
<circle r="4.2" fill="#ffcf66"><animateMotion path="M690 115 H568" dur="1s" begin="-0.25s" repeatCount="indefinite" /></circle>
<circle r="4.2" fill="#FEAE00"><animateMotion path="M690 115 H568" dur="1s" begin="-0.5s" repeatCount="indefinite" /></circle>
<circle r="4.2" fill="#ffcf66"><animateMotion path="M690 115 H568" dur="1s" begin="-0.75s" repeatCount="indefinite" /></circle>
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 2 }">
<text x="252" y="92" text-anchor="middle" fill="#5cebff" class="a2-sub">② request data</text>
<path d="M178 116 C236 104 286 100 330 102" stroke="#5cebff" stroke-width="2.5" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
<polygon points="325,97 336,102 325,107" fill="#5cebff" />
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 4 }">
<text x="252" y="210" text-anchor="middle" fill="#c5a8f7" class="a2-sub">④ ds.glm</text>
<path d="M178 230 C236 230 286 232 330 234" stroke="#b794f6" stroke-width="2.5" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
<polygon points="325,229 336,234 325,239" fill="#b794f6" />
<path d="M449 220 V207" stroke="#d6c2fb" stroke-width="2.4" fill="none" stroke-dasharray="3 5" stroke-linecap="round"><animate attributeName="stroke-dashoffset" from="0" to="-16" dur="0.7s" repeatCount="indefinite" /></path>
<polygon points="444,209 449,201 454,209" fill="#d6c2fb" />
</g>
<g class="arch2-reveal" :class="{ on: $clicks >= 5 }">
<path d="M312 254 C252 266 214 256 180 246" stroke="#66ddaa" stroke-width="2.5" fill="none" stroke-dasharray="7 5"><animate attributeName="stroke-dashoffset" from="0" to="-12" dur="0.8s" repeatCount="indefinite" /></path>
<polygon points="185,241 174,246 185,251" fill="#66ddaa" />
<text x="248" y="282" text-anchor="middle" fill="#66ddaa" class="a2-sub">⑤ aggregated results</text>
</g>
</svg>
<div class="arch-resource" :class="{ show: $clicks >= 1 }" style="left: 88%; bottom: 3%; width: 186px;"><div class="arch-res-title">resource</div><div class="arch-res-row"><span class="k">engine</span><span class="v">postgresql</span></div><div class="arch-res-row"><span class="k">url</span><span class="v">…:5432/omop_cdm</span></div><div class="arch-res-row"><span class="k">user</span><span class="v">researcher</span></div><div class="arch-res-row"><span class="k">password</span><span class="v">••••••••</span></div></div>
</div>
</div>
