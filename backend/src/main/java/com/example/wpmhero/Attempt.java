package com.example.wpmhero;

import org.springframework.core.style.ToStringCreator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
class Attempt {
    private @Id @GeneratedValue Long id;
    private Integer finalWords;
    private Integer total;
    private Integer timeSpent;

    Attempt() {}

    Attempt(Integer finalWords, Integer total, Integer timeSpent) {
        this.finalWords = finalWords;
        this.total = total;
        this.timeSpent = timeSpent;
    }

    // Getters for attempt fields
    public int getFinalWords() {
        return finalWords;
    }

    public int getTotal() {
        return total;
    }

    public int getTimeSpent() {
        return timeSpent;
    }


    @Override
    public String toString() {
        return new ToStringCreator(this)
            .append("finalWords", this.finalWords)
            .append("total", this.total)
            .append("timeSpent", this.timeSpent)      
            .toString();
    }

}
