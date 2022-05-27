package br.com.propague.api.service;

import java.util.List;

import br.com.propague.api.model.Midia;

public interface IMidiaService {
	Midia save (Midia mida);
	
	List<Midia> findAll();
	
	Midia findById(Long id);
	
	void delete(Long id);
}
