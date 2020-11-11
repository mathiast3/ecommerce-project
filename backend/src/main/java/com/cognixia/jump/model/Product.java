package com.cognixia.jump.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Product implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String productName;
	private String productCategory;
	private String productCondition;
	private String imageUrl;
	private double price;

	public Product() {
		this("N/A", "N/A", "N/A", "N/A", -1);
	}

	public Product(String productName, String productCategory, String productCondition, String imageUrl, double price) {

		this.productName = productName;
		this.productCategory = productCategory;
		this.productCondition = productCondition;
		this.imageUrl = imageUrl;
		this.price = price;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}

	public String getProductCondition() {
		return productCondition;
	}

	public void setProductCondition(String condition) {
		this.productCondition = condition;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
