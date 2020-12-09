import {Injectable} from 'angular2/core';

export class Mortadelle {
  constructor(
    public id: number,
    public titolo: string,
    public titolong: string,
    public img: string,
    public logo: string,
    public descrizione: string,
    public descrizioneng: string,
    public ingredienti: string[],
    public ingredienting: string[],
    public addon: string[],
    public addong: string[],
    public tab: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[],
    public tabeng: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[]
  ){}
}
export class Mortadellebio {
  constructor(
    public id: number,
    public titolo: string,
    public titolong: string,
    public img: string,
    public logo: string,
    public descrizione: string,
    public descrizioneng: string,
    public ingredienti: string[],
    public ingredienting: string[],
    public addon: string[],
    public addong: string[],
    public tab: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[],
    public tabeng: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[]
  ){}
}

export class Piatti {
  constructor(
    public id: number,
    public ghi: string,
    public ghing: string,
    public img: string,
    public descrizione: string,
    public descrizioneng: string,
    public tab: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[],
    public tabeng: {
      cod:string,
      descrizione:string,
      peso:string,
      px:string,
      ct:string,
      d:string,
      h:string,
    }[]
  ){}
}

@Injectable()
export class prodottiService{
  getMortadelle() { return mortadellePromise; }
  getMortadellebio() { return mortadellebioPromise; }
  getPiatti() { return piattiPromise; }
  getMortadella(id: number | string){
    return mortadellePromise
      .then(mortadelle => mortadelle_db.filter(i => i.id === +id)[0]);
  }
  getMortadellabio(id: number | string){
    return mortadellebioPromise
      .then(mortadellebio => mortadellebio_db.filter(i => i.id === +id)[0]);
  }
  getPiatto(id: number | string){
    return piattiPromise
      .then(piatti => piatti_db.filter(i => i.id === +id)[0]);
  }
}

var piatti_db = [

  new Piatti(
  1,
  'images/gp.svg',
  'images/gp1.svg',
  'images/Galatina.jpg',
  `La galantina di pollo viene prodotta con carni di pollo selezionate e con una procedura
che richiede esperienza ed attenzione.
L’impasto è prodotto macinando le parti nobili del petto insieme a spezie naturali.
La cottura a bagnomaria permette al prodotto di cuocersi lentamente lasciando sprigionare
al taglio sapori unici.`,
`This chicken galantine is made with carefully selected chicken meat and a procedure that requires  both care and experience.
The mix is made by mincing prime chicken breasts and adding natural spices.
The product is then poached to ensure that it cooks slowly and is ready to release its unique flavours at the first slice.`,
  [{
    cod:'501003',
    descrizione:'Galantina reale di pollo',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'15',
    h:'60'
  }],
  [{
    cod:'501003',
    descrizione:'Chicken Galantine',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'15',
    h:'60'
  }]
  ),
  new Piatti(
  2,
  'images/rb.svg',
  'images/rb1.svg',
  'images/Roastbeef.jpg',
  `Viene impiegata solo fesa selezionata di bovino adulto
per produrre artigianalmente questo Roast-Beef fragrante,
morbido e profumato.
Una volta rifilata la fesa, viene marinata con sale  e spezie
e cotta lentamente per 4 ore in forno.
Un secondo piatto pronto per essere gustato.`,
`Only prime adult beef rump is used to handcraft this tender and fragrant Roast-Beef.
Once trimmed, the rump is cured with salt and spices and slowly oven-roasted for 4 hours.
A main dish ready to be tasted.`,
  [{
    cod:'501001',
    descrizione:' Manzo di razza Limousine cotto al naturale',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'20',
    h:'60'
  }],
  [{
    cod:'501003',
    descrizione:'Naturally cooked Limousine breed beef',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'15',
    h:'60'
  }]
  ),

  new Piatti(
  3,
  'images/cs.svg',
  'images/cs.svg',
  'images/Carne_Salada.jpg',
  `Carne marinata con spezie originarie trentine, settimana
dopo settimana viene delicatamente massaggiata
per permettere agli odori naturali di fondersi con i succhi
della carne. Da affettare finemente o da assaporare tagliata
più spessa e passata sulla griglia, è buonissima in tutte
le composizioni di piatto in cui vorrete renderla protagonista.`,
`Cured with a mixture of typical spices from Trento, this product is delicately massaged for week after week to allow its natural flavourings to blend with the juices of the meat.
Exquisite when finely sliced and distinctively flavoursome when cut slightly thicker and lightly grilled, Carne Salada can turn any meal into a banquet.`,
  [{
    cod:'501002',
    descrizione:'Antica ricetta trentina con marinatura tipica',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'15',
    h:'60'
  }],
  [{
    cod:'501003',
    descrizione:'Traditionally cured, typical Trento speciality',
    peso:'4,5 kg',
    px:'4',
    ct:'18',
    d:'15',
    h:'60'
  }]
  )
]

