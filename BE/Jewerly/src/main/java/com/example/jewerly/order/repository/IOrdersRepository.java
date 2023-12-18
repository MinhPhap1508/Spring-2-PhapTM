package com.example.jewerly.order.repository;

import com.example.jewerly.order.model.IOrderDto;
import com.example.jewerly.order.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;


public interface IOrdersRepository extends JpaRepository<Orders, Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into orders(order_date, flag, app_user_id ) " +
            " values( :orderDate, 0, :appId)", nativeQuery = true)
    void createOrder(String orderDate, Integer appId);

    @Transactional
    @Modifying
    @Query(value = "insert into order_detail(total_price, quantity_order, flag, order_id, product_id) " +
            " values(:totalPrice, :quantityOrder, true, :orderId, :productId) ", nativeQuery = true)
    void createOrderDetail(Integer totalPrice, Integer quantityOrder, Integer orderId, Integer productId);

    @Query(value = " select  max(id) from orders ", nativeQuery = true)
    Integer getIdMaxForOrder();

    @Query(value = "select o.order_date as orderDate, sum(total_price) as total \n" +
            "from orders o\n" +
            "join order_detail od on o.id = od.order_id\n" +
            "where o.app_user_id = :id " +
            "group by o.order_date, o.id " +
            " order by o.order_date desc", nativeQuery = true)
    Page<IOrderDto> getListOrder(Integer id, Pageable pageable);
}
