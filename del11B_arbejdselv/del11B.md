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

# Dagens matematikopgave: Mindste kvadraters metode

Hej 1.g! I dag skal vi dykke ned i teorien bag, hvordan jeres computer finder den helt perfekte tendenslinje, når I laver regression. 

I skal starte med at læse artiklen på Webmatematik. Klik på linket herunder for at åbne den:

👉 **[Læs artiklen: Mindste kvadraters metode på Webmatematik](https://webmatematik.dk)**

Når I har læst artiklen grundigt igennem, skal I løse følgende opgaver i jeres arbejdsdokument.

---

### Del 1: Forstå artiklens eksempler og figurer

* **Opgave 1:** Kig på den allerførste figur i artiklen med de tre farvede linjer (blå, grøn og rød). Hvilken af de tre linjer viser sig til sidst i artiklen faktisk at være den, der kom tættest på den matematiske "bedste rette linje"?
* **Opgave 2:** Webmatematik bruger punktet $(8,7)$ i sit eksempel.
  * Hvad kaldes afstanden $d_1$ fra punktet og hen til linjen?
  * Hvilken formel bruger de i artiklen til at beskrive denne afstand?

### Del 2: Matematikken bag metoden

* **Opgave 3:** Hvad sker der visuelt i koordinatsystemet, når vi "sætter afstandene i anden"? Hvilken geometrisk figur danner vi ud fra hvert punkt?
* **Opgave 4:** Hvad er målet med *Mindste kvadraters metode*? Forklar med dine egne ord, hvad det er, computeren eller matematikken forsøger at gøre så lille (minimere) som muligt.

### Del 3: Dataanalyse og kritiske grænser

* **Opgave 5: "Outlier-effekten"**  
  Forestil dig, at du har to forskellige modeller for det samme datasæt:
  * **I Model 1** er fejlen (residualet) fordelt ligeligt, så alle 4 punkter i datasættet har en fejl på præcis $2$.
  * **I Model 2** rammer linjen 3 af punkterne helt perfekt (fejl = $0$), men det fjerde punkt er en "outlier" (en fejlmåling) med en stor fejl på $5$.
  
  * **A)** Beregn den samlede kvadratsum (Residual Sum of Squares - RSS) for både Model 1 og Model 2.
  * **B)** Hvilken model vil computeren vælge som den "bedste linje" ifølge *Mindste kvadraters metode*? Forklar, hvorfor metoden straffer én stor fejl meget hårdere end flere små fejl, og hvad det betyder for outliers i jeres egne forsøg.

---