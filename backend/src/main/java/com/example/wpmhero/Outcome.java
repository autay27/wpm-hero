 
package com.example.wpmhero;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
class Outcome {

    private @Id @GeneratedValue Long id;
    private Boolean outcome;

    private Integer challFinal;
    private Integer challTotal;
    private Integer challType;
    private Integer challTime;

    private Integer attFinal;
    private Integer attTotal;
    private Integer attTimeSpent;

   

    Outcome() {}

    Outcome(Boolean outcome, Integer challFinal, Integer challTotal, Integer challType, Integer challTime, Integer attFinal, Integer attTotal, Integer attTimeSpent) {

        this.outcome = outcome;

        this.challFinal = challFinal;
        this.challTotal = challTotal;
        this.challType = challType;
        this.challTime = challTime;

        this.attFinal = attFinal;
        this.attTotal = attTotal;
        this.attTimeSpent = attTimeSpent;
    }

    public String getOutcome() {

        return this.outcome.toString();
    }

    // Getters for challenge fields
    public int getChallFinal() {
        return challFinal;
    }

    public int getChallTotal() {
        return challTotal;
    }

    public int getChallType() {
        return challType;
    }

    public int getChallTime() {
        return challTime;
    }

    // Getters for attempt fields
    public int getAttFinal() {
        return attFinal;
    }

    public int getAttTotal() {
        return attTotal;
    }

    public int getAttTimeSpent() {
        return attTimeSpent;
    }

    @Override
    public String toString() {
        return "{outcome: " + this.outcome + ", rest of fields omitted}";
    }
    // Should be a nice way to print it with jackson
}
