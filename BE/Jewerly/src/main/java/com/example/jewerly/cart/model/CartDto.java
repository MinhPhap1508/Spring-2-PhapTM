package com.example.jewerly.cart.model;

public class CartDto {
    private Integer id;
    private String name;
    private String code;
    private String image;
    private Integer quantity;
    private Integer price;

    public CartDto() {
    }

    public CartDto(Integer id, String name, String code, String image, Integer quantity, Integer price) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.image = image;
        this.quantity = quantity;
        this.price = price;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }
}
