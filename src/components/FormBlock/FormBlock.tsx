import React, {useState} from 'react';
import s from "./FormBlock.module.scss";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Form as BootstrapForm} from "react-bootstrap";
import * as Yup from "yup";
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";

interface TypeValue {
    name: string;
    phone: string;
    comment: string
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Поле обов'язкове"),
    phone: Yup.string().required("Поле обов'язкове").matches(/^\d{9}$/, "Введіть 9 цифр"),
    comment: Yup.string().required("Поле обов'язкове"),
});

const initialValues: TypeValue = {
    name: "",
    phone: "",
    comment: "121"
};

const CustomTextarea = ({field, form, ...props}) => (
    <>
        <BootstrapForm.Control as="textarea" rows={3} {...field} {...props} />
    </>
);

const CustomCheckbox = ({field, form, ...props}) => (
    <BootstrapForm.Check>
        <BootstrapForm.Check.Input
            type="checkbox"
            {...field}
            {...props}
            style={{
                backgroundColor: field.value ? "red" : "transparent",
                borderColor: "red",
            }}
        />
        <BootstrapForm.Check.Label style={{color: "red"}} htmlFor={field.name}>
            Я даю згоду на обробку моїх персональних даних <br/> згідно з політикою конфіденційності
        </BootstrapForm.Check.Label>
    </BootstrapForm.Check>
);
const FormBlock = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleSubmit = (values: TypeValue, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(1);
        setSubmitting(false);
        console.log(values);
        sendMessageToTelegram(values)
    };

    return (
        <div className={s.formBlock}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h4 className={s.formTitle}>Якщо виникли запитання заповніть форму <br className={s.wrap}/> і
                            ми зателефонуємо вам протягом дня :)</h4>
                        <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                            <Field type="text" name="name" as={BootstrapForm.Control}
                                   placeholder="Ваше ім’я" className={s.field}/>
                            <ErrorMessage name="name" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                            <Field type="text" name="phone" as={BootstrapForm.Control}
                                   placeholder="+38" className={s.field}/>
                            <ErrorMessage name="phone" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                            <Field type="text" name="comment" as={CustomTextarea}
                                   placeholder="Коментар"
                                   style={{minHeight: "130px"}}
                                   className={s.field}
                            />
                            <ErrorMessage name="comment" component={BootstrapForm.Text}
                                          className="text-danger"/>
                        </BootstrapForm.Group>

                        {/*<BootstrapForm.Group className="mb-3" controlId="formBasicAgree">*/}
                        {/*    <Field type="checkbox" name="agree" as={CustomCheckbox} />*/}
                        {/*</BootstrapForm.Group>*/}

                        {/*<BootstrapForm.Group className="mb-3" controlId="formBasicAgree">*/}
                        {/*    <Field type="checkbox" name="agree"/>*/}
                        {/*    <BootstrapForm.Label className="text-black">Я даю згоду на обробку моїх персональних даних <br/> згідно з політикою конфіденційності</BootstrapForm.Label>*/}
                        {/*</BootstrapForm.Group>*/}

                        <label>
                            <input type="checkbox" checked={isChecked}
                                   onChange={handleCheckboxChange} className={s.checkbox}
                                   name="agree"/>
                            <span className={s.box}></span>
                            <span className={s.checkboxLabel}>Я даю згоду на обробку моїх персональних даних згідно з політикою конфіденційності</span>
                        </label>


                        {/*<BootstrapForm.Check*/}
                        {/*    className="custom-control-input"*/}
                        {/*    type="checkbox"*/}
                        {/*    id="checkbox"*/}
                        {/*    label="Я даю згоду на обробку моїх персональних даних згідно з політикою конфіденційності"*/}
                        {/*/>*/}
                        <div className="d-flex justify-content-end">
                            <Button type="submit" className={s.btn}
                                    disabled={!isChecked || isSubmitting}>
                                надіслати
                            </Button>
                        </div>

                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default FormBlock;
