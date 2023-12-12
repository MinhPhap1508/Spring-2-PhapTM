package com.example.jewerly.product.repository;

import com.example.jewerly.product.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITypeRepository extends JpaRepository<Type, Integer> {
    @Query(value = " SELECT t.id, t.name_type " +
            " FROM type t ", nativeQuery = true)
    List<Type> typeList();
}
