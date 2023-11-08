import {Container, Image} from "react-bootstrap";
import s from "./TeamPage.module.scss";
import TrainerLabel from "../../components/TrainerLabel";
import horizontalLine from "../../assets/images/line-horizontal.png";
import trainerM from "../../assets/images/trainer-main.png";
import trainer1 from "../../assets/images/trainer-1.png";
import trainer2 from "../../assets/images/trainer-2.png";
import trainer3 from "../../assets/images/trainer-3.png";
import trainer4 from "../../assets/images/trainer-4.png";
import trainer5 from "../../assets/images/trainer-5.png";
import trainerBg from "../../assets/images/trainer-bg.png";
import spiral from "../../assets/images/spiral.png";
import roundLogo from "../../assets/images/round-logo.png";
import love from "../../assets/images/love.png";


const TeamPage = () => {
    return (
        <Container className="position-relative" style={{marginTop: "245px"}}>
            <Image className={s.mainTrainerImage} src={trainerM}/>
            <h3 className={s.title}>команда</h3>
            <div className={s.trainerDescription}>
                <TrainerLabel name="Сенпай Арзуманян Місак" rank="2 дан, КМСУ"/>
                <Image className={s.spiral} src={spiral}/>
                <div className={s.textWrapper}>
                <p className={s.trainerText}>
                    Народився у 1988 р. в місті Суми. Вперше на Кіокушинкай карате потрапив ще у віці 6 років. Згодом,
                    будучи студентом Української академії банківської справи, юнак розпочав тренування у Шевченка
                    Олександра Миколайовича, а невдовзі почав виступати за Сумську область на національних змаганнях. У
                    2009 р. хлопець здобув звання Кандидата у майстри спорту України.
                </p>
                <p className={s.trainerText}>
                    В 2012 р. Місак переїхав до Києва. Тренувався у шихана Лящєнко Віктора Георгійовича та згодом започаткував «Місак доджо».
                    У 2014 р. в місті Вінниця склав іспит на перший дан (чорний пояс),
                    а у 2019 р. з товаришами по карате зареєстрували Спортивний клуб Кіокушинкай карате «Місак доджо».
                </p>
                    <Image className={s.lineHorizontal} src={horizontalLine}/>
                </div>
            </div>
            <div className={s.trainersBlock}>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg} src={trainer1}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name="Сенпай Костянтин Костюк" rank="1 дан"/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg} src={trainer2}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name="Микола Івашковець" rank="1 кю"/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image className={s.trainerImg} src={trainer3}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name="Фелікс Зінченко" rank="1 кю"/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image style={{height:"450px", top:"-80px", width:"324px"}} className={s.trainerImg} src={trainer4} />
                    <div className={s.trainerLabel}>
                        <TrainerLabel name="Сенпай Валерія Сліпець" rank="3 кю"/>
                    </div>
                </div>
                <div className={s.trainerCard}>
                    <Image className={s.trainerBg} src={trainerBg}/>
                    <Image style={{height:"456px", top:"-80px", width:"417px"}} className={s.trainerImg} src={trainer5}/>
                    <div className={s.trainerLabel}>
                        <TrainerLabel name="Сенпай Микола Скрипник" rank="4 кю"/>
                    </div>
                </div>
                <div className={s.logoContainer}>
                    <Image className={s.AppLogo} src={roundLogo} />
                    <Image src={love} style={{ width: "52px", height: "79px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                </div>
            </div>
        </Container>
    );
};

export default TeamPage;
