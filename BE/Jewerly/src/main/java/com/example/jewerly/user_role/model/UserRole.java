package com.example.jewerly.user_role.model;

import com.example.jewerly.app_role.model.Role;
import com.example.jewerly.app_user.model.AppUser;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "app_role_id", referencedColumnName = "id")
    private Role role;
    @ManyToOne
    @JoinColumn(name = "app_user_id", referencedColumnName = "id")
    private AppUser appUser;
}
