package com.example.jewerly.product.repository;

import com.example.jewerly.product.dto.IProductDto;
import com.example.jewerly.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT " +
            " p.id AS id," +
            " p.code AS code, " +
            " p.name_product AS nameProduct, " +
            " p.price AS price, " +
            " p.image AS image " +
            " FROM " +
            " MP_Jewerly.product p " +
            " WHERE p.flag_delete = true " , nativeQuery = true)
    List<IProductDto> getListNew();

}
