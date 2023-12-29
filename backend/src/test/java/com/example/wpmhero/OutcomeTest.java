package com.example.wpmhero;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;

public class OutcomeTest {

    @Test
	void toStringTest() throws Exception {

        final Outcome myOutcome = new Outcome(true, 5, 0, 0, 10000, 5, 5, 5000);

        assertThat(myOutcome.toString()).contains("true", "10000", "5000");
	}
    
}
