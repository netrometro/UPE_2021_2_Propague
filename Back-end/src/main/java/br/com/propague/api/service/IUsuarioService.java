package br.com.propague.api.service;

import br.com.propague.api.model.TipoUsuario;
import br.com.propague.api.model.Usuario;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IUsuarioService {

    Usuario salvarUsuario(Usuario usuario);
    
    TipoUsuario salvarTipoUsuario(TipoUsuario tipoUsuario);
    
    void atribuirTipoAoUsuario(String email, String tipoUsuarioNome);
    
    Usuario getUsuario(String email);
    
    List<Usuario> getUsuarios();

//    List<Usuario> findAll();
//
//    Optional<Usuario> findById(Long id);
//
//    Usuario update(Usuario usuario);
//
//    void deleteById(Long id);

}
