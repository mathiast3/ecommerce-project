package com.cognixia.jump.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.model.Product;
import com.cognixia.jump.repository.TransactionRepository;

@RequestMapping("/api")
@RestController
public class TransactionController {

	@Autowired
	TransactionRepository repository;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return repository.findAll();
	}

	@GetMapping("/product/{id}")
	public Product getProduct(@PathVariable int id) {

		Product enrollee = repository.getOne(id);
		return enrollee;
	}

	@PostMapping("/product/add")
	public Product addProduct(@RequestBody Product product) {

		Product newProduct = repository.save(product);

		return newProduct;

	}

}
