<script setup>
import logoDswb from '../assets/logo-dswb.png'
import isglobal from '../assets/logos/isglobal.png'
import aphrc from '../assets/logos/aphrc.png'
import dgh from '../assets/logos/dgh.png'
import iressef from '../assets/logos/iressef.png'
import ahri from '../assets/logos/ahri.png'
import datashield from '../assets/logos/datashield.png'
import ohdsi from '../assets/logos/ohdsi.png'

const row1 = [
  { src: isglobal, h: 26, alt: 'ISGlobal', url: 'https://www.isglobal.org' },
  { src: aphrc, h: 32, alt: 'APHRC', url: 'https://aphrc.org' },
  { src: ahri, h: 42, alt: 'AHRI', url: 'https://ahri.gov.et' },
  { src: dgh, h: 42, alt: 'Hôpital Général de Douala', url: 'https://www.facebook.com/hgdcam/' },
]
const row2 = [
  { src: iressef, h: 48, alt: 'IRESSEF', url: 'https://iressef.org' },
  { src: datashield, h: 30, alt: 'DataSHIELD', url: 'https://www.datashield.org' },
  { src: ohdsi, h: 32, alt: 'OHDSI', url: 'https://www.ohdsi.org' },
]
</script>

<div class="flex flex-col items-center justify-center h-full">
  <a href="https://dswb.africa" target="_blank" rel="noopener">
    <img :src="logoDswb" style="height: 60px; margin-bottom: 0.7em;" />
  </a>
  <div style="font-family: 'Roboto Mono', monospace; font-weight: 700; font-size: 2.4em; color: #0A1119;">
    Thank you
  </div>
  <div style="font-size: 1.05em; color: #0A1119; margin-top: 0.3em;">
    Questions &amp; hands-on session
  </div>
  <a href="mailto:david.sarrat@isglobal.org" style="font-family: 'Roboto Mono', monospace; font-size: 0.85em; color: #0A1119 !important; margin-top: 0.5em; text-decoration: none;">
    david.sarrat@isglobal.org
  </a>
  <div class="logo-grid" style="margin-top: 1.3em;">
    <a v-for="p in row1" :key="p.alt" :href="p.url" target="_blank" rel="noopener" class="logo-badge">
      <img :src="p.src" :alt="p.alt" :style="{ height: p.h + 'px' }" />
    </a>
  </div>
  <div class="logo-grid" style="margin-top: 14px;">
    <a v-for="p in row2" :key="p.alt" :href="p.url" target="_blank" rel="noopener" class="logo-badge">
      <img :src="p.src" :alt="p.alt" :style="{ height: p.h + 'px' }" />
    </a>
  </div>
</div>
