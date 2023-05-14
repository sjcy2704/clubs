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
  ('AUVC', 'Sports', 2);
