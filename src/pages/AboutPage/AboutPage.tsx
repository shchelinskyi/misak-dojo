import {Container, Image, Stack} from "react-bootstrap";
import React from "react";
import members from "../../assets/images/members.png";
import heart from "../../assets/images/heart.png";
import handL from "../../assets/images/hand-l.png";
import handR from "../../assets/images/hand-r.png";
import person from "../../assets/images/person.png";
import stars from "../../assets/images/stars.png";
import about1 from "../../assets/images/about-1.png";
import about2 from "../../assets/images/about-2.png";
import smiles from "../../assets/images/smiles.png";
import line from "../../assets/images/line.png";
import chimano from "../../assets/images/chimano.png";
import cup from "../../assets/images/cup.png";
import team from "../../assets/images/team.png";
import titleTeam from "../../assets/images/title-team.png";
import s from "./AboutPage.module.scss";
import cn from "classnames";


const AboutPage = () => {
    return (
        <>
            <Container style={{marginTop: "100px"}}>
                <Container style={{width: "830px", margin: "0 auto"}}>
                    <Stack direction="horizontal" gap={1}>
                        <span className={s.slogan}>Ставай частиною нашої дружньої команди,</span>
                        <Image src={members} style={{width: "307px", height: "51px"}}/>
                    </Stack>
                    <Stack direction="horizontal" gap={2}>
                        <span className={s.slogan}>займайся у</span>
                        <span className={cn(s.slogan, s.dojo)}>сучасному Доджо</span>
                        <Image src={heart}/>
                        <span className={s.slogan}>та розвивай свої силу і дух</span>
                        <Image src={handL}/>
                        <Image src={person}/>
                        <Image src={handR}/>
                    </Stack>
                </Container>
                <Container style={{marginTop: "161px"}}>
                    <Stack direction="horizontal" gap={4}>
                        <div className={s.about}>
                            <h3 className={s.aboutTitle}>ПРО НАC</h3>
                            <p className={s.mainText} style={{marginBottom: "40px"}}>
                                Основною метою створення Спортивного клубу Кіокушинкай карате «Місак Доджо» є
                                популяризація
                                карате шляхом формування повноцінної групи Каратек, яка буде йти шляхом Кіокушинкай,
                                розвиваючи свої моральні та вольові якості, вдосконалюючись,
                                як інтелектуально так і фізично.
                            </p>
                            <p className={s.mainText}>
                                Ми створили Доджо, у якому раді бачити кожного цілеспрямованого адепта карате, який
                                проходитиме шлях воїна у любові, повазі та терпінні до занять, тренера
                                та всієї групи Каратек. Наша команда приділяє велику увагу розвитку фізичних і духовних
                                навичок, формуванню повноцінної особистості в дружньому і згуртованому колективі!
                            </p>
                            <Image className={s.starsImg} src={stars}/>
                        </div>
                        <Stack direction="vertical" gap={2}>
                            <Image className={s.aboutImg1} src={about1}/>
                            <Image className={s.aboutImg2} src={about2}/>
                        </Stack>
                    </Stack>
                </Container>
                <Container className={s.totalBlock} style={{marginTop: "18px", marginBottom: "170px"}}>
                    <Stack direction={"horizontal"}
                           style={{justifyContent: "center", alignItems: "center", gap: "22px"}}>

                        <Stack className="position-relative" direction={"horizontal"} style={{gap: "22px"}}>
                            <h3 className={s.totalNumber}>70</h3>
                            <Stack direction="vertical">
                                <h4 className={s.subTitle}>каратистів</h4>
                                <p className={s.subMain}>зараз тренуються <br/> у Місак Доджо</p>
                            </Stack>
                            <Image className={s.smilesIcon} src={smiles}/>
                        </Stack>

                        <Image src={line}/>

                        <Stack className="position-relative" direction={"horizontal"} style={{gap: "22px"}}>
                            <h3 className={s.totalNumber}>4</h3>
                            <Stack direction="vertical">
                                <h4 className={s.subTitle}>рази на рік</h4>
                                <p className={s.subMain}>учні здають екзамени
                                    <br/> на пояси</p>
                            </Stack>
                            <Image className={s.chimanoIcon} src={chimano}/>
                        </Stack>

                        <Image src={line}/>

                        <Stack className="position-relative" direction={"horizontal"} style={{gap: "22px"}}>
                            <h3 className={s.totalNumber}>3</h3>
                            <Stack direction="vertical">
                                <h4 className={s.subTitle}>чемпіони</h4>
                                <p className={s.subMain}>укр. та європ. змагань <br/> серед наших учнів</p>
                            </Stack>
                            <Image className={s.cupIcon} src={cup}/>
                        </Stack>
                    </Stack>
                </Container>
            </Container>
            <div className="position-relative" style={{width: "1720px", margin:"0 auto"}}>
                <Image className={s.teamImage} src={team}/>
                <Image className={s.titleTeamImage} src={titleTeam}/>
            </div>
        </>
    );
};

export default AboutPage;
