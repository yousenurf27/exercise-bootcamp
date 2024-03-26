SELECT sa.first_name, sa.last_name, COUNT(sfa.actor_id) AS performs_on_film
FROM sakila.film_actor AS sfa
INNER JOIN sakila.actor AS sa
ON sfa.actor_id = sa.actor_id
GROUP BY sfa.actor_id
ORDER BY performs_on_film DESC
LIMIT 10