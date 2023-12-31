package com.example.jewerly.product.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "LONGTEXT")
    private String path;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

}
