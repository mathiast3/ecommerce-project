package com.cognixia.jump.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognixia.jump.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}
