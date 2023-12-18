package com.example.jewerly.customer.service;

import com.example.jewerly.customer.model.CustomerDto;
import com.example.jewerly.customer.model.ICustomerDto;

public interface ICustomerService {
    ICustomerDto getInfoCustomer(String username);

    void createCustomer(CustomerDto customerDto, String username);

    void updateCustomer(CustomerDto customerDto);
}
