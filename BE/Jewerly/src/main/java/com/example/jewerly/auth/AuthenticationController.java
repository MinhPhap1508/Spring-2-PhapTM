package com.example.jewerly.auth;


import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ){
        AuthenticationResponse authenticationResponse = authenticationService.register(request);
        if(authenticationResponse.getErrMsg() != null){
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(authenticationResponse.getErrMsg());
        }
        return ResponseEntity.ok(authenticationResponse.getToken());
    }
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request){
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
}
