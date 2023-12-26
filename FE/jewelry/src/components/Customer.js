import { ErrorMessage, Field, Form, Formik } from "formik";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { createCustomer, getInfoCustomer, infoToken } from "../service/Account";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';

export function Customer() {
    const [customer, setCustomer] = useState();

    const getCustomer = async () => {
        const res = infoToken();
        const result = await getInfoCustomer(res.sub);
        setCustomer(result);
    }
    const updateCustomer = async (value) => {
        const res = infoToken();
        if (res != null) {
            await createCustomer(res.sub, value)
            Swal.fire("Cập nhật thông tin thành công")
        }
    }

    useEffect(() => {
        getCustomer();
        document.title = "Thông tin cá nhân"
    }, [])
    if (customer == undefined) {
        return null;
    }

    return (
        <>
            <Header />
            <h1 className="text-center mt-5">Thông tin cá nhân</h1>
            <Formik
                initialValues={{
                    id: customer?.id,
                    fullName: customer?.fullName,
                    dob: customer?.dob,
                    gender: customer?.gender,
                    email: customer?.email,
                    phone: customer?.phone,
                    idCard: customer?.idCard,
                    address: customer?.address
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string().required("Vui lòng không để trống trường này"),
                    dob: Yup.string().required("Vui lòng không để trống trường này"),
                    gender: Yup.string().required("Vui lòng không để trống trường này"),
                    email: Yup.string().required("Vui lòng không để trống trường này"),
                    phone: Yup.string().required("Vui lòng không để trống trường này"),
                    idCard: Yup.string().required("Vui lòng không để trống trường này"),
                    address: Yup.string().required("Vui lòng không để trống trường này")
                })}
                onSubmit={(values) => {
                    updateCustomer(values);
                }}
            >
                <div className="container px-5 my-5">
                    <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="họTen">Họ Tên</label>
                            <Field className="form-control" id="họTen" name="fullName" type="text" placeholder="Họ Tên" data-sb-validations />
                            <ErrorMessage className="text-danger" name="fullName" component="span" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="ngaySinh">Ngày sinh</label>
                            <Field className="form-control" id="ngaySinh" name="dob" type="date" placeholder="Ngày sinh" data-sb-validations />
                            <ErrorMessage className="text-danger" name="dob" component="span" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="giớiTinh">Giới tính</label>
                            <Field className="form-control" id="giớiTinh" name="gender" type="text" placeholder="Giới tính" data-sb-validations />
                            <ErrorMessage className="text-danger" name="gender" component="span" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <Field className="form-control" id="email" name="email" type="email" placeholder="Email" data-sb-validations="email" />
                            <ErrorMessage className="text-danger" name="email" component="span" />
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email Email is not valid.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="sốDiệnThoại">Số điện thoại</label>
                            <Field className="form-control" id="sốDiệnThoại" name="phone" type="text" placeholder="Số điện thoại" data-sb-validations />
                            <ErrorMessage className="text-danger" name="phone" component="span" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="canCướcCongDan">Căn cước công dân</label>
                            <Field className="form-control" id="canCướcCongDan" name="idCard" type="text" placeholder="Căn cước công dân" data-sb-validations />
                            <ErrorMessage className="text-danger" name="idCard" component="span" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="dịaChỉ">Địa chỉ</label>
                            <Field className="form-control" id="dịaChỉ" name="address" type="text" placeholder="Địa chỉ" data-sb-validations />
                            <ErrorMessage className="text-danger" name="address" component="span" />
                        </div>

                        <div className="d-grid">
                            <button className="btn btn-outline-dark btn-lg" id="submitButton" type="submit">Cập nhật</button>
                        </div>
                    </Form>
                </div>


            </Formik>
            <Footer />
        </>
    )
}