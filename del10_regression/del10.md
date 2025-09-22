<!-- MathJax loader -->
<script>
window.MathJax = {
  tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
  svg: { fontCache: 'global' }
};
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

<!-- Styling så alle tabelceller bliver topstilede -->
<style>
  table td {
    vertical-align: top;
  }
</style>

# Matematik grundforløbet - del.10

---

## Lineær regression - vha. mindste kvadraters metode

<p>Lineær regression bruges til at finde en sammenhæng mellem to størrelser i data, f.eks. fra et forsøg. 
Den gør det muligt at forudsige én variabel ud fra en anden og vurdere, hvor godt den rette linje passer til målingerne.</p>

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td><strong>Lineær regression</strong></td>
    <td>Finder den rette linje, der bedst forklarer sammenhængen mellem x og y ved at minimere summen af kvadrerede afvigelser:</br>
    \( \hat{y_i} = a \cdot x_i + b \)</td>
  </tr>
  <tr>
    <td><strong>Mindste kvadraters metode</strong></td>
    <td>At finde a og b, så summen af kvadrerede afvigelser mellem de observerede punkter og den lineære model bliver så lille som muligt.<br>
      Mindste kvadraters sum skal være så lille som overhovedet muligt:<br>
      \( S(a,b) = \sum_{i=1}^n \big( y_i - \hat{y_i} \big)^2 \)
    </td>
  </tr>
<tr>
  <td><strong>Hældning</strong></td>
  <td>
    \( \bar{x} \)  og \( \bar{y} \) er begge gennemsnit </br>
    \( a = \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2} \)
  </td>
</tr>
<tr>
  <td><strong>Skæring</strong></td>
  <td>
    \( b = \bar{y} - a \cdot \bar{x} \)
  </td>
</tr>
</table>

---

### Opgaver 
***I skal anvende computer til disse opgaver*** 

Lav opgaverne vha. et regneark f.eks. excel eller google sheets  
I må ikke anvende den indbyggede regression - I skal selv indskrive formlerne: 

- 2.14  
- 2.15  
- 2.16  

---
