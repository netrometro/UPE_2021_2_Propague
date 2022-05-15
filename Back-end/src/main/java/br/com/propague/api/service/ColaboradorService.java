package br.com.propague.api.service;

import br.com.propague.api.model.Colaborador;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ColaboradorService {

    Colaborador save(Colaborador colaborador);

    List<Colaborador> findAll();

    Optional<Colaborador> findById(Long id);

    Colaborador update(Colaborador colaborador);

    void deleteById(Long id);

}
