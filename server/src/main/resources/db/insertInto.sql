INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Gradjevinski tehnicar', 'IV', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Gradjevinski inzenjer', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'IT inzenjer', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Diplomirani ekonomista', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Diplomirani pravnik', 'VI', NULL);

INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Aleksandar Group', 103975497, 'Novi Sad', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Vega IT', 105723766, 'Novi Sad', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Ortopedija d.o.o.', 101037716, 'Kragujevac', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Beostan', 102569063, 'Beograd', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Dunav Osiguranje', 100001958, 'Beograd', NULL);

INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Gradjevinarstvo', NULL, 1);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'IT', NULL, 2);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Medicina', NULL, 3);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Nekretnine', NULL, 4);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Osiguranje', NULL, 5);

INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Marko', 'Markovic', 211234, 3, 2);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Jovana', 'Jovanovic', 213579, 2, 1);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Ivan', 'Ivanovic', 212468, 1, 2);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Nikolina', 'Nikolic', 201234, 5, 5);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Marina', 'Marinkovic', 209876, 4, 4);

-- TEST
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (-100, 'ONaziv', 'OSSS', 'OOpis');
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (-100, 'PNaziv', 1020, 'PSediste', 'POpis');
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (-100, 'SNaziv', 'SOznaka', 1);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (-100, 'RIme', 'RPrz', 1234, 1, 1);