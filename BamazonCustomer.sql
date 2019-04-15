-- DROP DATABASE IF EXIST Bamazon_db;
CREATE DATABASE Bamazon_db;
USE Bamazon_db;

CREATE TABLE Products 
( 
Item_ID varchar(30) NOT NULL,
Product_name VARCHAR(30),
Department_name VARCHAR(30),
Price INTEGER(1000),
Stock_quantity INTEGER(100)
);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shoes, "Raging Bulls" , Jordan , 400 , 5);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quanity)
VALUES (Shoes, "Air Mag" , NIKE , 1000 , 1);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shoes, "Cactus Jacks" , Jordan , 220 , 4);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shoes, "Sean Witherspoon" , NIKE , 180 , 5);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Art, "MILO Canvas" , Bape , 300 , 2);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Art, "Death Statue" , KAWS , 200 , 1);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Art, "Skate Canvas" , KAWS , 300 , 1);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shirt, "Ape" , Bape , 220 , 10);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shirt, "BOGO" , Supreme , 170 , 10);

INSERT INTO Products
(Item_ID, Product_name, Department_name, Price, Stock_quantity)
VALUES (Shirt, "BOGO" , Supreme , 170 , 10);

SELECT * FROM Products;