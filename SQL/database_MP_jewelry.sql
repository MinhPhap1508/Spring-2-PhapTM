create table minhphap_jewerly.app_user
(
    id        bigint auto_increment
        primary key,
    password  varchar(255) null,
    user_name varchar(255) null,
    constraint UK_cpt2jpnop7mcpds1sv2i5629w
        unique (user_name)
);

create table minhphap_jewerly.category
(
    id            int auto_increment
        primary key,
    name_category varchar(255) null
);

create table minhphap_jewerly.customer
(
    id        bigint auto_increment
        primary key,
    address   varchar(255) null,
    dob       varchar(255) null,
    email     varchar(255) null,
    full_name varchar(255) null,
    gender    varchar(255) null,
    id_card   varchar(255) null,
    phone     varchar(255) null,
    user_id   bigint       null,
    constraint FKslkyb5dphxe4c7au3hqx3la6m
        foreign key (user_id) references minhphap_jewerly.app_user (id)
);

create table minhphap_jewerly.orders
(
    id          int auto_increment
        primary key,
    flag        bit          null,
    order_date  varchar(255) null,
    app_user_id bigint       null,
    constraint FK48n435ufa0g2h7tn8hb31emnu
        foreign key (app_user_id) references minhphap_jewerly.app_user (id)
);

create table minhphap_jewerly.role
(
    id          bigint auto_increment
        primary key,
    flag_delete bit          null,
    name_role   varchar(255) null
);

create table minhphap_jewerly.trademark
(
    id             int auto_increment
        primary key,
    name_trademark varchar(255) null
);

create table minhphap_jewerly.type
(
    id        int auto_increment
        primary key,
    name_type varchar(255) null
);

create table minhphap_jewerly.product
(
    id           int auto_increment
        primary key,
    code         varchar(255) null,
    description  varchar(255) null,
    flag_deleted bit          null,
    name_product varchar(255) null,
    price        int          null,
    quantity     int          null,
    category_id  int          null,
    trademark_id int          null,
    type_id      int          null,
    constraint FK1mtsbur82frn64de7balymq9s
        foreign key (category_id) references minhphap_jewerly.category (id),
    constraint FKq3fvcsydiaotwy3iqn1erqsfd
        foreign key (type_id) references minhphap_jewerly.type (id),
    constraint FKrvx6c7yswuxlg30hq1f4tx035
        foreign key (trademark_id) references minhphap_jewerly.trademark (id)
);

create table minhphap_jewerly.cart
(
    id            int auto_increment
        primary key,
    quantity_cart int    null,
    app_user_id   bigint null,
    product_id    int    null,
    constraint FK3d704slv66tw6x5hmbm6p2x3u
        foreign key (product_id) references minhphap_jewerly.product (id),
    constraint FK3ec32ji648pftldnv912b7ng
        foreign key (app_user_id) references minhphap_jewerly.app_user (id)
);

create table minhphap_jewerly.image
(
    id         int auto_increment
        primary key,
    path       varchar(255) null,
    product_id int          null,
    constraint FKgpextbyee3uk9u6o2381m7ft1
        foreign key (product_id) references minhphap_jewerly.product (id)
);

create table minhphap_jewerly.order_detail
(
    id             int auto_increment
        primary key,
    flag           bit null,
    quantity_order int null,
    order_id       int null,
    total_price    int null,
    product_id     int null,
    constraint FKb8bg2bkty0oksa3wiq5mp5qnc
        foreign key (product_id) references minhphap_jewerly.product (id),
    constraint FKrws2q0si6oyd6il8gqe2aennc
        foreign key (order_id) references minhphap_jewerly.orders (id)
);

create table minhphap_jewerly.user_role
(
    id          bigint auto_increment
        primary key,
    app_user_id bigint null,
    app_role_id bigint null,
    constraint FKcmswoy6aq28oeyv2pjltsbi6i
        foreign key (app_role_id) references minhphap_jewerly.role (id),
    constraint FKj16wg2x08hwytvgys4y9idf4b
        foreign key (app_user_id) references minhphap_jewerly.app_user (id)
);

