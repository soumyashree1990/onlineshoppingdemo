package com.example.onlineshoppingdemo.Repository;

import com.example.onlineshoppingdemo.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
