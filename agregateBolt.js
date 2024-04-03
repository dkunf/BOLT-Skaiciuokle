const fs = require("fs");

console.log(` Labas, ši programėlė skirta tam, kad paskaičiuoti kiek yra uždirbta BOLT Food per metus.
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

`);

//čia kelias į folderį su ataskaitom.Butinai turi baigtis su '/'
//jeigu šis failas yra kartu su ataskaitom, tai nieko čia keisti nereikia
const folderName = "./";

const fieldsOfInterest = [
  "Sąskaita klientui",
  "Prekyvietės mokestis",
  "Laukimo kompensacija",
  "Patikslinimai: Pristatymo premija",
  "Patikslinimai: Pristatymo kompensacija",
  "Depozitai",
  "Įskaitant arbatpinigius kurjeriui",
  "Grynieji pinigai partneriui",
  "Grynieji pinigai iš kliento",
  "Gauta iš kliento",
  "Savaitinis uždarbis",
  "Skola už praėjusį laikotarpį",
  "Skolos likutis",
  "Savaitinė išmoka",
];

const metai = [];

fs.readdirSync(folderName).forEach((file) => {
  try {
    const savaite = {};
    var data = fs.readFileSync(folderName + file, "utf8");

    let laikotarpis = /([0-9\-]+\ \--\ [0-9\-]+)/.exec(file);
    if (laikotarpis) savaite.laikotarpis = laikotarpis[1];
    else savaite.laikotarpis = 0;

    fieldsOfInterest.forEach((field) => {
      savaite[field] = getValueOrZero(field, data);
    });

    if (savaite.laikotarpis !== 0) metai.push(savaite);
  } catch (e) {
    console.log("Error:", e.stack);
  }
});

//Total earned per year
let columnsToAdd = [
  "Sąskaita klientui",
  "Prekyvietės mokestis",
  "Laukimo kompensacija",
  "Patikslinimai: Pristatymo premija",
  "Patikslinimai: Pristatymo kompensacija",
  "Depozitai",
];

let viso = duotuStulpeliuSuma(columnsToAdd);

//now we create file results.csv and write to it
const resultsFile = folderName + "results.csv";
const writeStream = fs.createWriteStream(resultsFile);

writeStream.write("Laikotarpis," + fieldsOfInterest.join(",") + "\n");

metai.forEach((savaite) => {
  const eilute = Object.values(savaite).join(",") + "\n";
  writeStream.write(eilute);
});

writeStream.write("\n");
writeStream.write("\n");
writeStream.write(
  `Iš viso uždirbai,${viso},` +
    "\n ši suma paskaičiuota sudėjus stulpelius:," +
    "\nSąskaita klientui," +
    "\nPrekyvietės mokestis," +
    "\nLaukimo kompensacija," +
    "\nPatikslinimai: Pristatymo premija," +
    "\nPatikslinimai: Pristatymo kompensacija," +
    "\nDepozitai,"
);
writeStream.write("\n");
writeStream.write("\n");
writeStream.write("\n");
writeStream.write(
  "Mokesčių kalkuliatorius čia: ," +
    "https://www.sodra.lt/lt/skaiciuokles/individualios_veiklos_skaiciuokle?v=21a"
);

writeStream.end();

console.log(`Šitame aplanke turėjo atsirasti naujas failas "results.csv",
Gali jį atidaryti su Excel pagalba arba "Open Office" arba "Libre Office",
Ir ten galima dar daug įdomių dalykų paskaičiuoti.
Jeigu yra klausymų gali drąsiai rašyti  dkunfchaworl@gmail.com
`);

function getValueOrZero(textToFind, fileContents) {
  let beingChecked = new RegExp(`${textToFind},+(\-?[0-9\.]+)`, "gi");
  let value = beingChecked.exec(fileContents);
  if (value) return Number(value[1]);
  else return 0;
}

function duotuStulpeliuSuma(stulpeliai) {
  let total = 0;
  stulpeliai.forEach((column) => {
    let aColSum = metai
      .map((obj) => obj[column])
      .reduce((acu, val) => acu + val);
    total += aColSum;
  });
  return total;
}
