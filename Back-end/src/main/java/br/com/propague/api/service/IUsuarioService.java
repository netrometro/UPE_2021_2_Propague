package br.com.propague.api.service;

import br.com.propague.api.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUsuarioService {

    Usuario save(Usuario usuario);

    List<Usuario> findAll();

    Optional<Usuario> findById(Long id);

    Usuario update(Usuario usuario);

    void deleteById(Long id);

}
