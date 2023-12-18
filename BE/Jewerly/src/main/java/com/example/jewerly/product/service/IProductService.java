package com.example.jewerly.product.service;

import com.example.jewerly.product.dto.IProductDto;
import com.example.jewerly.product.model.Category;
import com.example.jewerly.product.model.Trademark;
import com.example.jewerly.product.model.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    IProductDto getProductById(Integer id);

    List<IProductDto> getListHome();

    List<IProductDto> getListBestSeller();

    List<Category> categoryList();

    List<Type> typeList();

    List<Trademark> trademarkList();

    Page<IProductDto> getPageList(String nameProduct, String nameType, String nameCategory, String nameTrademark, Pageable pageable);
    Page<IProductDto> getPageType(String nameType, Pageable pageable);
    Page<IProductDto> getPageCategory(String nameCategory, Pageable pageable);
    Page<IProductDto> getPageTrademark(String nameTrademark, Pageable pageable);
}
