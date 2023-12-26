package com.example.jewerly.order.service;

import com.example.jewerly.app_user.model.AppUser;
import com.example.jewerly.app_user.repository.IAppUserRepository;
import com.example.jewerly.cart.model.CartDto;
import com.example.jewerly.cart.repository.ICartRepository;
import com.example.jewerly.order.model.IOrderDetailDto;
import com.example.jewerly.order.model.IOrderDto;
import com.example.jewerly.order.model.OrderDto;
import com.example.jewerly.order.repository.IOrdersRepository;
import com.example.jewerly.product.model.Product;
import com.example.jewerly.product.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Objects;

@Service
public class OrdersService implements IOrderService {
    @Autowired
    private IAppUserRepository appUserRepository;
    @Autowired
    private IOrdersRepository ordersRepository;
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    private IProductRepository productRepository;

    @Override
    public void createOrder(OrderDto orderDto, String username) {
        LocalDate localDate = LocalDate.now();
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formatterDate = localDate.format(dateTimeFormatter);
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        ordersRepository.createOrder(formatterDate, appUser.getId());
        Integer idOrder =ordersRepository.getIdMaxForOrder();
        List<Product> productList = productRepository.findAllProduct();
        for (CartDto c:orderDto.getCartDtoList()) {
            cartRepository.deleteCart(c.getId(), appUser.getId());
            ordersRepository.createOrderDetail(c.getPrice(),c.getQuantity(), idOrder, c.getId());
            for (Product p: productList) {
                if(Objects.equals(p.getId(),c.getId())){
                    ordersRepository.updateProduct(p.getQuantity() - c.getQuantity(), c.getId());
                }
            }
        }

    }

    @Override
    public Page<IOrderDto> listOrder(String username, Pageable pageable) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return ordersRepository.getListOrder(appUser.getId(), pageable);
    }

    @Override
    public List<IOrderDetailDto> getDetailHistory(String username, Integer id) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return ordersRepository.getHistoryById(appUser.getId(), id);
    }
}
