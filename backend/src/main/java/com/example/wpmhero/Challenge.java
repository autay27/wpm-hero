package com.example.wpmhero;

import org.springframework.core.style.ToStringCreator;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
class Challenge {
    private @Id @GeneratedValue Long id;
    private Integer finalWords;
    private Integer total;
    private Integer type;
    private Integer time;

    Challenge() {}

    Challenge(Integer finalWords, Integer total, Integer type, Integer time) {
        this.finalWords = finalWords;
        this.total = total;
        this.type = type;
        this.time = time;
    }

    // Getters for challenge fields
    public int getFinalWords() {
        return finalWords;
    }

    public int getTotal() {
        return total;
    }

    public int getType() {
        return type;
    }

    public int getTime() {
        return time;
    }

        @Override
    public String toString() {
        return new ToStringCreator(this)
            .append("finalWords", this.finalWords)
            .append("total", this.total)
            .append("type", this.type)
            .append("time", this.time)
            .toString();
    }
}
