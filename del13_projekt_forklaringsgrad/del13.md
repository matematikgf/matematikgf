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

# Matematik grundforløbet - del.13
---

# Hvorfor er forklaringsgraden god/dårlig ?

## Når vi arbejder med lineær regression er forklaringsgraden givet ved formlen:

<html>
\( \LARGE R^2 = 1 - \frac{\sum (y_i - \hat y_i)^2}{\sum (y_i-\bar y)^2} \)
</html>

## Følgende er defineret, specifikt for jeres projekt 

I jeres projekt har I forskellige modeller I skal eftervise på formlen, læg mærke til der ikke er nogen "b":

<html>
\( \hat{y} = a \cdot x \)
</html>

Her er y højden af et menneske og x en eller anden længde/afstand målt et sted på kroppen.
Det er sandsynligt at denne sammenhæng måles med en vis usikkerhed dette kan vi udtrykke således, hvor e er en fejl:
<html>
\( y = a \cdot x + e \)
</html>

Hvis e er ligeligt fordelt over alle data i datasættet må det gælde at:

<html>
\( \bar{e} =  \frac{\sum_{i=1}^n e_i}{n} \approx 0 \)
</html>

Og gennemsnittet af de målte højder er:

<html>
\( \bar{y} =  \frac{\sum_{i=1}^n a \cdot x + e }{n} \approx   \frac{\sum_{i=1}^n a \cdot x }{n} = a \cdot \bar{x} \)
</html>


## Indsætter vi følgende i formlen for forklaringsgraden R²

<html>
\( \Large R^2 = 1 - \frac{\sum ((a \cdot x_i + e) - (a \cdot x_i))^2}{\sum ((a \cdot x_i + e)-\bar y)^2}  = 1 - \frac{\sum e^2}{\sum ((a \cdot x_i + e)- a \cdot \bar x)^2}    =   1 - \frac{\sum e^2}{\sum (a \cdot ( x_i - \bar x ) + e)^2}   =  1 - \frac{\sum e^2}{\sum a^2 \cdot (x - \bar{x})^2 + \sum e^2 + 2 \cdot a \cdot \sum (x - \bar{x})e}    \)
</br>
</html>


Dette ser ret indviklet ud, men lad os se om vi kan forenkle det. Lad os set på det sidste led i nævneren: 

<html> \( 2 a \cdot \sum  e \cdot (x - \bar x)  \approx  0 \) </html> 

give tilnærmelsesvis nul, da e og parantesen er uafhængige og tilfældigt fordelt omkring 0,- er dette bare et spørgsmål om at have nok data nok. Vi har nu:
<html>
\( R² =  1 - \frac{\sum e^2}{\sum a^2 \cdot (x - \bar{x})^2 + \sum e^2 }    \)
</html>

Denne formel kan omkskrives til:

<html>
\( \LARGE R² =   \frac{ a^2 \cdot \sum (x - \bar{x})^2 }{ a^2 \cdot \sum  (x - \bar{x})^2 + \sum e^2 }    \)
</html>

Her skal I lægge mærke til følgende:

<html>\( \Large a^2 \cdot \sum (x - \bar{x})^2 \)</html>  

Denne sum er et udtryk for hvor stor "varians" der er i jeres målinger,- altså hvor store er forskellen imellem mindste og største måling
 

<html>\( \Large  \sum (e)^2 \)</html>  

Denne sum er et udtryk for hvor stor "varians" der er i fejlene på målingerne
 

## Opgaver i forklaringsgrad

1. Hvis a = 1, I har måledata, der går fra 170 til 180 cm og fejlen e er på omkring -5 til 5 cm. hvad tror du det betyder for værdien af forklaringsgraden?
2. Hvis a = 4, I har måledata, der går fra 50 til 40 cm og fejlen e er på omkring -5 til 5 cm. hvad tror du det betyder for værdien af forklaringsgraden?
3. Har det nogen betydning for forklaringsgraden i opgave 1 og opgave 2 om i har 10 eller 1000 datapunkter til rådighed?