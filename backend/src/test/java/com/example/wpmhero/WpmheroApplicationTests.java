package com.example.wpmhero;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class WpmheroApplicationTests {

	@Autowired
	private OutcomeController c;

	@Test
	void contextLoads() {
		assertThat(c).isNotNull();
	}

}
