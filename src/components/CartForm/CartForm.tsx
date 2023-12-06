import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import {Form as BootstrapForm} from "react-bootstrap";
import s from "./CartForm.module.scss";
import CustomPhoneInput from "../CustomPhoneInput";
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Link} from "react-router-dom";
import {closeCartModal, removeAllCartProducts} from "../../redux/slices/cartSlice.ts";
import {sendProductsToTelegram} from "../../tools/sendProductsToTelegram.ts";
import {string} from "yup";

type TypeValue = {
    name: string;
    phone: string;
    email: string;
    city: string;
    address:string;
    number:string;
    flat:string;
    postCity:string;
    postNumber:string;
    selectedOption:string;
}

const initialValues: TypeValue = {
    name: '',
    phone: '',
    email: '',
    city: '',
    address:'',
    number:'',
    flat:'',
    postCity:'',
    postNumber:'',
    selectedOption:'pickup'
};

const CartForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const total = useAppSelector(state => state.cart.total);
    const [isChecked, setIsChecked] = useState(false);
    const [totalSum, setTotalSum] = useState(total);
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const [selectedOption, setSelectedOption] = useState('pickup');

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        email: Yup.string().required(t("fieldRequired")),
        post:  Yup.boolean(),
        phone: Yup.string()
            .required(t("fieldRequired"))
            .test('isValidPhone', t("validationPhone"), (value, { parent }) => {
                const phoneNumber = value.replace(/\D/g, '');
                return parent.selectedOption !== 'courier' || phoneNumber.length === 12;
            }),
        city: Yup.string().when(selectedOption, {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        address: Yup.string().when(selectedOption, {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        number: Yup.string().when(selectedOption, {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        flat: Yup.string().when(selectedOption, {
            is: 'courier',
            then: (schema) => schema.required(t("fieldRequired")),
        }),
        postCity: Yup.string().when(selectedOption, {
            is: 'false',
            then: (validationSchema) => validationSchema.required(t("fieldRequired")),
        }),
        postNumber: Yup.string().when('post', {
            is: 'false',
            then: (validationSchema) => validationSchema.required(t("fieldRequired")),
        })
    });


    const handleSubmit = (values: TypeValue, {setSubmitting, resetForm}:  FormikHelpers<TypeValue>) => {
        setSubmitting(false);
        console.log(values);
        // sendProductsToTelegram({cartItems, values, total, totalSum});
        dispatch(removeAllCartProducts());
        resetForm();
        dispatch(closeCartModal());
    };



    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    useEffect(() => {
        if (selectedOption === "pickup") {
            setTotalSum(total)
        } else if (selectedOption === "courier") {
            const sum = Number(total) + 100;
            setTotalSum(sum)
        } else {
            const sum = Number(total) + 70;
            setTotalSum(sum)
        }
    }, [dispatch, total, selectedOption]);

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                            <BootstrapForm.Label className={s.formLabel}>{t("formName")}</BootstrapForm.Label>
                            <Field type="text" name="name" as={BootstrapForm.Control}
                                   className={s.field}/>
                            <ErrorMessage name="name" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                            <BootstrapForm.Label className={s.formLabel}>{t("formTrialPhone")}</BootstrapForm.Label>
                            <Field type="tel" name="phone" as={CustomPhoneInput} className={s.field}/>
                            <ErrorMessage name="phone" component={BootstrapForm.Text} className="text-danger"/>
                        </BootstrapForm.Group>


                        <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
                            <BootstrapForm.Label className={s.formLabel}>{t("your")} e-mail</BootstrapForm.Label>
                            <Field type="text" name="email" as={BootstrapForm.Control}
                                   className={s.field}/>
                            <ErrorMessage name="email" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <div className={s.deliveryBlock}>
                            <h5 className={s.deliveryTitle}>{t("delivery")}</h5>
                            <label>
                                <Field type="radio" value="pickup"
                                       name="selectedOption"
                                       checked={selectedOption === 'pickup'}
                                       onChange={() => handleRadioChange('pickup')}
                                       className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                           {t("freeDelivery")}
                                    </span>
                            </label>

                            <label>
                                <Field
                                    type="radio"
                                    value="post"
                                    name="selectedOption"
                                    checked={selectedOption === 'post'}
                                    onChange={() => handleRadioChange('post')}
                                    className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                          {t("novaPost")} (70 {t("uah")})
                                    </span>
                            </label>

                            <label className={s.label}>
                                <Field
                                    type="radio"
                                    value="courier"
                                    name="selectedOption"
                                    checked={selectedOption === 'courier'}
                                    onChange={() => handleRadioChange('courier')}
                                    className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                         {t("courier")} (100 {t("uah")})
                                    </span>
                            </label>
                        </div>

                        {selectedOption === "courier" && (
                            <>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicCity">
                                    <BootstrapForm.Label className={s.formLabel}>{t("cityLabel")}</BootstrapForm.Label>
                                    <Field type="text" name="city" as={BootstrapForm.Control}
                                           className={s.field} placeholder={t("cityPlaceholder")}/>
                                    <ErrorMessage name="city" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicAddress">
                                    <BootstrapForm.Label className={s.formLabel}>{t("address")}</BootstrapForm.Label>
                                    <Field type="text" name="address" as={BootstrapForm.Control}
                                           className={s.field} placeholder={t("streetLabel")}/>
                                    <ErrorMessage name="address" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicNumber">
                                    <BootstrapForm.Label
                                        className={s.formLabel}>{t("buildingNumber")}</BootstrapForm.Label>
                                    <Field type="text" name="number" as={BootstrapForm.Control}
                                           className={s.field} placeholder="57"/>
                                    <ErrorMessage name="number" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicFlat">
                                    <BootstrapForm.Label className={s.formLabel}>{t("flat")}</BootstrapForm.Label>
                                    <Field type="text" name="flat" as={BootstrapForm.Control}
                                           className={s.field} placeholder="345"/>
                                    <ErrorMessage name="flat" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                            </>)}

                        {selectedOption === 'post' && (
                            <>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicPostCity">
                                    <BootstrapForm.Label className={s.formLabel}>{t("cityLabel")}</BootstrapForm.Label>
                                    <Field type="text" name="postCity" as={BootstrapForm.Control}
                                           className={s.field} placeholder={t("cityPlaceholder")}/>
                                    <ErrorMessage name="postCity" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicPostNumber">
                                    <BootstrapForm.Label className={s.formLabel}>{t("postNumber")}</BootstrapForm.Label>
                                    <Field type="text" name="postNumber" as={BootstrapForm.Control}
                                           className={s.field} placeholder="10"/>
                                    <ErrorMessage name="postNumber" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                            </>)}


                        <label className={s.label}>
                            <input type="checkbox" checked={isChecked}
                                   onChange={handleCheckboxChange} className={s.checkbox}
                                   name="agree"/>
                            <span className={s.box}></span>
                            <p className={s.checkboxLabel}>
                                <span className={s.footerLabel1}>{t("formFooter1")}</span>
                                <br/>
                                <Link className={s.link2} to="contract-offer" onClick={() => dispatch(closeCartModal())}>
                                    <span className={s.footerLabel2}>{t("formFooter2")}</span>
                                </Link>
                            </p>
                        </label>

                        <div className="d-flex justify-content-end">
                            <div className={s.totalPrice}>{t("totalSum")} {totalSum} {t("uah")}</div>
                        </div>

                        <div  className={s.btnBlock}>
                            <button type="submit" className={s.btnSubmit}
                                    disabled={!isChecked || isSubmitting}>
                                {t('sendBtn')}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CartForm;
