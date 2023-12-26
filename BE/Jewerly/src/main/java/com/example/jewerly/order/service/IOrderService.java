package com.example.jewerly.order.service;

import com.example.jewerly.order.model.IOrderDetailDto;
import com.example.jewerly.order.model.IOrderDto;
import com.example.jewerly.order.model.OrderDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
void createOrder(OrderDto orderDto, String username);
Page<IOrderDto> listOrder(String username, Pageable pageable);
List<IOrderDetailDto> getDetailHistory(String username, Integer id);
}
