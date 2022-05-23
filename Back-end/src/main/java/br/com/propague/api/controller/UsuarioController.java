package br.com.propague.api.controller;

import java.io.IOException;
import java.net.URI;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.propague.api.model.TipoUsuario;
import br.com.propague.api.model.Usuario;
import br.com.propague.api.service.UsuarioService;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UsuarioController {
	private final UsuarioService servico;
	
	@GetMapping("/usuarios")
	public ResponseEntity<List<Usuario>> getUsuarios() {
		return ResponseEntity.ok().body(servico.getUsuarios());
	}
	
	@PostMapping("/usuario/salvar")
	public ResponseEntity<Usuario> salvarUsuario(@RequestBody Usuario usuario) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
		return ResponseEntity.created(uri).body(servico.salvarUsuario(usuario));
	}
	
	@PostMapping("/tipousuario/salvar")
	public ResponseEntity<TipoUsuario> salvarTipoUsuario(@RequestBody TipoUsuario tipoUsuario) {
		URI uri = URI.create(
				ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/tipoUsuario/salvar").toUriString());
		return ResponseEntity.created(uri).body(servico.salvarTipoUsuario(tipoUsuario));
	}
	
	@PostMapping("/tipousuario/adicionaraousuario")
	public ResponseEntity<?> addTipoParaUsuario(TipoParaUsuarioForm form) {
		servico.atribuirTipoAoUsuario(form.getEmail(), form.getTipoUsuarioNome());
		return ResponseEntity.ok().build();
	}

	@GetMapping("/token/refresh")
	public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String authorizationHeader = request.getHeader("Authorization");
		if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
			try{
				String refresh_token = authorizationHeader.substring(7);
				Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
				JWTVerifier verifier = JWT.require(algorithm).build();
				DecodedJWT decodedJWT = verifier.verify(refresh_token);
				String username = decodedJWT.getSubject();
				Usuario usuario = servico.getUsuario(username);
				String acces_token = com.auth0.jwt.JWT.create()
						.withSubject(usuario.getEmail())
						.withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
						.withIssuer(request.getRequestURL().toString())
						.withClaim("tipo", usuario.getTipos().stream().map(TipoUsuario::getNome).collect(Collectors.joining()))
						.sign(algorithm);
//        response.setHeader("acces_token", token);
//        response.setHeader("refresh_token", refresh_token);
				Map<String, String> map = new HashMap<>();
				map.put("token", acces_token);
				map.put("refresh_token", refresh_token);
				response.setContentType(APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), map);
			} catch(Exception e) {
				response.setHeader("error", e.getMessage());
				response.setStatus(403);
				Map<String, String> map = new HashMap<>();
				map.put("error", e.getMessage());
				response.setContentType(MimeTypeUtils.APPLICATION_JSON_VALUE);
				new ObjectMapper().writeValue(response.getOutputStream(), map);
			}

		}else {
			throw new RuntimeException("Refresh token is missing");
		}
	}
	

//    @Autowired
//    private IUsuarioService iUsuarioService;
//
//    @GetMapping
//    public ResponseEntity<List<Usuario>> findAll() {
//        return ResponseEntity.ok(iUsuarioService.findAll());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Usuario>> findById(@PathVariable Long id) {
//        return ResponseEntity.ok(iUsuarioService.findById(id));
//    }
//
//    @PostMapping
//    public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
//        return ResponseEntity.ok(iUsuarioService.save(usuario));
//    }
//
//    @PutMapping
//    public ResponseEntity<Usuario> update(@RequestBody Usuario usuario) {
//        return ResponseEntity.ok(iUsuarioService.update(usuario));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> delete(@PathVariable Long id) {
//        iUsuarioService.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }
}

@Data
class TipoParaUsuarioForm {
	private String email;
	private String tipoUsuarioNome;
}
