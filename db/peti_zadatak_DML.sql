INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Građevinski tehničar', 'IV', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Građevinski inženjer', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'IT inženjer', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Diplomirani ekonomista', 'VI', NULL);
INSERT INTO obrazovanje(id, naziv, stepen_strucne_spreme, opis) VALUES (nextval('obrazovanje_seq'), 'Diplomirani pravnik', 'IV', NULL);

INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Aleksandar Group', 103975497, 'Novi Sad', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Vega IT', 105723766, 'Novi Sad', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Ortopedija d.o.o.', 101037716, 'Kragujevac', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Beostan', 102569063, 'Beograd', NULL);
INSERT INTO preduzece(id, naziv, pib, sediste, opis) VALUES (nextval('preduzece_seq'), 'Dunav Osiguranje', 100001958, 'Beograd', NULL);

INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Građevinarstvo', NULL, 1);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'IT', NULL, 2);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Medicina', NULL, 3);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Nekretnine', NULL, 4);
INSERT INTO sektor(id, naziv, oznaka, preduzece) VALUES (nextval('sektor_seq'), 'Osiguranje', NULL, 5);

INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Marko', 'Marković', 211234, 3, 2);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Jovana', 'Jovanović', 213579, 2, 1);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Ivan', 'Ivanović', 212468, 1, 2);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Nikolina', 'Nikolić', 201234, 5, 5);
INSERT INTO radnik(id, ime, prezime, broj_lk, obrazovanje, sektor) VALUES (nextval('radnik_seq'), 'Marina', 'Marinković', 209876, 4, 4);