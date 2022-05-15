package br.com.propague.api.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;

    private String email;

    private String senha;
}
