package br.com.propague.api;

import br.com.propague.api.model.TipoUsuario;
import br.com.propague.api.model.Usuario;
import br.com.propague.api.service.UsuarioService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;

@EnableJpaRepositories(basePackages = {"br.com.propague.api"})
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(UsuarioService usuarioService) {
	return args -> {
//      usuarioService.salvarTipoUsuario(new TipoUsuario(null, "Cliente"));
//      usuarioService.salvarTipoUsuario(new TipoUsuario(null, "Colaborador"));
//		usuarioService.salvarUsuario(new Usuario(null, "Gabriel", "gabriel@gmail.com", "1234", new ArrayList<>()));
//		usuarioService.salvarUsuario(new Usuario(null, "Jose", "jose@gmail.com", "1234", new ArrayList<>()));
//		usuarioService.atribuirTipoAoUsuario("gabriel@gmail.com", "Cliente");
//		usuarioService.atribuirTipoAoUsuario("jose@gmail.com", "Colaborador");

        };
    }
}
