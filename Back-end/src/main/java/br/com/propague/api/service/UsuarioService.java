package br.com.propague.api.service;

import br.com.propague.api.model.TipoUsuario;
import br.com.propague.api.model.Usuario;
import br.com.propague.api.repository.TipoUsuarioRepository;
import br.com.propague.api.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UsuarioService implements IUsuarioService, UserDetailsService {
	private final UsuarioRepository repositorioUsuario;
	private final TipoUsuarioRepository repositorioTipoUsuario;
	private final PasswordEncoder passwordEncoder;

	@Override
	public Usuario salvarUsuario(Usuario usuario) {
		log.info("Salvando usuário: " + usuario.getEmail());
		usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
		return repositorioUsuario.save(usuario);
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

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = repositorioUsuario.findByEmail(username);
		if(usuario == null) {
			log.error("Usuário não encontrado: " + username);
			throw new UsernameNotFoundException("Usuário não encontrado");
		} else {
			log.info("Usuário encontrado: " + username);
		}
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		usuario.getTipos().forEach(tipoUsuario -> authorities.add(new SimpleGrantedAuthority(tipoUsuario.getNome())));
		return new org.springframework.security.core.userdetails.User(usuario.getEmail(), usuario.getSenha(), authorities);

	}

	public Collection<? extends GrantedAuthority> getAuthorities(Usuario usuario) {
		return usuario.getTipos().stream()
				.map(tipoUsuario -> new SimpleGrantedAuthority(tipoUsuario.getNome()))
				.collect(Collectors.toList());
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
