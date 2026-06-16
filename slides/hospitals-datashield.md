---
clicks: 11
---
<div class="cdm-scene" :class="{ split: $clicks >= 3, collide: $clicks >= 4, rules: $clicks >= 7, converted: $clicks >= 8, merged: $clicks >= 9 }">
<div v-click class="speech-bubble tail-center bubble-a">
Let's share our data with <strong>DataSHIELD</strong>!
</div>
<div v-click class="speech-bubble tail-center bubble-b">
OK!
</div>
<div class="speech-bubble tail-side bubble-ohno" :class="{ 'is-on': $clicks >= 5 }">
Oh no! What can we do now?
</div>
<div class="speech-bubble tail-side bubble-cdm" :class="{ 'is-on': $clicks >= 6 }">
Let's use a <strong>common data model (CDM)</strong>!
</div>
<div class="speech-bubble tail-side bubble-collab" :class="{ 'is-on': $clicks >= 10 }">
We can now collaborate!
</div>
<div class="speech-bubble tail-side bubble-yay" :class="{ 'is-on': $clicks >= 10 }">
Yay!
</div>
<div class="cdm-unit unit-a">
<Hospital :size="180" />
<div class="hospital-label">Hospital A</div>
</div>
<div class="cdm-unit unit-b">
<Hospital :size="180" body="#dfe7ee" cross="#00B04F" base="#FEAE00" window-color="#8FB6A6" />
<div class="hospital-label">Hospital B</div>
</div>
<div class="cdm-table table-a">
<div class="cdm-unit-tag">Hospital A</div>
<table>
<thead><tr><th>PatientID</th><th>Sex</th><th>BirthDate</th><th>Glucose <span class="cdm-diff">(mg/dL)</span></th></tr></thead>
<tbody>
<tr><td>001</td><td>M</td><td>1985-03-12</td><td>110</td></tr>
<tr><td>002</td><td>F</td><td>1990-07-25</td><td>95</td></tr>
<tr><td>003</td><td>F</td><td>1978-11-30</td><td>102</td></tr>
</tbody>
</table>
</div>
<div class="cdm-table table-b">
<div class="cdm-unit-tag">Hospital B</div>
<table>
<thead><tr><th>id</th><th>gender</th><th>dob</th><th>glucose_<span class="cdm-diff">mmol_l</span></th></tr></thead>
<tbody>
<tr><td>b1</td><td>1</td><td>21/06/1983</td><td>6.7</td></tr>
<tr><td>b2</td><td>2</td><td>14/02/1995</td><td>4.9</td></tr>
<tr><td>b3</td><td>1</td><td>09/09/1970</td><td>7.4</td></tr>
</tbody>
</table>
</div>
<div class="cdm-clash">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2.5 L22.5 21 H1.5 Z" fill="#ffffff"/><rect x="11" y="9" width="2" height="6" rx="1" fill="#ED1C24"/><rect x="11" y="16.5" width="2" height="2" rx="1" fill="#ED1C24"/></svg>
<span>Incompatible data models</span>
</div>
<div class="rules-stage">
<div class="rules-head">We'll set the following rules:</div>
<div class="rules-grid">
<div class="rule-card"><div class="rule-var">person_id</div><div class="rule-desc">One shared ID column</div></div>
<div class="rule-card"><div class="rule-var">gender</div><div class="rule-desc">Concept-coded: Male / Female</div></div>
<div class="rule-card"><div class="rule-var">birth_date</div><div class="rule-desc">ISO 8601: YYYY-MM-DD</div></div>
<div class="rule-card"><div class="rule-var">glucose</div><div class="rule-desc">Fixed unit: mg/dL</div></div>
</div>
</div>
<div class="cdm-table harm-a">
<div class="cdm-unit-tag">Hospital A · CDM format</div>
<table>
<thead><tr><th>person_id</th><th>gender</th><th>birth_date</th><th>glucose_mgdl</th></tr></thead>
<tbody>
<tr><td>A01</td><td>Male</td><td>1985-03-12</td><td>110</td></tr>
<tr><td>A02</td><td>Female</td><td>1990-07-25</td><td>95</td></tr>
<tr><td>A03</td><td>Female</td><td>1978-11-30</td><td>102</td></tr>
</tbody>
</table>
</div>
<div class="cdm-table harm-b">
<div class="cdm-unit-tag">Hospital B · CDM format</div>
<table>
<thead><tr><th>person_id</th><th>gender</th><th>birth_date</th><th>glucose_mgdl</th></tr></thead>
<tbody>
<tr><td>B01</td><td>Male</td><td>1983-06-21</td><td>121</td></tr>
<tr><td>B02</td><td>Female</td><td>1995-02-14</td><td>88</td></tr>
<tr><td>B03</td><td>Male</td><td>1970-09-09</td><td>134</td></tr>
</tbody>
</table>
</div>
<div class="cdm-table merged-table">
<div class="cdm-unit-tag">✓ Combined dataset</div>
<table>
<thead><tr><th>person_id</th><th>gender</th><th>birth_date</th><th>glucose_mgdl</th></tr></thead>
<tbody>
<tr><td>A01</td><td>Male</td><td>1985-03-12</td><td>110</td></tr>
<tr><td>A02</td><td>Female</td><td>1990-07-25</td><td>95</td></tr>
<tr><td>A03</td><td>Female</td><td>1978-11-30</td><td>102</td></tr>
<tr><td>B01</td><td>Male</td><td>1983-06-21</td><td>121</td></tr>
<tr><td>B02</td><td>Female</td><td>1995-02-14</td><td>88</td></tr>
<tr><td>B03</td><td>Male</td><td>1970-09-09</td><td>134</td></tr>
</tbody>
</table>
</div>
<div class="cdm-tagline" :class="{ 'is-on': $clicks >= 11 }">
Common Data Models enable <strong style="color:#00B04F;">more robust, large-scale research</strong>.
</div>
</div>
