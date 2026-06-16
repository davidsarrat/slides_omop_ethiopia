---
clicks: 1
---
<script setup>
const bars = [
  { x: 420, h: 38 }, { x: 444, h: 60 }, { x: 468, h: 46 },
  { x: 492, h: 72 }, { x: 516, h: 54 }, { x: 540, h: 80 }
]
</script>
<div class="flex flex-col h-full">
<h2 style="font-size: 1.15em; line-height: 1.35;">What are the advantages of adhering to a widely-extended common data model?</h2>
<div class="flex-1 flex flex-col items-center justify-center" style="gap: 1rem;">
<div class="flex items-center" style="gap: 0.7rem;">
<div class="adv-num">2</div>
<div style="font-family: 'Roboto Mono', monospace; font-size: 1.3em; font-weight: 600; color: #5cebff;">Analytical tools built for the model</div>
</div>
<div class="pp-scene" :class="{ connected: $clicks >= 1 }" style="width: 94%;">
<svg class="pp-svg" viewBox="0 0 980 330" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="ppdbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#20597f" /><stop offset="100%" stop-color="#123c5c" /></linearGradient>
<linearGradient id="ppplug" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#7ff2ff" /><stop offset="100%" stop-color="#2bbfe0" /></linearGradient>
<clipPath id="ppscreen"><rect x="400" y="52" width="542" height="188" rx="6" /></clipPath>
</defs>
<g class="pp-plug">
<path class="pp-cable" d="M84,168 C 170,168 210,168 290,168" stroke="#3fe3ff" stroke-width="3" fill="none" />
<rect x="290" y="150" width="42" height="36" rx="9" fill="url(#ppplug)" />
<rect x="332" y="158" width="22" height="5.5" rx="2.7" fill="#c7f5ff" />
<rect x="332" y="170" width="22" height="5.5" rx="2.7" fill="#c7f5ff" />
</g>
<g>
<path d="M58,138 V198 a38,11 0 0 0 76,0 V138" fill="url(#ppdbg)" stroke="#3fe3ff" stroke-width="1.8" />
<ellipse cx="96" cy="138" rx="38" ry="11" fill="#2a6792" stroke="#3fe3ff" stroke-width="1.8" />
<ellipse cx="96" cy="158" rx="38" ry="11" fill="none" stroke="#3fe3ff" stroke-width="1" opacity="0.4" />
<ellipse cx="96" cy="178" rx="38" ry="11" fill="none" stroke="#3fe3ff" stroke-width="1" opacity="0.4" />
<text class="pp-dblabel" x="96" y="230" text-anchor="middle">Your CDM database</text>
</g>
<rect class="pp-bezel" x="388" y="40" width="566" height="224" rx="14" />
<rect class="pp-stand" x="656" y="264" width="50" height="20" />
<ellipse class="pp-stand" cx="681" cy="290" rx="70" ry="7" />
<rect class="pp-screen" x="400" y="52" width="542" height="188" rx="6" />
<circle class="pp-power pp-dash" cx="928" cy="252" r="4" style="transition-delay: 0.3s" />
<rect x="368" y="148" width="20" height="40" rx="5" fill="#0a1f38" stroke="#3fe3ff" stroke-width="1.5" />
<g class="pp-spark">
<line x1="378" y1="167" x2="356" y2="150" /><line x1="378" y1="167" x2="400" y2="148" /><line x1="378" y1="167" x2="352" y2="167" /><line x1="378" y1="167" x2="378" y2="143" /><line x1="378" y1="167" x2="378" y2="191" /><line x1="378" y1="167" x2="360" y2="186" />
<circle cx="378" cy="167" r="4" />
</g>
<g clip-path="url(#ppscreen)">
<rect class="pp-flash" x="400" y="52" width="542" height="188" fill="#bfe9ff" />
<g class="pp-dash" style="transition-delay: 0.3s"><circle cx="420" cy="72" r="4" fill="#43607a" /><circle cx="434" cy="72" r="4" fill="#43607a" /><circle cx="448" cy="72" r="4" fill="#43607a" /></g>
<g class="pp-dash" style="transition-delay: 0.4s">
<text class="pp-kpinum" x="600" y="80">12,480</text><text class="pp-kpi" x="600" y="94">patients</text>
<text class="pp-kpinum" x="712" y="80">3.4M</text><text class="pp-kpi" x="712" y="94">records</text>
<text class="pp-kpinum" x="812" y="80">98%</text><text class="pp-kpi" x="812" y="94">complete</text>
</g>
<line class="pp-grid-l pp-dash" x1="416" y1="228" x2="560" y2="228" style="transition-delay: 0.4s" />
<g>
<rect v-for="(b, i) in bars" :key="i" class="pp-bar" :x="b.x" :y="228 - b.h" width="15" :height="b.h" rx="2" fill="#4fc8e8" :style="{ transitionDelay: (0.42 + i * 0.06) + 's' }" />
</g>
<path class="pp-area" d="M586,210 L610,170 L640,185 L670,150 L700,165 L730,138 L762,152 L762,228 L586,228 Z" />
<polyline class="pp-line" points="586,210 610,170 640,185 670,150 700,165 730,138 762,152" />
<circle class="pp-donut-bg pp-dash" cx="862" cy="176" r="30" style="transition-delay: 0.58s" />
<circle class="pp-donut" cx="862" cy="176" r="30" />
<text class="pp-kpinum pp-dash" x="862" y="182" text-anchor="middle" style="transition-delay: 0.78s; font-size: 15px;">68%</text>
</g>
<text class="pp-stat pp-stat-pre" x="240" y="292" text-anchor="middle">Just connect your database.</text>
<text class="pp-stat pp-stat-on" x="240" y="294" text-anchor="middle">It just works!</text>
</svg>
</div>
</div>
</div>
