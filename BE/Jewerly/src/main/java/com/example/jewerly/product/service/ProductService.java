package com.example.jewerly.product.service;

import com.example.jewerly.product.dto.IProductDto;
import com.example.jewerly.product.model.Category;
import com.example.jewerly.product.model.Trademark;
import com.example.jewerly.product.model.Type;
import com.example.jewerly.product.repository.ICategoryRepository;
import com.example.jewerly.product.repository.IProductRepository;
import com.example.jewerly.product.repository.ITrademarkRepository;
import com.example.jewerly.product.repository.ITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ITypeRepository typeRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private ITrademarkRepository trademarkRepository;
    @Override
    public IProductDto getProductById(Integer id) {
        return productRepository.findProductById(id);
    }

    @Override
    public List<IProductDto> getListHome() {
        return productRepository.getListNew();
    }

    @Override
    public List<IProductDto> getListBestSeller() {
        return productRepository.getListBestseller();
    }

    @Override
    public List<Category> categoryList() {
        return categoryRepository.categoryList();
    }

    @Override
    public List<Type> typeList() {
        return typeRepository.typeList();
    }

    @Override
    public List<Trademark> trademarkList() {
        return trademarkRepository.trademarkList();
    }

    @Override
    public Page<IProductDto> getPageList(String nameProduct, String nameType, String nameCategory, String nameTrademark, Pageable pageable) {
        return productRepository.getListSearch(nameProduct, nameType, nameCategory, nameTrademark, pageable);
    }

    @Override
    public Page<IProductDto>    getPageType(String nameType, Pageable pageable) {
        return productRepository.getListType(nameType, pageable);
    }

    @Override
    public Page<IProductDto> getPageCategory(String nameCategory, Pageable pageable) {
        return productRepository.getListCategory(nameCategory, pageable);
    }

    @Override
    public Page<IProductDto> getPageTrademark(String nameTrademark, Pageable pageable) {
        return productRepository.getListTrademark(nameTrademark, pageable);
    }
}
