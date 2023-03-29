SELECT * FROM tasks
ORDER BY status,
	CASE priority
		WHEN 'High' THEN 1
		WHEN 'Medium' THEN 2
		WHEN 'Low' THEN 3
		ELSE 4
	END;

CREATE TABLE tasks (
    task_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    priority VARCHAR(20),
    status BOOLEAN DEFAULT false
);

INSERT INTO tasks (name, priority)
VALUES ('Sweep the floor', 'Low'), ('Get groceries', 'Medium'), ('Make Dinner', 'High');