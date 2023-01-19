CREATE DATABASE universities_search; 
DROP DATABASE universities_search;

DROP TABLE users, user_info, universities, faculties, feedback, test, specialities, speciality_test, univercity_specialities;
CASCADE




CREATE TABLE users
( 
	id				SERIAL			NOT NULL UNIQUE PRIMARY KEY,
	login			VARCHAR(32) 	NOT NULL UNIQUE CHECK(login !=''),
	password		VARCHAR(32) 	NOT NULL CHECK(password !=''),
	role			smallint 		NOT NULL
);


CREATE TABLE user_info
( 
	id 				SERIAL		 	NOT NULL UNIQUE PRIMARY KEY,
	user_id 		int,
	avatar			VARCHAR(128),
	dop 			date,
	number 			VARCHAR(32),
	email			VARCHAR(64)
);


CREATE TABLE universities(
	id				SERIAL 			NOT NULL UNIQUE PRIMARY	KEY,
	name			VARCHAR(64)		NOT NULL UNIQUE,
	address			VARCHAR(64),
	manager_id		int,
	coords			point
);

CREATE TABLE faculties(
	id				SERIAL			NOT NULL UNIQUE PRIMARY KEY,
	name			VARCHAR(64)		NOT NULL,
	university_id	int

);

CREATE TABLE feedback(
	id 				SERIAL 			NOT NULL UNIQUE PRIMARY KEY,
	university_id 	int,
	feedback 		text,
	user_id			int,
	rate 			smallint 		NOT NULL,
	date 			date	 		NOT NULL
);



CREATE TABLE test(
	id 				SERIAL			NOT NULL UNIQUE PRIMARY KEY,
	name 			VARCHAR(32) 	NOT NULL CHECK(name !=''),
	min_mark 		smallint 		NOT NULL CHECK(min_mark >0)

);



CREATE TABLE specialities(
	id				SERIAL 			NOT NULL UNIQUE PRIMARY KEY,
	name 			VARCHAR(32) 	NOT NULL CHECK(name !=''),
	code 			smallint 		NOT NULL,
	description 	text
);

CREATE TABLE speciality_test(
	id 				SERIAL 			NOT NULL PRIMARY KEY,
	test_id 		int,
	speciality_id 	int,
	is_main			boolean 		DEFAULT 'false'
);



CREATE TABLE univercity_specialities(
	id 				SERIAL 			NOT NULL UNIQUE PRIMARY KEY,
	faculty_id		int 			REFERENCES faculties(id) NOT NULL,
	speciality_id 	int 			REFERENCES specialities(id) NOT NULL
);



ALTER TABLE user_info
	ADD CONSTRAINT FK_user_info_user_id_users_id
	FOREIGN KEY (user_id) REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		

ALTER TABLE universities
	ADD CONSTRAINT FK_universities_manager_id_users_id
	FOREIGN KEY (manager_id) REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		
		
		
ALTER TABLE faculties
	ADD CONSTRAINT FK_faculties_university_id_universities_id
	FOREIGN KEY (university_id) REFERENCES universities(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		
		
		
		
		
ALTER TABLE feedback
	ADD CONSTRAINT FK_feedback_university_id_universities_id
	FOREIGN KEY (university_id) REFERENCES universities(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		
		
		
ALTER TABLE feedback
	ADD CONSTRAINT FK_feedback_user_id_users_id
	FOREIGN KEY (university_id) REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		
		
ALTER TABLE speciality_test
	ADD CONSTRAINT FK_speciality_test_id_test_id
		FOREIGN KEY (test_id) REFERENCES test(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
		
		
ALTER TABLE speciality_test
	ADD CONSTRAINT FK_speciality_speciality_id_specialities_id
	FOREIGN KEY (speciality_id) REFERENCES specialities(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 
	
	
	
	
	
ALTER TABLE univercity_specialities
	ADD CONSTRAINT FK_univercity_specialities_faculty_id_faculties_id
	FOREIGN KEY (faculty_id) REFERENCES faculties(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE; 







DELETE FROM users 

SELECT * FROM public.user_info




INSERT INTO users
VALUES
(1,'Polina1','123321',0),
(2,'Taras','hehehe',0),
(3,'CopperSupper','babai',1),
(4,'Maks','strongpower',1),
(5,'Coloma','alloetoti',2);




INSERT INTO user_info
VALUES
(6,1,'papka/photos/photo1','23.07.2002','375333586800','golubinovahrorkul86@myrambler.ru'),
(7,2,'papka/photos/photo2','23.07.2002','375296965842','yarulindmitrios@autorambler.ru'),
(8,3,'papka/photos/photo3','23.07.2002','375292541478','haiitumirova1996@ro.ru'),
(9,4,'papka/photos/photo4','23.07.2002','375332154789','lendosenchin1992@autorambler.ru'),
(10,5,'papka/photos/photo5','23.07.2002','37533154879','edikttimahin2001@lenta.ru');



INSERT INTO universities
VALUES
(1,'VSU','Vitebsk street 15',2,'12.36980, 22.87900'),
(2,'BGU','Minsk street 20',3,'57.85420, 122.45600'),
(3,'PTU','',4,'-113.741100, -35.3230'),
(4,'VGTU','Vitebsk okolo VSU',5,'-113.741100, -35.3230'),
(5,'VGTC','Vitebsk Lazo street',1,'47.65430, 12.32900');


INSERT INTO faculties
VALUES
(5,'FMiIT',1),
(6,'ФФКиС',1),
(8,'Педагогический',3),
(7,'artistic and graphic',5),
(9,'Матесатический',1);

INSERT INTO feedback
VALUES
(1,1,'всё нравится, всё хорошо',1,4,'12.04.2014'),
(2,1,'нормально',2,3,'14.07.2017'),
(3,3,'Не понравилось ',3,5,'27.08.2021'),
(4,3,'lfkgpidjgjdfgpidfgjdf',4,0,'24.05.2019'),
(5,5,'мгм',5,2,'20.12.2020');


INSERT INTO test
VALUES
(1,'math',12),
(2,'math',12),
(3,'russ',20),
(4,'biology',16),
(5,'biology',16);


INSERT INTO specialities
VALUES
(6,'ПОКС',456,'крутая специальность'),
(7,'ПОИТ',2,'Большие баллы'),
(8,'РНФО',78,'нужно учиться'),
(9,'МО',325,''),
(10,'УИР',424,'УИР - лучшея специальность!1!!');



INSERT INTO speciality_test
VALUES
(1,1,6,'true'),
(2,1,6,'false'),
(3,3,9,'false'),
(4,2,9,'true'),
(5,4,8,'true');



INSERT INTO univercity_specialities
VALUES
(5,5,6),
(6,5,6),
(4,6,8),
(9,6,9),
(11,7,10);

