package br.com.propague.api.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
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
