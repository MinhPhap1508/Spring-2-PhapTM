package com.example.jewerly.customer.model;

import com.example.jewerly.app_user.model.AppUser;
import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String dob;
    private String gender;
    private String email;
    private String phone;
    private String address;
    private String idCard;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private AppUser appUser;

}
