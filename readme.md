Labas,

Ši programėlė skirta tam, kad paskaičiuoti kiek yra uždirbta BOLT Food per metus.

Ji tiesiog sugeneruoja results.csv failą, kuriame vienos savaitės rezultatai tampa viena eilute.

Tai leidžia lengvai viską paskaičiuoti ne atidarant kiekvieno iš 50 failų ir skaičiuojant rankiniu budu.

**Instrukcijos:**

1. Reikia kur nors sukurti aplanką ir ten sudėti visas savaitines ataskaitas, kurias
   atsiuntė BOLT per metus. Visos ataskaitos turi buti .CSV formatu.

2. Ši programėlė turi buti tame pačiame aplanke kaip ir tos ataskaitos.
   Ją galima parsisiusti iš [Github](https://github.com/dkunf/BOLT-Skaiciuokle/blob/master/agregateBolt.js) arba nukopijuoti jos tekstą į tekstinį failą o po to išsaugoti su .js išplėtimu.

3. Programėlė sukurta Javascript programavimo kalba ir jos veikimui reikalinga NodeJs aplinka,
   kurią galima parsisiusti iš

[https://nodejs.org/en/download](https://nodejs.org/en/download)

ir instaliuoti savo kompe.

4. Tam kad paleisti šią programėlę reikia atidaryti terminalą ir parašyti:

**_node agregateBolt.js_**

Tiesa reikia buti tame pačiame aplanke kur yra programėlė ir tavo ataskaitos.

Programėlės veikimui internetas nereikalingas.

Naudokites į sveikatą.

Jeigu tingi siustis iš savo gmail paskyros visas ataskaitas rankiniu budu tai turiu skriptą kuris tą padaro. Parašyk jeigu jo reikia.

Kai filtruoji Bolto laiškus geriausia į gmail paieškos laukeli įdėti:

from:(lithuania-food@bolt.eu) „Bolt Food“ savaitinė ataskaita after:2023/1/1 before:2023/12/31

tada matysi tik visus reikalingus laiškus per metus.
O skriptas tada gali atidaryti kiekvieną laišką, paspausti jame nuorodą ir tokiu budu atsiusti .csv failą.
