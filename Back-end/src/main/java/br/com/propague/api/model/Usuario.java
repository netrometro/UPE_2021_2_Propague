package br.com.propague.api.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    private String email;
    private String senha;
    
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<TipoUsuario> tipos = new ArrayList<>();
    
    
}
