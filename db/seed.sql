USE employee_db;

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUE
(1, "Jose", "Alvarado", 1, null),
(2, "Michael", "Devoe", 2, 1), 
(3, "Jordan", "Usher", 3, 1), 
(4, "Bubba", "Parham", 3, 1), 
(5, "Moses", "Wright", 2, 1), 
(6, "Trae", "Young", 4, null), 
(7, "Deandre", "Hunter", 5, 6), 
(8, "Clint", "Capela", 5, 6), 
(9, "John", "Collins", 6, 6), 
(10, "Kevin", "Huerter", 6, 6), 
(11, "Bugs", "Bunny", 7, null), 
(12, "Lola", "Bunny", 8, 11), 
(13, "Michael", "Jordan", 8, 11), 
(14, "Taz", "Devil", 9, 11), 
(15, "Tweety", "Bird", 10, 11);

INSERT INTO departments (id, name) VALUE
(1, "Sales"),
(2, "Operations"),
(3, "IT");

INSERT INTO roles (id, title, salary, department_id) VALUE
(1, "Sales Manager", 100000.00, 1), 
(2, "Inside Sales", 75000.00, 1), 
(3, "Outside Sales", 85000.00, 1), 
(4, "Operations Manager", 95000.00, 2), 
(5, "Customer Service", 65000.00, 2), 
(6, "Logistics Manager", 70000.00, 2), 
(7, "Senior Software Engineer", 150000.00, 3), 
(8, "Support Desk", 60000.00, 3), 
(9, "Front End Developer", 85000.00, 3), 
(10, "Back End Developer", 85000.00, 3);