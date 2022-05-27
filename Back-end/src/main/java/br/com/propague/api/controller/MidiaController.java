package br.com.propague.api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.propague.api.model.Midia;
import br.com.propague.api.service.MidiaService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@EnableWebSecurity
public class MidiaController {
	private final MidiaService midiaService;
	
	@PostMapping("/midia")
	public ResponseEntity<Midia> save(@RequestBody Midia midia) {
		return ResponseEntity.ok(midiaService.save(midia));
	}
	
	@GetMapping("/midias")
	public ResponseEntity<List<Midia>> getMidias() {
		return ResponseEntity.ok(midiaService.findAll());
	}
	
	@DeleteMapping("/midia/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		midiaService.delete(id);
		return ResponseEntity.noContent().build();
	}
	
}
