UPDATE shelfie_products 
SET image_url = ${imageURL}
, product_name = ${productName}
, price = ${price}
WHERE shelfie_product_id = ${id};