package com.example.jewerly.order.repository;

import com.example.jewerly.order.model.IOrderDetailDto;
import com.example.jewerly.order.model.IOrderDto;
import com.example.jewerly.order.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;


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
    void
    createOrderDetail(Integer totalPrice, Integer quantityOrder, Integer orderId, Integer productId);

    @Query(value = " select  max(id) from orders ", nativeQuery = true)
    Integer getIdMaxForOrder();

    @Query(value = "select o.order_date as orderDate, sum(total_price) as total, o.id as id \n" +
            "from orders o\n" +
            "join order_detail od on o.id = od.order_id\n" +
            "where o.app_user_id = :id " +
            "group by o.order_date, o.id " +
            " order by o.order_date desc", nativeQuery = true)
    Page<IOrderDto> getListOrder(Integer id, Pageable pageable);

    @Transactional
    @Modifying
    @Query(value = " UPDATE product" +
            " SET quantity = :quantity" +
            " WHERE id = :idProduct", nativeQuery = true)
    void updateProduct(Integer quantity, Integer idProduct);
    @Query(value = " SELECT o.id as id, o.app_user_id," +
            " p.name_product as nameProduct," +
            " p.price as price," +
            " od.quantity_order as quantityOrder," +
            " p.id as productId " +
            "FROM orders o " +
            " JOIN order_detail od ON od.order_id = o.id" +
            " JOIN product p ON p.id = od.product_id" +
            " WHERE (o.app_user_id = :appId and o.id = :id)", nativeQuery = true)
    List<IOrderDetailDto> getHistoryById(Integer appId, Integer id);
}
