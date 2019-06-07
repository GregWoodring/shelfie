INSERT INTO shelfie_products(
    product_name,
    image_url,
    price
) VALUES(
    ${productName},
    ${imageURL},
    ${price}
);

SELECT * FROM shelfie_products;