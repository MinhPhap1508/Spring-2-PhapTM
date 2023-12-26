import { useEffect } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { infoToken, login } from '../service/Account';
import Swal from 'sweetalert2';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export function Login() {

    const navigate = useNavigate();
    const loginAccount = async (value) => {
        try {
            const jwt = await login(value)
            localStorage.setItem("JWT", jwt.data.token);
            navigate("/")
            Swal.fire({
                icon: "success",
                title: "Đăng nhập thành công!",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (e) {
            Swal.fire("Tài khoản hoặc mật khẩu không chính xác")
        }
    }

    // useEffect(() => {
    //     const switchCtn = document.querySelector("#switch-cnt");
    //     const switchC1 = document.querySelector("#switch-c1");
    //     const switchC2 = document.querySelector("#switch-c2");
    //     const switchCircle = document.querySelectorAll(".switch__circle");
    //     const switchBtn = document.querySelectorAll(".switch-btn");
    //     const aContainer = document.querySelector("#a-container");
    //     const bContainer = document.querySelector("#b-container");
    //     const allButtons = document.querySelectorAll(".submit");

    //     const getButtons = (e) => e.preventDefault();

    //     const changeForm = (e) => {
    //         switchCtn.classList.add("is-gx");
    //         setTimeout(function () {
    //             switchCtn.classList.remove("is-gx");
    //         }, 1500);

    //         switchCtn.classList.toggle("is-txr");
    //         switchCircle[0].classList.toggle("is-txr");
    //         switchCircle[1].classList.toggle("is-txr");

    //         switchC1.classList.toggle("is-hidden");
    //         switchC2.classList.toggle("is-hidden");
    //         aContainer.classList.toggle("is-txl");
    //         bContainer.classList.toggle("is-txl");
    //         bContainer.classList.toggle("is-z200");
    //     };

    //     const mainF = (e) => {
    //         for (let i = 0; i < allButtons.length; i++)
    //             allButtons[i].addEventListener("click", getButtons);
    //         for (let i = 0; i < switchBtn.length; i++)
    //             switchBtn[i].addEventListener("click", changeForm);
    //     };

    //     window.addEventListener("load", mainF);

    //     // Cleanup function
    //     return () => {
    //         window.removeEventListener("load", mainF);
    //         for (let i = 0; i < allButtons.length; i++)
    //             allButtons[i].removeEventListener("click", getButtons);
    //         for (let i = 0; i < switchBtn.length; i++)
    //             switchBtn[i].removeEventListener("click", changeForm);
    //     };
    // }, []);
    const cannotLogin = async () => {
        const res = infoToken();
        if(res !== null) {
            navigate("/")
        }
    }
    useEffect(() => {
        document.title = "Đăng nhập";
        cannotLogin();
    }, [])

    return (
        <>
            <div className="login">

                <div className="main">
                    <Formik

                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={Yup.object().shape({
                            username: Yup.string().required("Tài khoản không được để trống"),
                            password: Yup.string().required("Mật khẩu không được để trống")
                        })}
                        onSubmit={(values) => {
                            console.log("submit", values);
                            loginAccount(values)
                        }}>

                        {/* <div className="container a-container" id="a-container">
                            <Form className="form" id="a-form" method="" action="">
                                <h2 className="form_title title">Đăng ký tài khoản</h2>
                                <Field className="form__input" type="text" placeholder="Tài khoản" />
                                <Field className="form__input" type="text" placeholder="Mật khẩu" />
                                <Field className="form__input" type="password" placeholder="Nhập lại mật khẩu" />
                                <button className="form__button button submit">Đăng ký</button>
                            </Form>
                        </div> */}
                        <div className="Phap-container b-container" id="b-container">
                            <Form className="form" id="b-form" method="" action="">
                                <h2 className="form_title title">Đăng nhập bằng</h2>
                                <Field className="form__input" name="username" type="text" placeholder="Tài khoản" />
                                <ErrorMessage component="span" className='text-danger' name='username' />
                                <Field className="form__input" name="password" type="password" placeholder="Mật khẩu" />
                                <a className="form__link">Quên mật khẩu</a>
                                <button className="form__button button submit" type='submit'>Đăng nhập</button>
                            </Form>
                        </div>


                    </Formik>
                    <div className="switch" id="switch-cnt">
                        <div className="switch__circle"></div>
                        <div className="switch__circle switch__circle--t"></div>
                        <div className="switch__container" id="switch-c1">
                            <h2 className="switch__title title">Chào mừng quay trở lại !</h2>
                            <p className="switch__description description">Để duy trì kết nối với chúng tôi vui lòng đăng nhập bằng thông tin cá nhân của bạn</p>
                            <button className="switch__button button switch-btn">Đăng ký</button>
                        </div>
                        <div className="switch__container is-hidden" id="switch-c2">
                            <h2 className="switch__title title">Xin chào bạn !</h2>
                            <p className="switch__description description">Nhập thông tin cá nhân của bạn và bắt đầu hành trình với chúng tôi</p>
                            <button className="switch__button button switch-btn">Đăng ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}