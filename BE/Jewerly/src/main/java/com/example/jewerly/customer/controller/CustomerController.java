package com.example.jewerly.customer.controller;

import com.example.jewerly.customer.model.CustomerDto;
import com.example.jewerly.customer.model.ICustomerDto;
import com.example.jewerly.customer.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping("")
    public ResponseEntity<?> getInfoCustomer(@RequestParam String username) {
        ICustomerDto customerDto = customerService.getInfoCustomer(username);
        return new ResponseEntity<>(customerDto, HttpStatus.OK);
    }

    @PostMapping("/update")
    public ResponseEntity<?> updateCustomer(@RequestBody CustomerDto customerDto, @RequestParam String username) {
        if (customerDto.getId() == null) {
            customerService.createCustomer(customerDto, username);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            customerService.updateCustomer(customerDto);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
