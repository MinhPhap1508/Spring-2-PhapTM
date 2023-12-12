package com.example.jewerly.product.repository;

import com.example.jewerly.product.model.Trademark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITrademarkRepository extends JpaRepository<Trademark, Integer> {

    @Query(value = " SELECT * " +
            " FROM trademark ", nativeQuery = true)
    List<Trademark> trademarkList();
}
