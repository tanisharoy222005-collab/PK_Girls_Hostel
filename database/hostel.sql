CREATE DATABASE pk_girls_hostel;

USE pk_girls_hostel;

CREATE TABLE registrations(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

phone VARCHAR(20),

email VARCHAR(100),

room_type VARCHAR(50),

college VARCHAR(100),

guardian_name VARCHAR(100),

guardian_contact VARCHAR(20),

message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE reviews(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

rating INT,

review TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
