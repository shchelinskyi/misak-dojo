import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Form as BootstrapForm} from "react-bootstrap";
import s from "./CartForm.module.scss";
import CustomPhoneInput from "../CustomPhoneInput";
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";
import {useAppDispatch} from "../../hooks.ts";

interface TypeValue {
    name: string;
    phone: string;
    email: string
}

const initialValues: TypeValue = {
    name: '',
    phone: '',
    email: ''
};

const CartForm = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        email: Yup.string().required(t("fieldRequired")),
        phone: Yup.string().required(t("fieldRequired"))
    });

    const handleSubmit = (values: TypeValue, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setSubmitting(false);
        console.log(values)
        // dispatch(closeForm());
        // sendMessageToTelegram(values)
    };

    const [selectedOption, setSelectedOption] = useState('pickup');

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

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
                            <BootstrapForm.Label className={s.formLabel}>Ваше ім’я</BootstrapForm.Label>
                            <Field type="text" name="name" as={BootstrapForm.Control}
                                   className={s.field}/>
                            <ErrorMessage name="name" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                            <BootstrapForm.Label className={s.formLabel}>Телефон</BootstrapForm.Label>
                            <Field type="tel" name="phone" as={CustomPhoneInput} className={s.field}/>
                            <ErrorMessage name="phone" component={BootstrapForm.Text} className="text-danger"/>
                        </BootstrapForm.Group>


                        <BootstrapForm.Group className="mb-3" controlId="formBasicEmail">
                            <BootstrapForm.Label className={s.formLabel}>Ваш e-mail</BootstrapForm.Label>
                            <Field type="text" name="email" as={BootstrapForm.Control}
                                   className={s.field}/>
                            <ErrorMessage name="emai" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <div className={s.deliveryBlock}>
                            <h5 className={s.deliveryTitle}>Спосіб доставки:</h5>
                            <label>
                                <input type="radio" value="pickup"
                                       checked={selectedOption === 'pickup'}
                                       onChange={() => handleRadioChange('pickup')}
                                       className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                           Самовивіз (безкоштовно)
                                    </span>
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="post"
                                    checked={selectedOption === 'post'}
                                    onChange={() => handleRadioChange('post')}
                                    className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                          Нова Пошта (70 грн)
                                    </span>
                            </label>

                            <label className={s.label}>
                                <input
                                    type="radio"
                                    value="courier"
                                    checked={selectedOption === 'courier'}
                                    onChange={() => handleRadioChange('courier')}
                                    className={s.radio}
                                />
                                <span className={s.box}></span>
                                <span className={s.deliveryLabel}>
                                         Кур’єр по Києву (100 грн)
                                    </span>
                            </label>
                        </div>

                        {selectedOption === "courier" && (
                            <>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicCity">
                                    <BootstrapForm.Label className={s.formLabel}>Місто</BootstrapForm.Label>
                                    <Field type="text" name="city" as={BootstrapForm.Control}
                                           className={s.field} placeholder="м. Біла Церква, Київська область"/>
                                    <ErrorMessage name="city" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicAddress">
                                    <BootstrapForm.Label className={s.formLabel}>Адреса</BootstrapForm.Label>
                                    <Field type="text" name="address" as={BootstrapForm.Control}
                                           className={s.field} placeholder="вул. Підвальна"/>
                                    <ErrorMessage name="address" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicNumber">
                                    <BootstrapForm.Label className={s.formLabel}>Номер будинку</BootstrapForm.Label>
                                    <Field type="text" name="number" as={BootstrapForm.Control}
                                           className={s.field} placeholder="57"/>
                                    <ErrorMessage name="number" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicFlat">
                                    <BootstrapForm.Label className={s.formLabel}>Квартира</BootstrapForm.Label>
                                    <Field type="text" name="flat" as={BootstrapForm.Control}
                                           className={s.field} placeholder="345"/>
                                    <ErrorMessage name="flat" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                            </>)}

                        {selectedOption === "post" && (
                            <>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicPostCity">
                                    <BootstrapForm.Label className={s.formLabel}>Місто</BootstrapForm.Label>
                                    <Field type="text" name="postCity" as={BootstrapForm.Control}
                                           className={s.field} placeholder="м. Біла Церква, Київська область"/>
                                    <ErrorMessage name="postCity" component={BootstrapForm.Text}
                                                  className="text-danger"/>
                                </BootstrapForm.Group>
                                <BootstrapForm.Group className="mb-3" controlId="formBasicPostNumber">
                                    <BootstrapForm.Label className={s.formLabel}>Номер відділення Нової пошти</BootstrapForm.Label>
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
                                <span className={s.footerLabel2}>{t("formFooter2")}</span>
                            </p>
                        </label>

                        <div className="d-flex justify-content-end">
                            <div className={s.totalPrice}>Загальна сума: 2880 грн</div>
                        </div>

                        <div className="d-flex justify-content-end">
                            <button type="submit" className={s.btn} disabled={!isChecked || isSubmitting}>
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