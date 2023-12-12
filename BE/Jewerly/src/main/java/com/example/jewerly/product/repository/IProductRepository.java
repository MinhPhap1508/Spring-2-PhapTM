package com.example.jewerly.product.repository;

import com.example.jewerly.product.dto.IProductDto;
import com.example.jewerly.product.model.Category;
import com.example.jewerly.product.model.Product;
import com.example.jewerly.product.model.Trademark;
import com.example.jewerly.product.model.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT " +
            " p.id AS id," +
            " p.code AS code, " +
            " p.name_product AS nameProduct, " +
            " p.price AS price, " +
            " MIN(i.path) AS image " +
            " FROM " +
            " minhphap_jewerly.product p " +
            " JOIN " +
            " image i ON p.id = i.product_id" +
            " WHERE p.flag_deleted = true " +
//            " AND p.name_product LIKE CONCAT('%', :nameProduct ,'%') " +
            " GROUP BY p.id, p.code, p.name_product, p.price " +
            " ORDER BY p.id DESC LIMIT 10", nativeQuery = true)
    List<IProductDto> getListNew();


    @Query(value = "SELECT  p.id as id, " +
            " p.name_product as nameProduct, " +
            " p.code as code, " +
            " GROUP_CONCAT(i.path) as image, " +
            " p.description as description, " +
            " p.price, " +
            " p.quantity, " +
            " ct.name_category as category, " +
            " t.name_type as type, " +
            " tr.name_trademark as trademark" +
            " FROM product p " +
            "  JOIN category ct ON p.category_id = ct.id" +
            "  JOIN type t ON p.type_id = t.id " +
            "  JOIN trademark tr ON p.trademark_id = tr.id " +
            "  JOIN image i ON p.id = i.product_id " +
            " WHERE p.flag_deleted = true and p.id = :id ", nativeQuery = true)
    IProductDto findProductById(@Param("id") Integer id);

    @Query(value = "SELECT " +
            " p.id AS id," +
            " p.code AS code, " +
            " p.name_product AS nameProduct, " +
            " p.price AS price, " +
            " t.name_type as nameType, " +
            " ct.name_category as nameCategory, " +
            " tr.name_trademark as nameTrademark, " +
            " MIN(i.path) AS image " +
            " FROM " +
            " minhphap_jewerly.product p " +
            " JOIN " +
            "   type t ON p.type_id = t.id " +
            "   JOIN category ct ON p.category_id = ct.id " +
            "   JOIN trademark tr ON p.trademark_id = tr.id " +
            " JOIN " +
            " image i ON p.id = i.product_id" +
            " WHERE p.flag_deleted = true " +
            " AND p.name_product LIKE CONCAT('%', :nameProduct ,'%')" +
            " AND t.name_type LIKE CONCAT('%', :nameType ,'%')" +
            " AND ct.name_category LIKE CONCAT('%', :nameCategory ,'%')" +
            " AND tr.name_trademark LIKE CONCAT('%', :nameTrademark ,'%')" +
            " GROUP BY p.id, p.code, p.name_product, p.price, t.name_type, ct.name_category, tr.name_trademark " +
            " ORDER BY p.id ", nativeQuery = true)
    Page<IProductDto> getListSearch(@Param("nameProduct") String nameProduct,
                                    @Param("nameType") String nameType,
                                    @Param("nameCategory") String nameCategory,
                                    @Param("nameTrademark") String nameTrademark,
                                    Pageable pageable);


}
