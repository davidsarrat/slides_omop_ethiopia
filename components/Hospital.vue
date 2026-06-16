<script setup>
defineProps({
  size: { type: [Number, String], default: 170 },
  body: { type: String, default: '#f4efe9' },
  cross: { type: String, default: '#ED1C24' },
  base: { type: String, default: '#00B04F' },
  windowColor: { type: String, default: '#7FB7C8' },
  flag: { type: Boolean, default: false },
})
</script>

<template>
  <svg :width="size" viewBox="0 0 140 168" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- ground shadow -->
    <ellipse cx="70" cy="160" rx="54" ry="6" fill="#000000" opacity="0.18" />

    <!-- optional rooftop flag (variant marker) -->
    <g v-if="flag">
      <rect x="98" y="14" width="2.4" height="22" rx="1" fill="#0A1119" opacity="0.8" />
      <path d="M100.4 15 L116 19.5 L100.4 24 Z" :fill="base" />
    </g>

    <!-- main building -->
    <rect x="14" y="54" width="112" height="98" rx="7" :fill="body" />

    <!-- entrance plaque -->
    <rect x="40" y="34" width="60" height="24" rx="6" fill="#ffffff" />
    <!-- medical cross on plaque -->
    <g :fill="cross">
      <rect x="66" y="38" width="8" height="16" rx="1.6" />
      <rect x="62" y="42" width="16" height="8" rx="1.6" />
    </g>

    <!-- windows -->
    <g :fill="windowColor">
      <rect x="28" y="70" width="18" height="16" rx="2.5" />
      <rect x="61" y="70" width="18" height="16" rx="2.5" />
      <rect x="94" y="70" width="18" height="16" rx="2.5" />
      <rect x="28" y="96" width="18" height="16" rx="2.5" />
      <rect x="94" y="96" width="18" height="16" rx="2.5" />
    </g>
    <g fill="#ffffff" opacity="0.5">
      <rect x="28" y="70" width="6" height="16" rx="2.5" />
      <rect x="61" y="70" width="6" height="16" rx="2.5" />
      <rect x="94" y="70" width="6" height="16" rx="2.5" />
      <rect x="28" y="96" width="6" height="16" rx="2.5" />
      <rect x="94" y="96" width="6" height="16" rx="2.5" />
    </g>

    <!-- door -->
    <rect x="58" y="116" width="24" height="36" rx="3" fill="#0A1119" opacity="0.82" />
    <rect x="69.2" y="124" width="1.6" height="20" fill="#FEAE00" opacity="0.7" />

    <!-- base line -->
    <rect x="14" y="148" width="112" height="4" rx="2" :fill="base" />
  </svg>
</template>
