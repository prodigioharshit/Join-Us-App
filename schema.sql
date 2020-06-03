CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) 
   VALUES ('Tony@starkind.com'),
           ('Cap@avengers.com');
           

SELECT DATE_FORMAT(created_at,'%b %D %Y') FROM users ORDER BY created_at LIMIT 1;

SELECT email,created_at FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

SELECT MONTHNAME(created_at),COUNT(*) AS count FROM users GROUP BY MONTHNAME(created_at) ORDER BY count DESC; 

SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%@yahoo.com';

SELECT CASE 
          WHEN email LIKE '%@yahoo.com' THEN 'yahoo'
          WHEN email LIKE '%@gmail.com' THEN 'gmail'
          WHEN email LIKE '%@hotmail.com' THEN 'hotmail'
          ELSE 'others'
        END AS provider,
        COUNT(*) as count
FROM users GROUP BY provider ORDER BY count;



