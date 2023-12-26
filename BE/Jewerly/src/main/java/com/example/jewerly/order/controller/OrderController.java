package com.example.jewerly.order.controller;

import com.example.jewerly.order.model.IOrderDetailDto;
import com.example.jewerly.order.model.IOrderDto;
import com.example.jewerly.order.model.OrderDto;
import com.example.jewerly.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/history")
    public ResponseEntity<?> historyOrder(@RequestParam String username,
                                          @RequestParam(defaultValue = "0") Integer page,
                                          @RequestParam(defaultValue = "5") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<IOrderDto> orderDtoPage = orderService.listOrder(username, pageable);
        return new ResponseEntity<>(orderDtoPage, HttpStatus.OK);
    }
    @GetMapping("/detail")
    public ResponseEntity<?> getDetailHistory(@RequestParam(value = "username", required = false) String username,
                                              @RequestParam(value = "id", required = false) Integer id) {
        List<IOrderDetailDto> detailDtos = orderService.getDetailHistory(username, id);
        if(detailDtos.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(detailDtos, HttpStatus.OK);
    }
}
