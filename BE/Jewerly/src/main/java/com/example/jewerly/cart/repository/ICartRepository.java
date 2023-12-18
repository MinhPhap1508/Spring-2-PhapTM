package com.example.jewerly.cart.repository;

import com.example.jewerly.cart.model.Cart;
import com.example.jewerly.cart.model.ICartDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "select p.name_product as name,\n" +
            "             p.id,\n" +
            "             p.price,\n" +
            "             p.code,\n" +
            "             (SELECT path\n" +
            "              from image i\n" +
            "              where i.product_id = p.id\n" +
            "              order by i.id limit 1) as image,\n" +
            "             c.quantity_cart as quantity\n" +
            "            from cart c\n" +
            "            join app_user au on c.app_user_id = au.id\n" +
            "            join product p on c.product_id = p.id\n" +
            "            where au.id = :id ", nativeQuery = true)
    List<ICartDto> getCartDetail(Integer id);

    @Transactional
    @Modifying
    @Query(value = "insert into cart(quantity_cart, app_user_id, product_id)\n" +
            "values(:quantity, :appId, :productId)", nativeQuery = true)
    void AddCart(Integer quantity, Integer appId, Integer productId);

    @Query(value = " SELECT c.id " +
            " FROM cart c " +
            " WHERE c.product_id = :id AND c.app_user_id = :appId", nativeQuery = true)
    Integer getCartById(Integer appId, Integer id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE cart c " +
            "SET c.quantity_cart = c.quantity_cart + :quantity " +
            "WHERE c.product_id = :id AND c.app_user_id = :appId", nativeQuery = true)
    void increaseQuantity(@Param("appId") Integer appId, @Param("id") Integer id, @Param("quantity") Integer quantity);
    @Transactional
    @Modifying
    @Query(value = "UPDATE cart c " +
            "SET c.quantity_cart = c.quantity_cart - 1 " +
            "WHERE c.product_id = :id AND c.app_user_id = :appId", nativeQuery = true)
    void decreaseQuantity(@Param("appId") Integer appId, @Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = " DELETE " +
            " FROM cart c " +
            " WHERE c.product_id = :id AND c.app_user_id = :appId ", nativeQuery = true)
    void deleteCart(Integer id, Integer appId);

}
