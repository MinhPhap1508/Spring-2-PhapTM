package com.example.jewerly.config;

import com.example.jewerly.app_user.repository.IAppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final IAppUserRepository userRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> userRepository.getAccountByUserName(username);
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvide = new DaoAuthenticationProvider();
        authProvide.setUserDetailsService(userDetailsService());
        authProvide.setPasswordEncoder(passWordEncoder());
        return authProvide;
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passWordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
