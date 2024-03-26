SELECT address, district, city_id
FROM sakila.address
WHERE district = 'California' OR district = 'Alberta' OR district = 'Mekka';