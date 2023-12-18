package com.example.jewerly.order.model;

import com.example.jewerly.cart.model.CartDto;
import com.example.jewerly.cart.model.ICartDto;

import java.util.List;

public class OrderDto {
    List<CartDto> cartDtoList;

    public OrderDto() {
    }

    public OrderDto(List<CartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }

    public List<CartDto> getCartDtoList() {
        return cartDtoList;
    }

    public void setCartDtoList(List<CartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }
}
