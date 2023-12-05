package com.example.jewerly.auth;

import com.example.jewerly.app_user.model.AppUser;
import com.example.jewerly.app_user.repository.IAppUserRepository;
import com.example.jewerly.config.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    @Autowired

    private IAppUserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;


    public AuthenticationResponse register(RegisterRequest request) {
        AppUser appUser = userRepository.getAccountByUserName(request.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        if (appUser != null) {
            authenticationResponse.setToken(null);
            authenticationResponse.setErrMsg("Tài khoản đã tồn tại!");
            return authenticationResponse;
        }
        userRepository.createAccount(request.getUsername(), passwordEncoder.encode(request.getPassword()), 2L);
        AppUser appUser1 = userRepository.getAccountByUserName(request.getUsername());
        authenticationResponse.setToken(jwtService.generateToken(appUser1));
        authenticationResponse.setErrMsg(null);

        return authenticationResponse;
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        AppUser appUser = userRepository.getAccountByUserName(request.getUsername());
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(jwtService.generateToken(appUser));
        return authenticationResponse;
    }
}