var mortadellebio_db = [
  new Mortadellebio(
    1,
    'images/sc.svg',
    'images/sc1.svg',
    'images/Sette_Chiese.jpg',
    'images/bio.svg',
    `   Unica Mortadella Biologica prodotta a Bologna. La Sette Chiese è lavorata
  artigianalmente con carni nazionali e biologiche, selezionate da allevamenti locali.
  L’importanza di utilizzare prodotti biologici per creare questa mortadella è essenziale per dare
  al consumatore finale un’eccellenza del territorio bolognese.`,
    ` The only organic mortadella produced in Bologna.
     Our Mortadella Sette Chiese is handcrafted from locally sourced, organic meats.
     To guarantee the consumer the ultimate excellence of local Bolognese traditions,
  this mortadella is created using organic products only.`,
      ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
      ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
      ['Senza Glutine','Senza Lattosio'],
      ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1301003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1301004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1301002',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1301003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1301004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1301002',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),
  new Mortadellebio(
    2,
    'images/sb.svg',
    'images/sr1.svg',
    'images/Salame_Rosa.jpg',
    'images/bio.svg',
      `     Prodotto dalla carne della mortadella, gustoso e antico prodotto tipico bolognese
  dal caratteristico profumo delicato. Aromatizzato ed insaccato a mano in vescica naturale,
  una volta cotto è pronto per essere affettato. Si utilizzano parti di spalla, gola e prosciutto tagliati
  a mano in punta di coltello che, uniti all’impasto per mortadella, danno forma ad un tripudio
  di delicatezza. Il sapore è un incontro tra il gusto del prosciutto cotto appena sfornato e una
  mortadella artigianale, delicatissimo al palato, servito a temperatura ambiente diventa il principe
  dei salumi della tradizione bolognese. Prodotto con carni da allevamenti biologici per soddisfare
  l’esigenze della nostra clientela e per esaltare l’eccellenza del territorio bolognese.`,
    ` Produced from mortadella meat, this traditional Bolognese salami boasts a distinctively delicate fragrance and an exquisite flavour.
     Mixed with natural flavourings and hand-stuffed in natural bladder casings, our Salame Rosa is ready to slice as soon as it is cooked.
     Shoulder and throat cuts are used as well as hand-diced ham  that when mixed with the mortadella create a deliciously delicate galaxy of flavours. The final result is an exquisite combination of freshly cooked ham and handcrafted mortadella. Served at room temperature, it is the prince of Bologna cured meats. Made from pork cuts carefully sourced from organic farms,
    our Salame Rosa satisfies our customers' exacting tastes and celebrates the excellence of local Bolognese traditions.`,
    ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1801003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1801004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1801002',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1801003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1801004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1801002',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  )
];


