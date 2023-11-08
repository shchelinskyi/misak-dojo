import React from 'react';
import s from "./GymsPage.module.scss";
import {Col, Container, Image, Row} from "react-bootstrap";
import ContactGym from "../../components/ContactGym";
import num1 from "../../assets/images/num1.png";
import num2 from "../../assets/images/num2.png";
import num3 from "../../assets/images/num3.png";
import smile from "../../assets/images/smile.png";
import smile2 from "../../assets/images/smile2.png";
import scroll from "../../assets/images/scroll.png";
import eyes from "../../assets/images/eyes.png";
import monday from "../../assets/images/monday.png";
import tuesday from "../../assets/images/tuesday.png";
import wednesday from "../../assets/images/wednesday.png";
import thursday from "../../assets/images/thursday.png";
import friday from "../../assets/images/friday.png";
import saturday from "../../assets/images/saturday.png";

const GymsPage = () => {
    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>НAШІ ЗАЛИ</h3>
            <Container className="position-relative" style={{marginBottom: "138px"}}>
                <Image className={s.num1Icon} src={num1}/>
                <Row style={{marginTop: "58px"}}>
                    <Col>
                        <div>
                            <ContactGym address="вул. Маршала Тимошенка, 9" number="+38 (099) 042 08 20"/>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.item3times}>
                            <Image className={s.dayIcon} src={monday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>Група 3 (новачки, діти 5-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>Група 2 (діти 9-13 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>Група 1 (доросла, 14+ років)</p>
                            </div>
                        </div>

                        <div className={s.item3times}>
                            <Image className={s.smileIcon} src={smile}/>
                            <Image className={s.dayIcon} src={wednesday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>Група 3 (новачки, діти 5-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>Група 2 (діти 9-13 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>Група 1 (доросла, 14+ років)</p>
                            </div>
                        </div>

                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={friday}/>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 4 (новачки, діти 5-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>Група 5 (новачки, діти 9-15 років)</p>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 4 (новачки, діти 5-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 21:00</li>
                                <p className={s.text}>Група 5 (новачки, діти 9-15 років)</p>
                            </div>
                        </div>
                        <div className={s.item3times}>
                            <Image className={s.dayIcon} src={thursday}/>
                            <div>
                                <li className={s.timeText}>17:30 - 18:30</li>
                                <p className={s.text}>Група 3 (новачки, діти 5-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>18:30 - 20:00</li>
                                <p className={s.text}>Група 2 (діти 9-13 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>20:00 - 22:00</li>
                                <p className={s.text}>Група 1 (доросла, 14+ років)</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className={s.line}></div>
            </Container>

            <Container className="position-relative" style={{marginBottom: "138px"}}>
                <Image className={s.num1Icon} src={num2}/>
                <Row style={{marginTop: "58px"}}>
                    <Col>
                        <div>
                            <ContactGym address="проспект Володимира Івасюка 13Б," number="+38 (099) 042 08 20"/>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={monday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група 6 (діти 6-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 7 (діти 9-15 років</p>
                            </div>
                        </div>

                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={wednesday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група 6 (діти 6-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 7 (діти 9-15 років</p>
                            </div>
                        </div>

                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={friday}/>
                            <Image className={s.scrollIcon} src={scroll}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група 6 (діти 6-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 7 (діти 9-15 років</p>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <Image className={s.eyesIcon} src={eyes}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група 6 (діти 6-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 7 (діти 9-15 років</p>
                            </div>
                        </div>
                        <div className={s.item2times}>
                            <Image className={s.dayIcon} src={thursday}/>
                            <div>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група 6 (діти 6-8 років)</p>
                            </div>
                            <div>
                                <li className={s.timeText}>19:00 - 20:00</li>
                                <p className={s.text}>Група 7 (діти 9-15 років</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <div className={s.line}></div>
            </Container>
            <Container className="position-relative" style={{marginBottom: "138px"}}>
                <Image className={s.num1Icon} src={num3}/>
                <Row>

                    <Col>
                        <div>
                            <ContactGym address="вул. Олександра Мишуги, 2" number="+38 (093) 726 54 24"/>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.item2timesShot}>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група (4-8 років)</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>Група (дорослі)</p>
                            </div>
                        </div>

                        <div className={s.item2timesShot}>
                            <Image className={s.dayIcon} src={saturday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>10:00 - 11:00</li>
                                <p className={s.text}>Група (4-8 років)</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>11:00 - 12:30</li>
                                <p className={s.text}>Група (дорослі)</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={s.item2timesShot}>
                            <Image className={s.smile2Icon} src={smile2}/>
                            <Image className={s.dayIcon} src={tuesday}/>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>18:00 - 19:00</li>
                                <p className={s.text}>Група (4-8 років)</p>
                            </div>
                            <div className={s.dataRow}>
                                <li className={s.timeText}>19:00 - 20:30</li>
                                <p className={s.text}>Група (дорослі)</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GymsPage;
