package br.com.propague.api.service;

import br.com.propague.api.model.TipoUsuario;
import br.com.propague.api.model.Usuario;
import br.com.propague.api.repository.TipoUsuarioRepository;
import br.com.propague.api.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioService implements IUsuarioService {
	private final UsuarioRepository repositorioUsuario;
	private final TipoUsuarioRepository repositorioTipoUsuario;

	@Override
	public Usuario salvarUsuario(Usuario usuario) {
		// É necessário a parte de segurança configurada
		return null;
	}

	@Override
	public TipoUsuario salvarTipoUsuario(TipoUsuario tipoUsuario) {
		return repositorioTipoUsuario.save(tipoUsuario);
	}

	@Override
	public void atribuirTipoAoUsuario(String email, String tipoUsuarioNome) {
		Usuario usuario = repositorioUsuario.findByEmail(email);
		TipoUsuario tipo = repositorioTipoUsuario.findByNome(tipoUsuarioNome);
		usuario.getTipos().add(tipo);		
	}

	@Override
	public Usuario getUsuario(String email) {
		return repositorioUsuario.findByEmail(email);
	}

	@Override
	public List<Usuario> getUsuarios() {
		return repositorioUsuario.findAll();
	}

//    @Autowired
//    private UsuarioRepository usuarioRepository;
//
//    @Override
//    public Usuario save(Usuario usuario) {
//        return usuarioRepository.save(usuario);
//    }
//
//    @Override
//    public List<Usuario> findAll() {
//        return usuarioRepository.findAll();
//    }
//
//    @Override
//    public Optional<Usuario> findById(Long id) {
//        return usuarioRepository.findById(id);
//    }
//
//    @Override
//    public Usuario update(Usuario usuario) {
//        return usuarioRepository.save(usuario);
//    }
//
//    @Override
//    public void deleteById(Long id) {
//        usuarioRepository.deleteById(id);
//    }
}
