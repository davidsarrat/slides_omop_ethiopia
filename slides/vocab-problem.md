---
clicks: 4
---
<div class="voc-scene">
<div class="voc-unit voc-a"><Hospital :size="170" /><div class="voc-label">Hospital A</div></div>
<div class="voc-unit voc-h1"><Hospital :size="110" body="#dfe7ee" cross="#2f80d6" base="#2f80d6" window-color="#9fc2e6" /><div class="voc-label">Hospital B</div></div>
<div class="voc-unit voc-h2"><Hospital :size="110" body="#efe4e4" cross="#ED1C24" base="#FF6900" window-color="#c89b9b" /><div class="voc-label">Hospital C</div></div>
<div class="voc-unit voc-h3"><Hospital :size="110" body="#e2ecdf" cross="#00B04F" base="#78C71B" window-color="#9cc090" /><div class="voc-label">Hospital D</div></div>
<div class="speech-bubble tail-left voc-q" :class="{ 'is-on': $clicks >= 1 }">Do you have patients with <strong>Chickenpox</strong>?</div>
<div class="speech-bubble tail-side-right voc-r r1" :class="{ 'is-on': $clicks >= 2 }">No, we only have <strong>Varicella</strong></div>
<div class="speech-bubble tail-side-right voc-r r2" :class="{ 'is-on': $clicks >= 3 }">No, we only have <strong style="font-family: 'Noto Sans Ethiopic', sans-serif;">ጉድፍ</strong></div>
<div class="speech-bubble tail-side-right voc-r r3" :class="{ 'is-on': $clicks >= 4 }">No, we only have <strong>B01.9</strong> <span class="voc-note">(ICD-10)</span></div>
</div>
