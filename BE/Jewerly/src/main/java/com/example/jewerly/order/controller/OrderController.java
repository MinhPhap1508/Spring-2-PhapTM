package com.example.jewerly.order.controller;

import com.example.jewerly.order.model.OrderDto;
import com.example.jewerly.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody OrderDto orderDto,
                                         @RequestParam String username) {
        orderService.createOrder(orderDto, username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
