USE employee_db;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUE
("Jose", "Alvarado", 1),
("Michael", "Devoe", 2, 1), 
("Jordan", "Usher", 3, 1), 
("Bubba", "Parham", 3, 1), 
("Moses", "Wright", 2, 1), 
("Trae", "Young", 4), 
("Deandre", "Hunter", 5, 6), 
("Clint", "Capela", 5, 6), 
("John", "Collins", 6, 6), 
("Kevin", "Huerter", 6, 6), 
("Bugs", "Bunny", 7), 
("Lola", "Bunny", 8, 11), 
("Michael", "Jordan", 8, 11), 
("Taz", "Devil", 9, 11), 
("Tweety", "Bird", 10, 11);

INSERT INTO departments (name) VALUE
("Sales"),
("Operations"),
("IT");

INSERT INTO roles (title, salary, department_id) VALUE
("Sales Manager", 100000.00, 1), 
("Inside Sales", 75000.00, 1), 
("Outside Sales", 85000.00, 1), 
("Operations Manager", 95000.00, 2), 
("Customer Service", 65000.00, 2), 
("Logistics Manager", 70000.00, 2), 
("Senior Software Engineer", 150000.00, 3), 
("Support Desk", 60000.00, 3), 
("Front End Developer", 85000.00, 3), 
("Back End Developer", 85000.00, 3);