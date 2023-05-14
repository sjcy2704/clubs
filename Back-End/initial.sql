USE studentclubs;

INSERT INTO
  Users (
    username,
    password,
    email,
    firstName,
    familyName,
    userType
  )
VALUES
  (
    'admin',
    'admin',
    'admin@admin.com',
    'admin',
    'system',
    'admin'
  );

INSERT INTO
  Users (
    username,
    password,
    email,
    firstName,
    familyName,
    userType
  )
VALUES
  (
    'manager1',
    'manager',
    'manager@clubs.com',
    'Juan',
    'Diaz',
    'manager'
  );

INSERT INTO
  Users (
    username,
    password,
    email,
    firstName,
    familyName,
    userType
  )
VALUES
  (
    'manager2',
    'manager',
    'manager2@clubs.com',
    'Duan',
    'Jonson',
    'manager'
  );

INSERT INTO
  Users (
    username,
    password,
    email,
    firstName,
    familyName,
    userType
  )
VALUES
  (
    'manager3',
    'manager',
    'manager3@clubs.com',
    'Jose',
    'Andorra',
    'manager'
  );

INSERT INTO
  Users (username, password, email, firstName, familyName)
VALUES
  (
    'user1',
    'user',
    'user@user.com',
    'Sarah',
    'Swain'
  );

INSERT INTO
  Clubs (name, category, manager)
VALUES
  ('Adelaide Uni Volleyball Club', 'Sports', 1);

INSERT INTO
  Clubs (name, category, manager)
VALUES
  ('Engineering Club', 'Engineering', 2);

INSERT INTO
  Clubs (name, category, manager)
VALUES
  ('Med Society', 'Health', 3);

INSERT INTO
  Clubs (name, category, manager)
VALUES
  ('CS Club', 'Computer Science', 4);

INSERT INTO
  ClubMembers (clubID, userID)
VALUES
  (1, 1);

UPDATE Clubs
SET
  members = members + 1
WHERE
  clubID = 1;

INSERT INTO
  ClubMembers (clubID, userID)
VALUES
  (2, 2);

UPDATE Clubs
SET
  members = members + 1
WHERE
  clubID = 2;

INSERT INTO
  ClubMembers (clubID, userID)
VALUES
  (1, 3);

UPDATE Clubs
SET
  members = members + 1
WHERE
  clubID = 1;

INSERT INTO
  ClubMembers (clubID, userID)
VALUES
  (2, 3);

UPDATE Clubs
SET
  members = members + 1
WHERE
  clubID = 2;

-- select u.userID, u.username, u.email, u.firstName, u.familyName, u.phone, u.userType, c.name from Users u join ClubMembers cm on u.userID = cm.userID join Clubs c on cm.clubID = c.clubID;
