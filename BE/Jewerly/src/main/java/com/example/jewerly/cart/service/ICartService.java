package com.example.jewerly.cart.service;

import com.example.jewerly.cart.model.ICartDto;

import java.util.List;

public interface ICartService {
    List<ICartDto> getCart(String username);

    void addCart(Integer quantity, String username, Integer productId);
    Integer getCartById(String username, Integer productId);
void increaseQuantity(String username, Integer id, Integer quantity);

    void deleteCart(Integer id, String username);

    void decreaseQuantity(String username, Integer id);
}
