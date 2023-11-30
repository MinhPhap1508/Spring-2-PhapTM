drop database if exists mp_jewelry;
create database mp_jewelry;
use mp_jewelry;
create table app_role(
id bigint primary key auto_increment,
name_role varchar(255),
flag bit default 1
);
create table app_user(
id bigint primary key auto_increment,
user_name varchar(255) not null,
`password` varchar(255) not null 
);
create table user_role(
id bigint primary key auto_increment,
app_role_id bigint not null,
app_user_id bigint not null,
foreign key(app_role_id) references app_role(id),
foreign key(app_user_id) references app_user(id)
);
create table customer(
id bigint primary key auto_increment,
full_name varchar(255),
dob date,
gender bit default 1,
email varchar(255),
phone varchar(45) not null,
address varchar(255) not null,
id_card varchar(255),
image varchar(255),
user_id bigint,
foreign key(user_id) references app_user(id)
);
create table category(
id bigint primary key auto_increment,
name_category varchar(255) not null
);
create table products (
id bigint primary key auto_increment,
name_products varchar(255) not null,
price double not null,
image varchar(255),
category_id bigint not null,
foreign key(category_id) references category(id),
flag bit default 1 
);
create table cart(
id bigint primary key auto_increment,
quantity_cart int not null,
product_id bigint not null,
app_user_id bigint not null,
foreign key(product_id) references products(id),
foreign key(app_user_id) references app_user(id)
);
create table `order` (
id bigint primary key auto_increment,
order_date datetime,
ship_extra double not null,
flag bit default 1,
app_user_id bigint not null,
foreign key(app_user_id) references app_user(id)
);
create table order_detail (
id bigint primary key auto_increment,
quantity int not null,
total_price double not null,
product_id bigint not null,
order_id bigint not null,
foreign key(product_id) references products(id),
foreign key(order_id) references `order`(id)
);