package com.example.wpmhero;

import org.junit.jupiter.api.Test;

import java.time.Instant;

import static org.assertj.core.api.Assertions.assertThat;

public class OutcomeTest {

    @Test
	void toStringTest() throws Exception {

        final Outcome myOutcome = new Outcome(true, new Challenge(5, 0, 0, 10000), new Attempt(5, 5, 5000, Instant.now()));

        assertThat(myOutcome.toString()).contains("true", "10000", "5000");
	}
    
}
