const offices = [
  { key: '0', name: 'Roeselare', password: 'Roeselare06', regioID: '20006', sf_id: '0010Y000012KduBQAS', company: 'SIVAC'},
  { key: '1', name: 'Schilde', password: 'Schilde04', regioID: '10004', sf_id: '0010Y00000ryjbuQAA', company: 'EasyLife'},
  { key: '2', name: 'Westmalle', password: 'Westmalle05', regioID: '10005', sf_id: '0010Y00000ryjbqQAA', company: 'EasyLife'},
  { key: '3', name: 'Hasselt', password: 'Hasselt07', regioID: '10007', sf_id: '0010Y00000ryjbnQAA', company: 'EasyLife'},
  { key: '4', name: 'Oostkamp', password: 'Oostkamp05', regioID: '20005', sf_id: '0010Y00000ryjbrQAA', company: 'SIVAC' },
  { key: '5', name: 'Aalter', password: 'Aalter04', regioID: '20004', sf_id: '0010Y00000ryjbsQAA', company: 'SIVAC'},
  { key: '6', name: 'Maldegem', password: 'Maldegem03', regioID: '20003', sf_id: '0010Y00000ryjbtQAA', company: 'SIVAC'},
  { key: '7', name: 'Kortrijk', password: 'Kortrijk07', regioID: '20007', sf_id: '0011v0000206dutAAA', company: 'SIVAC'},
  { key: '8', name: 'Oostduinkerke', password: 'Oostduinkerke02', regioID: '20002', sf_id: '0010Y00000ryjbmQAA', company: 'SIVAC'},
  { key: '9', name: 'Genk', password: 'Genk08', regioID: '10008', sf_id: '0010Y000015olJqQAI', company: 'EasyLife'},
  { key: '10', name: 'Kontich', password: 'Kontich03', regioID: '10003', sf_id: '0010Y00000ryjbvQAA', company: 'EasyLife'},
  { key: '11', name: 'Sint-Martens-Latem', password: 'Latem01', regioID: '30001', sf_id: '0010Y00000ryjbpQAA', company: 'DILITO'},
  { key: '12', name: 'Borsbeek', password: 'Borsbeek02', regioID: '10002', sf_id: '0010Y00000ryjbyQAA', company: 'EasyLife'},
  { key: '13', name: 'Mechelen', password: 'Mechelen09', regioID: '10009', sf_id: '0011v00001ik4TXAAY', company: 'EasyLife'},
  { key: '14', name: 'Lier', password: 'Lier10', regioID: '10010', sf_id: '0011v00001rYSVSAA4', company: 'EasyLife'},
  { key: '15', name: 'Aalst', password: 'Aalst03', regioID: '30003', sf_id: '0010Y00000ryjc0QAA', company: 'DILITO'},
  { key: '16', name: 'Londerzeel', password: 'Londerzeel06', regioID: '10006', sf_id: '0010Y00000ryjbzQAA', company: 'EasyLife'},
  { key: '17', name: 'Middelkerke', password: 'Middelkerke01', regioID: '20001', sf_id: '0010Y00000ryjbwQAA', company: 'SIVAC'},
  { key: '18', name: 'Wilrijk', password: 'Wilrijk01', regioID: '10001', sf_id: '0010Y00000ryjbxQAA', company: 'EasyLife'},
  { key: '19', name: 'Melle', password: 'Melle02', regioID: '30002', sf_id: '0010Y00000ryjboQAA', company: 'DILITO'},
  { key: '20', name: 'Dilbeek', password: 'Dilbeek11', regioID: '10011', sf_id: 'unknown', company: 'EasyLife'},
  { key: '21', name: 'Sint-Niklaas', password: 'Sint-Niklaas04', regioID: '30004', sf_id: 'unknown', company: 'DILITO'},
  { key: '22', name: 'Tervuren', password: 'Tervuren12', regioID: '10012', sf_id: 'unknown', company: 'EasyLife'},
  { key: '23', name: 'Geel', password: 'Geel13', regioID: '10013', sf_id: 'unknown', company: 'EasyLife'},
]

const originKlant = [
  { key: '0', text: 'Prints', value: 'Prints' },
  { key: '1', text: 'Google', value: 'Google' },
  { key: '2', text: 'Actie', value: 'Actie' },
  { key: '3', text: 'Personeel', value: 'Personeel' },
  { key: '4', text: 'Mond aan mond', value: 'Mond aan mond' },
  { key: '5', text: 'Radio & televisie', value: 'Radio & televisie' },
  { key: '6', text: 'Strijk', value: 'Strijk' },
  { key: '7', text: 'Facebook', value: 'Facebook' },
  { key: '8', text: 'Walk-in', value: 'PerWalk-insoneel' },
  { key: '9', text: 'Interim: Vivaldis', value: 'Interim: Vivaldis' },
  { key: '10', text: 'Interim: Assap', value: 'Interim: Assap' },
  { key: '11', text: 'Interim: Adecco', value: 'Interim: Adecco' },
]

const availabilityKlant = [
  { key: '0', text: 'Niet mogelijk', value: 'Niet mogelijk' },
  { key: '1', text: 'Voormidag', value: 'Voormidag' },
  { key: '2', text: 'Namiddag', value: 'Namiddag' },
  { key: '3', text: 'Maakt niet uit', value: 'Maakt niet uit' },
  { key: '4', text: 'Niet geweten', value: 'Niet geweten' },
]

const languages = [
  { key: '0', text: 'Nederlands' , value: 'Nederlands' },
  { key: '1', text: 'Frans', value:'Frans' },
]

const originSolicitant = [
  { key: '0', text: 'VDAB', value: 'VDAB' },
  { key: '1', text: 'Collega', value: 'Collega' },
  { key: '2', text: 'Walk in', value: 'Walk in' },
  { key: '3', text: 'Google', value: 'Google' },
  { key: '4', text: 'JobDate', value: 'JobDate' },
  { key: '5', text: 'Mond aan mond', value: 'Mond aan mond' },
  { key: '6', text: 'Radio & televisie', value: 'Radio & televisie' },
  { key: '7', text: 'Indeed', value: 'Indeed' },
  { key: '8', text: 'Facebook', value: 'Facebook' },
  { key: '9', text: 'Actie', value: 'Actie' },
  { key: '10', text: 'SMS', value: 'SMS' },
]

export default {
  offices,
  originKlant,
  availabilityKlant,
  languages,
  originSolicitant
}
