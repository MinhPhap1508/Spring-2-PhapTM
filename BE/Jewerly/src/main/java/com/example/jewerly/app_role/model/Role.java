package com.example.jewerly.app_role.model;

import com.example.jewerly.user_role.model.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nameRole;
    private Boolean flagDelete;
    @OneToMany(mappedBy = "role")
    private Set<UserRole> userRoleSet;
}
