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

# Matematik grundforløbet - del.12

---

## Lektion 1 : Lineær regression & Forklaringsgrad

---

## Lineær regression - med mindste kvadraters metode

<table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <td><strong>Lineær regression</strong></td>
    <td>Finder den rette linje, der bedst forklarer sammenhængen mellem x og y ved at minimere summen af kvadrerede afvigelser:</br>
    $\Large \hat{y}_i = \hat{a} \cdot x_i + \hat{b} $</td>
  </tr>
  <tr>
    <td><strong>Mindste kvadraters metode</strong></td>
    <td>At finde a og b, så summen af kvadrerede afvigelser mellem de observerede punkter og den lineære model bliver så lille som muligt.<br>
      Mindste kvadraters sum skal være så lille som overhovedet muligt:<br>
      $\Large S(\hat{a},\hat{b}) = \sum_{i=1}^n \big( y_i - \hat{y}_i \big)^2 $
    </td>
  </tr>
<tr>
  <td><strong>Hældning</strong></td>
  <td>
    $\Large \bar{x} $  og $ \bar{y} $ er begge gennemsnit </br>
    $\LARGE \hat{a} = \huge \frac{\sum_{i=1}^n (x_i - \bar{x})(y_i - \bar{y})}{\sum_{i=1}^n (x_i - \bar{x})^2} $
  </td>
</tr>
<tr>
  <td><strong>Skæring</strong></td>
  <td>
    $ \Large \hat{b }= \bar{y} - \hat{a} \cdot \bar{x} $
  </td>
</tr>
</table>



---

## Forklaringsgraden R² - ny formel

<table border="1" cellpadding="8" cellspacing="0">

  <tr>
    <td><strong>Forklaringsgrad (R²)</strong></td>
    <td>
      Dette er et tal mellem 0 og 1, der beskriver hvor godt "den rette linje" kan beskrive dataen.<br><br>
      \( \Large  R^2 \huge = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i-\bar y)^2} \)
    </td>
  </tr>
</table>

---

### Opgave om outlier-effekten - fra arbejds-selv dagen

**I Model 1** er fejlen (residualet) fordelt ligeligt, så alle 4 punkter i datasættet har en fejl på præcis $2$.

**I Model 2** rammer linjen 3 af punkterne helt perfekt (fejl = $0$), men det fjerde punkt er en "outlier" (en fejlmåling) med en stor fejl på $5$.

***Spørgsmål1: Beregn den samlede kvadratsum (Residual Sum of Squares - RSS) for både Model 1 og Model 2.***

$ \sum_{i=1}^4 (y_i - \hat{y}_i)^2 = 2^2 + 2^2 + 2^2 + 2^2 = 16 $

$ \sum_{i=1}^4 (y_i - \hat{y}_i)^2 = 5^2 + 0^2 + 0^2 + 0^2 = 25 $ 

***Spørgsmål2: Hvilken model vil computeren vælge som den "bedste linje" ifølge *Mindste kvadraters metode*?***

***Spørgsmål3: Hvad betyder det for "outliers" i jeres egne forsøg?***



----------------------------------------------------------------------------------------------------------------------------------------------------

### Opgaver - resten af timen

***I skal anvende computer til disse opgaver***  Lav opgaverne vha. et regneark f.eks. excel eller google sheets  
I må ikke anvende den indbyggede regression - I skal selv indskrive formlerne: 

### 2.17  

### 2.18  

----------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------

## lektion 2 : Opgave gennemgang & Projekt-info

----------------------------------------------------------------------------------------------------------------------------------------------------

"Frivillig" præsenterer 2.17 med computer

"Frivillig" præsenterer 2.18 med computer

Jeg præsentrer projektet om den ["Vitruvianske mand" : matematik projekt 1](/afl/projekt1.pdf)

