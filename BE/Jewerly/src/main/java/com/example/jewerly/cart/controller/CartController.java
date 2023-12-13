package com.example.jewerly.cart.controller;

import com.example.jewerly.cart.model.ICartDto;
import com.example.jewerly.cart.service.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin("*")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("/cart-detail")
    public ResponseEntity<?> getCartByUsername(@RequestParam String username) {
        List<ICartDto> cartDtoList = cartService.getCart(username);
        return new ResponseEntity<>(cartDtoList, HttpStatus.OK);
    }
    @PostMapping("/add-cart")
    public ResponseEntity<?> addCart(@RequestParam Integer quantity,
                                     @RequestParam String username,
                                     @RequestParam Integer productId){
        Integer cart = cartService.getCartById(username, productId);

//        if(cart != null) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
        cartService.addCart(quantity, username, productId);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
