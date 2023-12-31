import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { infoToken } from "../service/Account";
import { createOrder } from "../service/CartService";


export function Paypal(props) {

    const paypal = useRef()
    const [carts, setCart] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    const price = parseFloat(props.props1);
                    const priceUse = parseInt(price / 24000);
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "Minh Pháp Jewelry",
                                amount: {
                                    currency_code: "USD",
                                    value: priceUse,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    setCart({
                        cartDtoList: props.props2
                    });
                    const res = infoToken();
                    if(res != null) {
                        await createOrder({
                            cartDtoList: props.props2
                        }, res.sub);
                    }
                    Swal.fire("Thanh toán thành công!")
                    window.location.reload();
                    console.log("order",order);
                },
                onError: (err) => {
                    console.log(err);
                    Swal.fire("Thanh toán thất bại!", "", "error");
                }
            })
            .render(paypal.current);
    }, []);

    return (
        <>
            <div ref={paypal}
            ></div>
        </>
    )
} 