CREATE DATABASE pk_girls_hostel;

USE pk_girls_hostel;

CREATE TABLE registrations (

    id INT AUTO_INCREMENT PRIMARY KEY,

    full_name VARCHAR(100) NOT NULL,

    phone VARCHAR(20) NOT NULL,

    email VARCHAR(100),

    room_type VARCHAR(50),

    college_workplace VARCHAR(150),

    guardian_name VARCHAR(100),

    guardian_contact VARCHAR(20),

    message TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

CREATE TABLE reviews (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    rating INT NOT NULL,

    review_text TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);
