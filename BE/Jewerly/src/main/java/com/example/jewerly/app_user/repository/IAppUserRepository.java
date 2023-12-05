package com.example.jewerly.app_user.repository;

import com.example.jewerly.app_user.model.AppUser;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IAppUserRepository extends JpaRepository<AppUser, Long> {
    @Query(value = "select * from app_user a where a.user_name like :userName ",nativeQuery = true)
    AppUser getAccountByUserName(@Param("userName") String userName);

    @Transactional
    @Modifying
    @Query(value = " call insert_acc (:userName,:password,:app_role_id) ", nativeQuery = true)
    void createAccount(@Param("userName")String userName, @Param("password")String password,@Param("app_role_id") Long app_role_id);
}
