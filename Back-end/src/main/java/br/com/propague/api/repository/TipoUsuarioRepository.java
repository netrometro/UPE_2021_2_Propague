package br.com.propague.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.propague.api.model.TipoUsuario;

public interface TipoUsuarioRepository extends JpaRepository<TipoUsuario, Long> {
	TipoUsuario findByNome(String nome);
}
