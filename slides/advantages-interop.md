---
clicks: 1
---
<div class="flex flex-col h-full">
<h2 style="font-size: 1.15em; line-height: 1.35;">What are the advantages of adhering to a widely-extended common data model?</h2>
<div class="flex-1 flex flex-col items-center justify-center" style="gap: 0.8rem;">
<div class="flex items-center" style="gap: 0.7rem;">
<div class="adv-num">1</div>
<div style="font-family: 'Roboto Mono', monospace; font-size: 1.3em; font-weight: 600; color: #5cebff;">Universal interoperability</div>
</div>
<div style="width: 660px; max-width: 88%;"><WorldMap :revealed="$clicks >= 1" /></div>
<div class="join-msg" :class="{ show: $clicks >= 1 }">The world is waiting for you to join!</div>
</div>
</div>
