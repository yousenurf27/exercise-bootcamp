SELECT co.country, COUNT(ci.country_id) as tot_country, c.active
FROM sakila.customer c
JOIN sakila.address a ON c.address_id = a.address_id
JOIN sakila.city ci ON ci.city_id = a.city_id
JOIN sakila.country co ON co.country_id = ci.country_id
WHERE active = 0
GROUP BY co.country
ORDER BY tot_country DESC;