Labas, ši programėlė skirta tam, kad paskaičiuoti kiek yra uždirbta BOLT Food per metus.
Ši programėlė tiesiog sugeneruoja results.csv failą kuriame kiekviena savaitė tampa viena eilute ir
tai leidžia lengvai viską paskaičiuoti ne atidarant kiekvieno iš 50 failų ir skaičiuojant rankiniu budu.

Instrukcijos:

1. Reikia kur nors sukurti aplanką ir ten sudėti visas savaitines ataskaitas, kurias
   atsiuntė BOLT per metus. Visos ataskaitos turi buti .CSV formatu.

2. Ši programėlė turi buti tame pačiame aplanke kaip ir tos ataskaitos, kad ji suveiktų.

3. Ši programėlė sukurta Javascript programavimo kalba ir tam kad ji veiktų reikalinga NodeJs aplinka,
   kurią galima parsisiusti iš

https://nodejs.org/en

ir instaliuoti savo kompe.

4. Tam kad paleisti šią programėlę reikia atidaryti terminalą ir parašyti:

node agregateBolt.js

Tiesa reikia buti tame pačiame aplanke kur yra programėlė ir tavo ataskaitos, arba reiks nurodyti kelią iki jos:

node kažkoks/kelias/agregateBolt.js

Programėlės veikimui internetas nereikalingas.
