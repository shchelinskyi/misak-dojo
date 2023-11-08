import {Col, Form as BootstrapForm, Container, Image, Row, Stack, FormCheck, Button} from "react-bootstrap";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import s from "./ContactsPage.module.scss";
import location from "../../assets/images/location.png";
import letter from "../../assets/images/letter.png";
import phone from "../../assets/images/phone.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import telegram from "../../assets/images/telegram.png";
import underground from "../../assets/images/undergroundIcon.png";
import CustomButton from "../../components/CustomButton";
import cn from "classnames";
import ua from "../../assets/images/ua.png";
import roundWait from "../../assets/images/roundWait.png";

interface TypeValue {
    name: string;
    phone: string;
    comment: string
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Поле обов'язкове"),
    phone: Yup.string().required("Поле обов'язкове").matches(/^\d{9}$/, "Введите 9 цифр"),
    content: Yup.string().required("Поле обов'язкове"),
});

const initialValues: TypeValue = {
    name: "",
    phone: "",
    comment: ""
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


const ContactsPage = () => {

    const handleSubmit = (values: TypeValue, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        console.log(1);
        setSubmitting(false);
        console.log(values);
    };

    return (
        <Container className={s.wrapper}>
            <Container className="position-relative">
                <h3 className={s.contactsTitle}>НАШІ КОНТАКТИ</h3>
                <div className={s.logoContainer}>
                    <Image className={s.AppLogo} src={roundWait} />
                    <Image src={ua} style={{ width: "49px", height: "49px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
                <Row>
                    <Col>
                        <Row>
                            <div className={s.contactBlock}>
                                <div style={{marginBottom: "36px"}}>
                                    <div className={s.contactItem}>
                                        <Image className={s.locationIcon} src={location}/>
                                        <p className={s.text}>м.Київ, вул. Маршала Тимошенка, 9</p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.letterIcon} src={letter}/>
                                        <p className={s.text}>MisakDojo@gmail.com</p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.phoneIcon} src={phone}/>
                                        <p className={s.text}>+38 (099) 042 08 20</p>
                                    </div>
                                </div>
                                <div className={s.socials}>
                                    <div className={s.icons}>
                                        <Image className={s.socialIcon} src={instagram}/>
                                        <Image className={s.socialIcon} src={facebook}/>
                                        <Image className={s.socialIcon} src={youtube}/>
                                        <Image className={s.socialIcon} src={telegram}/>
                                    </div>
                                    <div className={s.underground}>
                                        <Image className={s.undergroundIcon} src={underground}/>
                                        <p className={s.undergroundLabel}>Мінська</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <div className={s.contactBlock}>
                                <div style={{marginBottom: "36px"}}>
                                    <div className={s.contactItem}>
                                        <Image className={s.locationIcon} src={location}/>
                                        <p className={s.text}>м. Київ, проспект Володимира <br/>
                                            Івасюка 13Б, Початкова Школа 211
                                        </p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.letterIcon} src={letter}/>
                                        <p className={s.text}>MisakDojo@gmail.com</p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.phoneIcon} src={phone}/>
                                        <p className={s.text}>+38 (099) 042 08 20</p>
                                    </div>
                                </div>
                                <div className={s.socials}>
                                    <div className={s.icons}>
                                        <Image className={s.socialIcon} src={instagram}/>
                                        <Image className={s.socialIcon} src={facebook}/>
                                        <Image className={s.socialIcon} src={youtube}/>
                                        <Image className={s.socialIcon} src={telegram}/>
                                    </div>
                                    <div className={s.underground}>
                                        <Image className={s.undergroundIcon} src={underground}/>
                                        <p className={s.undergroundLabel}>Оболонь</p>
                                    </div>
                                </div>
                            </div>
                        </Row>

                        <Row>
                            <div className={s.contactBlock}>
                                <div style={{marginBottom: "36px"}}>
                                    <div className={s.contactItem}>
                                        <Image className={s.locationIcon} src={location}/>
                                        <p className={s.text}>м.Київ, вул. Олександра Мишуги, 2
                                        </p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.letterIcon} src={letter}/>
                                        <p className={s.text}>MisakDojo@gmail.com</p>
                                    </div>
                                    <div className={s.contactItem}>
                                        <Image className={s.phoneIcon} src={phone}/>
                                        <p className={s.text}>+38 (093) 726 54 24</p>
                                    </div>
                                </div>
                                <div className={s.socials}>
                                    <div className={s.icons}>
                                        <Image className={s.socialIcon} src={instagram}/>
                                    </div>
                                    <div className={s.underground}>
                                        <Image className={s.undergroundIcon} src={underground}/>
                                        <p className={s.undergroundLabel}>Позняки</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className={s.formBlock}>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({isSubmitting}) => (
                                        <Form>
                                            <h4 className={s.formTitle}>Якщо виникли запитання заповніть форму <br/> і
                                                ми зателефонуємо вам протягом дня :)</h4>
                                            <BootstrapForm.Group className="mb-3" controlId="formBasicName">
                                                <Field type="text" name="name" as={BootstrapForm.Control}
                                                       placeholder="Ваше ім’я"/>
                                                <ErrorMessage name="name" component={BootstrapForm.Text}
                                                              className="text-danger"/>
                                            </BootstrapForm.Group>

                                            <BootstrapForm.Group className="mb-3" controlId="formBasicPhone">
                                                <Field type="text" name="phone" as={BootstrapForm.Control}
                                                       placeholder="+38"/>
                                                <ErrorMessage name="phone" component={BootstrapForm.Text}
                                                              className="text-danger"/>
                                            </BootstrapForm.Group>

                                            <BootstrapForm.Group className="mb-3" controlId="formBasicComment">
                                                <Field type="text" name="comment" as={CustomTextarea}
                                                       placeholder="Коментар"
                                                       style={{minHeight: "130px"}}
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
                                                <input type="checkbox" className={s.checkbox} name="agree"/>
                                                <span className={s.box}></span>
                                                <span className={s.checkboxLabel}>Я даю згоду на обробку моїх персональних даних згідно з політикою конфіденційності</span>
                                            </label>


                                            {/*<BootstrapForm.Check*/}
                                            {/*    className="custom-control-input"*/}
                                            {/*    type="checkbox"*/}
                                            {/*    id="checkbox"*/}
                                            {/*    label="Я даю згоду на обробку моїх персональних даних згідно з політикою конфіденційності"*/}
                                            {/*/>*/}

                                            <Button type="submit" className={s.btn} disabled={isSubmitting}>
                                                надіслати
                                            </Button>

                                        </Form>
                                    )}
                                </Formik>


                            </div>
                        </Row>
                    </Col>
                </Row>

            </Container>


        </Container>
    );
};

export default ContactsPage;