var mortadelle_db = [
  new Mortadelle(
    1,
    'images/mc.svg',
    'images/mc1.svg',
    'images/Classica.jpg',
    'images/slow.svg',
    ` La Mortadella Classica Presidio Slow Food è prodotta dalla famiglia Scapin
con carni fresche italiane provenienti da allevamenti allo stato semibrado o biologici.
Impastata con lardelli, sale , pepe nero in grani ed insaccata manualmente è una delizia di sapori.
Prodotta seguendo il disciplinare del Presidio Slow Food dall’inizio alla fine, il profumo
e la particolarità di questa mortadella, olfattivamente parlando, sono tutti da scoprire.`,
` Mortadella Classica Presidio Slow Food is produced by the Scapin family with fresh Italian meat from semi-free-range or organically reared sources.
Mixed with lardons, salt and black pepper grains and then hand-stuffed, this mortadella is a delicious combination of flavours.
Produced from start to finish in compliance with Presidio Slow Food standards, the fragrance and special flavours of this mortadella are an exquisite voyage of discovery.`,
    ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1401003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1401004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1401002',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1401003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1401004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1401002',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),
  new Mortadelle(
    2,
    'images/mm.svg',
    'images/mm1.svg',
    'images/MoraMora.jpg',
    'images/slow.svg',
    `  La Mortadella Mora Mora è prodotta artigianalmente dalla famiglia Scapin solo
con carni selezionate della pregiata razza autoctona Mora Romagnola.
La Mora Romagnola vive allo stato brado, si alimenta principalmente di ghiande e castagne,
particolarità che rendono la sua carne unica nel suo genere.
Dal marcato colore rosso, la Mortadella Mora Mora ha un gusto deciso, saporito e stuzzicante.`,
` Our Mortadella Mora Mora is handcrafted by the Scapin family from meat selected only from the prestigious local Mora Romagnola breed.
Mora Romagnola pigs live in the wild, feeding mainly on acorns and chestnuts, and this characteristic gives their meat a very special flavour.
With its distinctive red colour, our Mortadella Mora Mora has a strong, tasty, mouth-watering flavour.`,
    ['carne di suino','sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1001003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1001004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1001002',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1001003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1001004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1001002',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),
  new Mortadelle(
    3,
    'images/mg.svg',
    'images/mg1.svg',
    'images/Galliani.jpg',
    '',
    `    La Mortadella Galliani, prodotta a Bologna solo con carni fresche di suino pesante
italiano, risulta al gusto delicata e profumata.
Creata per dare un’alternativa al sapore tradizionale bolognese, la Mortadella Galliani stupisce
per semplicità e digeribilità.
Unica mortadella di nostra produzione ad avere la possibilità di essere arricchita con Pistacchio
di Bronte o Tartufo nero di Norcia.`,
` Our Mortadella Galliani, made in Bologna with only fresh pork cuts from heavy Italian pigs, has a delicate but fragrant flavour.
Created as an alternative to traditional Bolognese flavours, our Mortadella Galliani is distinctively pure and easy to digest.
This is the only type of mortadella in our range that we enhance with Bronte pistachios or black Norcia truffles.`,
    ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' Natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1101003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1101002',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1101003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1101002',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),


  new Mortadelle(
    4,
    'images/mp.svg',
    'images/mp1.svg',
    'images/Pistacchio.jpg',
    '',
    `    La Mortadella Galliani, prodotta a Bologna solo con carni fresche di suino pesante
italiano, risulta al gusto delicata e profumata.
Creata per dare un’alternativa al sapore tradizionale bolognese, la Mortadella Galliani stupisce
per semplicità e digeribilità.
L’aggiunta di Pistacchi di Bronte color smeraldo fanno da cornice ad un prodotto unico.`,
` Our Mortadella Galliani, made in Bologna with only fresh pork cuts from heavy Italian pigs, has a delicate but fragrant flavour.
Created as an alternative to traditional Bolognese flavours, our Mortadella Galliani is distinctively pure and easy to digest.
The addition of emerald green Bronte pistachios creates a distinctive touch of colour in this unique product.`,
    ['carne di suino',' Pistacchio di Bronte',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' Bronte pistachios',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1101011',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101012',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1101010',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1101011',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101012',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1101010',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),
  new Mortadelle(
    5,
    'images/mt.svg',
    'images/mt1.svg',
    'images/Tartufo.jpg',
    '',
    `    La Mortadella Galliani, prodotta a Bologna solo con carni fresche di suino pesante
italiano, risulta al gusto delicata e profumata.
Creata per dare un’alternativa al sapore tradizionale bolognese, la Mortadella Galliani stupisce
per semplicità e digeribilità.
Questa mortadella gode del privilegio di avere al suo interno Tartufo nero di Norcia finemente
lavorato e sprigiona il suo inconfondibile gusto già alla prima fetta.`,
` Our Mortadella Galliani, made in Bologna with only fresh pork cuts from heavy Italian pigs, has a delicate but fragrant flavour.
Created as an alternative to traditional Bolognese flavours, our Mortadella Galliani is distinctively pure and easy to digest.
This mortadella enjoys the privilege of having black Norcia truffles blended with its meat. Finely processed,
 these delicious additions release their distinctive taste straight from the first slice.`,
    ['carne di suino','Tartufo nero di Norcia ',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' Black Norcia truffles',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1101023',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101024',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
   {
      cod:'1101022',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1101023',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1101024',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
   {
      cod:'1101022',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  ),
  new Mortadelle(
    6,
    'images/ms.svg',
    'images/ms1.svg',
    'images/Simona.jpg',
    '',
    `    La Mortadella Simona, prodotta con carni fresche italiane, è il prodotto
che rispecchia in tutto e per tutto l’antica ricetta bolognese.
Creata per ricordare sapori passati attraverso spezie naturali e lunghe cotture.
La cura nella realizzazione di questo prodotto è altissima poiché si rispettano tutti i crismi
della tradizione, per fornire al palato di chi l’assaggia un sapore antico.`,
` Produced with fresh Italian pork cuts, Mortadella Simona is the product that best represents this antique Bolognese recipe.
Created with natural spices and a lengthy cooking process that evokes exquisite bygone flavours.
This is a product that requires meticulous care, as its production
 observes every rule of this long-standing tradition to offer the palate a taste of antique richness.`,
    ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1201003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1201004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    }],
    [{
      cod:'1201003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1201004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    }]
  ),
  new Mortadelle(
    7,
    'images/sr.svg',
    'images/sr11.svg',
    'images/Salame_Rosa.jpg',
    '',
    `    Prodotto dalla carne della mortadella, gustoso e antico prodotto tipico bolognese
dal caratteristico profumo delicato. Aromatizzato ed insaccato a mano in vescica naturale,
una volta cotto è pronto per essere affettato. Si utilizzano parti di spalla, gola e prosciutto tagliati
a mano in punta di coltello che, uniti all’impasto per mortadella, danno forma ad un tripudio
di delicatezza. Il sapore è un incontro tra il gusto del prosciutto cotto appena sfornato e una
mortadella artigianale, delicatissimo al palato, servito a temperatura ambiente diventa il principe
dei salumi della tradizione bolognese.`,
` Produced from mortadella meat, this traditional Bolognese salami boasts a distinctively delicate fragrance and an exquisite flavour.
 Mixed with natural flavourings and hand-stuffed in natural bladder casings, our Salame Rosa is ready to slice as soon as it is cooked.
 Shoulder and throat cuts are used as well as hand-diced ham  that when mixed with the mortadella create a deliciously delicate galaxy of flavours.
 The final result is an exquisite combination of freshly cooked ham and handcrafted mortadella.
  Served at room temperature, it is the prince of Bologna cured meats. `,
    ['carne di suino',' sale',' aromi naturali',' antiossidante: ascorbato di sodio',' conservante: nitrito di sodio'],
    ['pork cuts',' salt',' natural flavouring',' antioxidant: sodium ascorbate',' preservative: sodium nitrite'],
    ['Senza Glutine','Senza Lattosio'],
    ['GLUTEN FREE ','LACTOSE FREE'],
    [{
      cod:'1901003',
      descrizione:'Vescica naturale',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1901004',
      descrizione:'Vescica naturale',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1901001',
      descrizione:'Vescica naturale',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }],
    [{
      cod:'1901003',
      descrizione:'Natural bladder casing',
      peso:'13 kg',
      px:'1',
      ct:'18',
      d:'24,5',
      h:'90'
    },
    {
      cod:'1901004',
      descrizione:'Natural bladder casing',
      peso:'7 kg',
      px:'1',
      ct:'18',
      d:'20',
      h:'90'
    },
    {
      cod:'1901001',
      descrizione:'Natural bladder casing',
      peso:'1,2 kg',
      px:'12',
      ct:'18',
      d:'10',
      h:'90'
    }]
  )
];

var mortadellePromise = Promise.resolve(mortadelle_db);
var mortadellebioPromise = Promise.resolve(mortadellebio_db);
var piattiPromise = Promise.resolve(piatti_db);
