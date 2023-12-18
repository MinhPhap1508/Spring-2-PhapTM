package com.example.jewerly.cart.service;

import com.example.jewerly.app_user.model.AppUser;
import com.example.jewerly.app_user.repository.IAppUserRepository;
import com.example.jewerly.cart.model.ICartDto;
import com.example.jewerly.cart.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public List<ICartDto> getCart(String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return cartRepository.getCartDetail(appUser.getId());
    }

    @Override
    public void addCart(Integer quantity, String username, Integer productId) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.AddCart(quantity, appUser.getId(), productId);
    }

    @Override
    public Integer getCartById(String username, Integer productId) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return cartRepository.getCartById(appUser.getId(), productId);
    }

    @Override
    public void increaseQuantity(String username, Integer id, Integer quantity) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.increaseQuantity(appUser.getId(), id, quantity);
    }

    @Override
    public void deleteCart(Integer id, String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.deleteCart(id, appUser.getId());
    }

    @Override
    public void decreaseQuantity(String username, Integer id) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.decreaseQuantity(appUser.getId(), id);
    }
}
