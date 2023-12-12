package com.example.jewerly.product.repository;

import com.example.jewerly.product.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {

    @Query(value = " SELECT * " +
            " FROM category ", nativeQuery = true)
    List<Category> categoryList();
}
