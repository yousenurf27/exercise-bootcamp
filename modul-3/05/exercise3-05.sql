SELECT customer_id, SUM(amount) AS total, COUNT(customer_id) AS made_payment
FROM sakila.payment
GROUP BY customer_id
HAVING COUNT(customer_id) > 30