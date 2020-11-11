package com.cognixia.jump.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognixia.jump.exceptions.ResourceAlreadyExistsException;
import com.cognixia.jump.model.Transaction;
import com.cognixia.jump.repository.TransactionRepository;

@RequestMapping("/api")
@RestController
public class TransactionController {

	@Autowired
	TransactionRepository repository;

	@PostMapping("/add/transaction")
	public ResponseEntity<Transaction> addTransaction(@RequestBody Transaction newTransaction)
			throws ResourceAlreadyExistsException {
		if (repository.existsById(newTransaction.getProductId())) {
			throw new ResourceAlreadyExistsException(
					"Transaction with id = " + newTransaction.getProductId() + "already exists");
		} else {
			Transaction added = repository.save(newTransaction);
			return ResponseEntity.status(200).body(added);
		}

	}

}
