package com.example.BE;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeApplication {
	static {
		System.setProperty("com.amazons.sdk.disableEc2Metadata", "true");
	}

	public static void main(String[] args) {
		try {
			SpringApplication.run(BeApplication.class, args);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
