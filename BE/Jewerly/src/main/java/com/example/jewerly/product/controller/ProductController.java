package com.example.jewerly.product.controller;

import com.example.jewerly.product.dto.IProductDto;
import com.example.jewerly.product.model.Category;
import com.example.jewerly.product.model.Trademark;
import com.example.jewerly.product.model.Type;
import com.example.jewerly.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/{id}")
    public ResponseEntity<?> findProductById(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @GetMapping("/home")
    public ResponseEntity<?> getListHome() {
        List<IProductDto> productDtoList = productService.getListHome();
        if (productDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoList, HttpStatus.OK);
    }
    @GetMapping("/page-list")
    public ResponseEntity<?> getListProductByHeader(@RequestParam(defaultValue = "0", required = false) Integer page,
                                                    @RequestParam(defaultValue = "size", required = false) Integer size,
                                                    @RequestParam(defaultValue = "", required = false) String nameProduct,
                                                    @RequestParam(defaultValue = "",required = false)String nameType,
                                                    @RequestParam(defaultValue = "",required = false)String nameCategory,
                                                    @RequestParam(defaultValue = "",required = false)String nameTrademark,
                                                    @RequestParam(defaultValue = "asc",required = false) String sort,
                                                    @RequestParam(defaultValue = "price",required = false) String sortBy){
        Sort sort1 = Sort.by(Sort.Direction.fromString(sort),sortBy);
        Pageable pageable = PageRequest.of(page, size, sort1);
        Page<IProductDto> productDtoPage = productService.getPageList(nameProduct, nameType, nameCategory, nameTrademark, pageable);
        if(productDtoPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDtoPage, HttpStatus.OK);
    }
    @GetMapping("/type")
    public ResponseEntity<?> typeList() {
        List<Type> typeList = productService.typeList();
        if(typeList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }
    @GetMapping("/cate")
    public ResponseEntity<?> cateList() {
        List<Category> categoryListList = productService.categoryList();
        if(categoryListList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryListList, HttpStatus.OK);
    }
    @GetMapping("/trade")
    public ResponseEntity<?> tradeList() {
        List<Trademark> trademarkList = productService.trademarkList();
        if(trademarkList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(trademarkList, HttpStatus.OK);
    }
}
