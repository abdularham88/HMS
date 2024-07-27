
CREATE DATABASE HMS_DB
USE HMS_DB
CREATE TABLE doctors (
    	doctor_id int IDENTITY PRIMARY KEY,
	first_name varchar(255) NOT NULL,
    	last_name varchar(255) NOT NULL,
	gender varchar(255) NOT NULL,
    	email varchar(255) UNIQUE NOT NULL,
    	phone_number bigint NOT NULL,
	password varchar(255) NOT NULL
);



select * from doctors


CREATE TABLE patients (
    	patient_id int IDENTITY PRIMARY KEY,
	first_name varchar(255) NOT NULL,
    	last_name varchar(255) NOT NULL,
	age int NOT NULL,
	gender varchar(255) NOT NULL,
	weight varchar(255) NOT NULL,
    	email varchar(255) UNIQUE NOT NULL,
    	phone_number bigint NOT NULL,
	password varchar(255) NOT NULL
);
select * from patients


CREATE TABLE appointment (
    	appointment_id int IDENTITY PRIMARY KEY,
	patient_id int Foreign Key references patients(patient_id),
    	doctor_id int Foreign Key references doctors(doctor_id),
	datetime DATETIME NOT NULL
);

select * from appointment

CREATE TABLE prescriptions (
    	prescription_id int IDENTITY PRIMARY KEY,
	patient_id int Foreign Key references patients(patient_id),
    	doctor_id int Foreign Key references doctors(doctor_id),
	medicine varchar(255) NOT NULL,
	date_created DATE NOT NULL
);

select * from prescriptions


