Create table users(
    id text,
    email text,
    hash text,
    token text[],
    salt text,
    type text,
    name text
);
Create table DocInfo(
    id text,
    email text,
    type text,
    name text,
    bio text,
    patients_treated text,
    timeing text,
    days text,
    fees text,
    profile text,
    cover text,
    hospital text,
    treatment text,
    degrees text
);
Create table PatientInfo(
    id text,
    email text,
    type text,
    name text,
    profile text,
    cover text
);
Create table History(
    user_id text,
    timestamp bigint,
    name text,
    info text,
    link text
);
Create Table Availability(
    user_id text,
    doc_id text
);
CREATE table Appointment(
	user_id text,
	doc_id text,
	StartTime text,
	EndTime text,
	Subject text,
	Id text,
    timestamp bigint,
    Description text,
    start boolean,
    userJoined boolean,
    docJoined boolean,z
    ended boolean
);

CREATE table Prescription(
	userID text,
    docID text,
    bookingID text,
    prescriptionID text,
    dat TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
);

CREATE table Booking(
	user_email text,
	doc_email text,
	StartTime text,
	EndTime text,
    bookingdate text,
	Id INT PRIMARY KEY AUTO_INCREMENT,
    TS TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
    Description text,
    start boolean,
    bookingStatus boolean,
    hospitalName text,

);

Create Table communicationToken(
    user_id text,
    communicationuserid text,
    token text,
    expires_on bigint
);
Create Table SearchHistory(
    user_id text,
    searchString text,
    timestamp bigint,
);