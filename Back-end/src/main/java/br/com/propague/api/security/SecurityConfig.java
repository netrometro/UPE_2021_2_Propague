package br.com.propague.api.security;

import br.com.propague.api.filtro.AuthenticationCustomFilter;
import br.com.propague.api.filtro.AuthorizationCustomFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;

@Configuration @EnableWebSecurity @RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }

    //
//    @Override
//    public void addCorsMappings(org.springframework.web.servlet.config.annotation.CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("*")
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
//                .allowedHeaders("*")
//                .allowCredentials(true)
//                .maxAge(3600);
//    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        AuthenticationCustomFilter customAuthenticationFilter = new AuthenticationCustomFilter(authenticationManagerBean());
        customAuthenticationFilter.setFilterProcessesUrl("/api/login");
        http.cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
//        corsConfigurationSource().setAllowedOrigins(Arrays.asList("*"));
//        http.sessionManagement().sessionCreationPolicy(STATELESS);
//        http.authorizeRequests().antMatchers("/api/login/**", "/token/refresh/**", "/api/usuario/**").permitAll();
//        http.authorizeRequests().antMatchers(GET, "/api/usuarios/**").hasAnyAuthority( "Administrador");
//        http.authorizeRequests().anyRequest().authenticated();
//        http.addFilter(customAuthenticationFilter);
//        http.addFilterBefore(new AuthorizationCustomFilter(), UsernamePasswordAuthenticationFilter.class);
        http.authorizeRequests()
                .antMatchers(POST,"/api/**").permitAll()
                .antMatchers(GET, "/api/**").permitAll()
                .anyRequest().authenticated()
                .and().cors().and().csrf().disable();
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(customAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "DELET", "OPTIONS"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

}
