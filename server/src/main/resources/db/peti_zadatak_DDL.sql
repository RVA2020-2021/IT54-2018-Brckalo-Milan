DROP SEQUENCE IF EXISTS obrazovanje_seq;
DROP SEQUENCE IF EXISTS preduzece_seq;
DROP SEQUENCE IF EXISTS sektor_seq;
DROP SEQUENCE IF EXISTS radnik_seq;

DROP TABLE IF EXISTS obrazovanje CASCADE;
DROP TABLE IF EXISTS preduzece CASCADE;
DROP TABLE IF EXISTS sektor CASCADE;
DROP TABLE IF EXISTS radnik CASCADE;

CREATE TABLE obrazovanje (
	id INTEGER NOT NULL,
	naziv VARCHAR(100),
	stepen_strucne_spreme VARCHAR(10),
	opis VARCHAR(500)
);

CREATE TABLE preduzece (
	id INTEGER NOT NULL,
	naziv VARCHAR(100),
	pib INTEGER,
	sediste VARCHAR(100),
	opis VARCHAR(500)
);

CREATE TABLE sektor (
	id INTEGER NOT NULL,
	naziv VARCHAR(100),
	oznaka VARCHAR(10),
	preduzece INTEGER NOT NULL
);

CREATE TABLE radnik (
	id INTEGER NOT NULL,
	ime VARCHAR(50),
	prezime VARCHAR(50),
	broj_lk INTEGER,
	obrazovanje INTEGER NOT NULL,
	sektor INTEGER NOT NULL
);

-- OGRANICENJE PRIMARNOG KLJUCA
ALTER TABLE obrazovanje ADD CONSTRAINT pk_obrazovanje PRIMARY KEY (id);
ALTER TABLE preduzece ADD CONSTRAINT pk_preduzece PRIMARY KEY (id);
ALTER TABLE sektor ADD CONSTRAINT pk_sektor PRIMARY KEY (id);
ALTER TABLE radnik ADD CONSTRAINT pk_radnik PRIMARY KEY (id);

-- REFERENCIJALNO OGRANICENJE
ALTER TABLE sektor ADD CONSTRAINT fk_sektor_preduzece FOREIGN KEY (preduzece) REFERENCES preduzece(id);
ALTER TABLE radnik ADD CONSTRAINT fk_radnik_sektor FOREIGN KEY (sektor) REFERENCES sektor(id);
ALTER TABLE radnik ADD CONSTRAINT fk_radnik_obrazovanje FOREIGN KEY (obrazovanje) REFERENCES obrazovanje(id);

-- INDEKSI
CREATE INDEX idxpk_obrazovanje ON obrazovanje(id);
CREATE INDEX idxpk_preduzece ON preduzece(id);
CREATE INDEX idxpk_sektor ON sektor(id);
CREATE INDEX idxpk_radnik ON radnik(id);

CREATE INDEX idxfk_sektor_preduzece ON sektor(preduzece);
CREATE INDEX idxfk_radnik_sektor ON radnik(sektor);
CREATE INDEX idxfk_radnik_obrazovanje ON radnik(obrazovanje);

-- SEKVENCE
CREATE SEQUENCE obrazovanje_seq INCREMENT 1;
CREATE SEQUENCE preduzece_seq INCREMENT 1;
CREATE SEQUENCE sektor_seq INCREMENT 1;
CREATE SEQUENCE radnik_seq INCREMENT 1;