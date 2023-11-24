import {useState} from 'react';
import {Form as BootstrapForm} from 'react-bootstrap';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import CustomTextarea from "../CustomTextArea";
import CustomPhoneInput from "../CustomPhoneInput";
import * as Yup from 'yup';
import {useAppDispatch} from "../../hooks";
import {closeForm} from "../../redux/slices/formTrialSessionSlice"
import {useTranslation} from "react-i18next";
import {sendMessageToTelegram} from "../../tools/sendMessageToTelegram.ts";
import s from "./FormTrialSession.module.scss"

interface TypeValue {
    name: string;
    age: string;
    phone: string;
    comment: string
}

const initialValues: TypeValue = {
    name: '',
    age: '',
    phone: '',
    comment: ''
};

const FormTrialSession = () => {
    const [isChecked, setIsChecked] = useState(false);
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleCloseForm = () => {
        dispatch(closeForm());
    }

    const handleSubmit = (values: TypeValue, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        setSubmitting(false);
        dispatch(closeForm());
        sendMessageToTelegram(values)
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(t("fieldRequired")),
        age: Yup.string().required(t("fieldRequired")).matches(/^\d{2}$/, t("validationAge")),
        comment: Yup.string().required(t("fieldRequired")),
        phone: Yup.string().required(t("fieldRequired"))
    });

    return (
        <div className={s.overlay} onClick={handleCloseForm}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <div className={s.titleBlock}>
                    <h4 className={s.title}>{t("freeTrial")}</h4>
                    <span className={s.closeBtn} onClick={handleCloseForm}>&times;</span>
                </div>
                <div className={s.description}>
                    {t("freeTrialLabel1")}
                    <br className={s.wrap}/>
                    {t("freeTrialLabel2")}
                </div>
                <div className={s.line}></div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                                <BootstrapForm.Label className={s.formLabel}>{t("formTrialName")}</BootstrapForm.Label>
                                <Field type="text" name="name" as={BootstrapForm.Control}
                                       className={s.field}/>
                                <ErrorMessage name="name" component={BootstrapForm.Text}
                                              className="text-danger"/>
                            </BootstrapForm.Group>

                            <BootstrapForm.Group className="mb-3" controlId="formBasicAge">
                                <BootstrapForm.Label className={s.formLabel}>{t("formTrialAge")}</BootstrapForm.Label>
                                <Field type="text" name="age" as={BootstrapForm.Control}
                                       className={s.field}/>
                                <ErrorMessage name="age" component={BootstrapForm.Text}
                                              className="text-danger"/>
                            </BootstrapForm.Group>

                            <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                                <BootstrapForm.Label className={s.formLabel}>{t("formTrialPhone")}</BootstrapForm.Label>
                                <Field type="tel" name="phone" as={CustomPhoneInput} className={s.field}/>
                                <ErrorMessage name="phone" component={BootstrapForm.Text} className="text-danger"/>
                            </BootstrapForm.Group>

                            <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                                <BootstrapForm.Label
                                    className={s.formLabel}>{t("formTrialComment")}</BootstrapForm.Label>
                                <Field type="text" name="comment" as={CustomTextarea} style={{minHeight: "50px"}}
                                       className={s.field}/>
                                <ErrorMessage name="comment" component={BootstrapForm.Text}
                                              className="text-danger"/>
                            </BootstrapForm.Group>

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
                                <button type="submit" className={s.btn} disabled={!isChecked || isSubmitting}>
                                    {t('sendBtn')}
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormTrialSession;
