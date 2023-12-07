import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from "../../../assets/images/main/logo.webp";
import {Image} from "react-bootstrap";
import s from "../ContractOffer.module.scss";
import {useEffect} from "react";

const ContractOfferUA = () => {
    const {t} = useTranslation();

    useEffect(() => {
        window.scrollTo({
            top: 20,
            behavior: 'smooth',
        });
    }, []);

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logoBlock}>
                    <Link to="/">
                        <Image className={s.logo} src={logo}/>
                    </Link>
                    <div>
                        <Link to="/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>
                <h3 className={s.mainTitle}>Соглашение пользователя </h3>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Это соглашение, адресованное неопределенному кругу лиц — физическим и юридическим лицам —
                        посетителям сайта в сети интернет: misakdojo.com (далее — Сайт), является официальным и
                        публичным предложением Общественной организации «СККК «МИСАК ДОДЖО»», далее именуется
                        Общественная организация, в лице Арзуманян Мисак Алексанович, публикует настоящий Договор,
                        который является условиями благотворительного добровольного пожертвования (далее — Договор)
                        физическим или юридическим лицом (далее — Благотворитель), предмет и настоящие условия которого
                        указаны ниже:
                    </p>
                </div>
                <h5 className={s.title}>Термины и определения:</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Акцепт</b> — полное и безусловное принятие пользовательского соглашения путем совершения
                        действий по осуществлению денежного перевода с помощью платежных форм и средств, размещенных на
                        Сайте, а также
                        путем перечисления денежных средств на расчетный счет Фонда через банковские учреждения.
                        Моментом Акцепта является дата зачисления денежных средств на расчетный счет Фонда.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Платеж</b> — добровольное благотворительное пожертвование.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Добровольное благотворительное пожертвование</b> - осуществление Благотворителем денежного
                        перевода для достижения целей, задач, направлений и видов уставной деятельности.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Благотворитель</b> - физическое или юридическое лицо, размещающее Заказы на Сайте, или
                        указанное в качестве получателя Товара, который он получает взамен на благотворительный денежный
                        перевод. Соглашаясь с условиями договора, БЛАГОТВОРИТЕЛЬ подтверждает, что он является
                        дееспособным гражданином, который достиг 18 лет, или является представителем действующей
                        компании и имеет необходимые документы для действия от имени этого юридического лица;
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Общественная организация</b> - ОО «СККК «МИСАК ДОДЖО»».
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Интернет-магазин</b> — интернет-сайт, который расположен и имеет адрес в сети Интернет
                        misakdojo.com. На нем представлены ТОВАРЫ, предлагаемые ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ своим
                        Благотворителям, а также условия доставки и осуществления денежного перевода.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Сайт</b> — misakdojo.com .
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Заказ</b> — надлежащим образом оформленный запрос Благотворителя на доставку по указанному
                        адресу ТОВАРОВ, размещенный Благотворителем самостоятельно на Сайте или по телефону, взамен на
                        добровольное благотворительное пожертвование.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Товар</b> — объект материального мира, не изъятый из гражданского оборота и представленный к
                        обмену на Сайте на добровольное денежное пожертвование. ТОВАРЫ представлены на Сайте в виде фото
                        образцов, которые являются собственностью Общественной организации..
                    </p>
                </div>
                <h5 className={s.title}>1. Предмет договора-оферты</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        1.1. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ обязуется передать в собственность БЛАГОТВОРИТЕЛЯ, а
                        БЛАГОТВОРИТЕЛЬ обязуется сделать добровольное благотворительное пожертвование и принять
                        заказанный в интернет-магазине ТОВАР.
                    </p>
                    <p className={s.text}>
                        1.2 Предметом настоящего договора является передача БЛАГОТВОРИТЕЛЕМ в пользу ОБЩЕСТВЕННОЙ
                        ОРГАНИЗАЦИИ денежных средств для достижения целей, задач, направлений и видов уставной
                        деятельности ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ.
                    </p>
                    <p className={s.text}>
                        1.3 Акцепт Договора означает, что БЛАГОТВОРИТЕЛЬ согласен со всеми его положениями и в полной
                        мере осознает предмет Договора и цель сбора добровольных благотворительных пожертвований.
                    </p>
                    <p className={s.text}>
                        1.4 Договор заключается путем безусловного и полного присоединения БЛАГОТВОРИТЕЛЯ к настоящему
                        Договору и принятия всех действующих условий Договора.
                    </p>
                    <p className={s.text}>
                        1.5 БЛАГОТВОРИТЕЛЬ и ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ, руководствуясь ст. 207, ч. 2 ст. 639, ст. 641,
                        642 Гражданского кодекса Украины, ст. 7 Закона Украины «О благотворительной деятельности и
                        благотворительных организациях», соглашаются, что Договор считается заключенным в письменной
                        форме без подписания письменного экземпляра Сторонами, с момента совершения БЛАГОТВОРИТЕЛЕМ
                        действий, предусмотренных Договором, которые свидетельствуют о согласии соблюдать условия
                        Договора.
                    </p>
                    <p className={s.text}>
                        1.6 Договор размещен на сайте misakdojo.com в свободном доступе и таким образом, чтобы
                        обеспечить ознакомление с содержанием настоящего Договора каждым лицом, обращающимся к
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ.
                    </p>
                    <p className={s.text}>
                        1.7 БЛАГОТВОРИТЕЛЬ не может предложить свои условия Договора.
                    </p>
                </div>

                <h5 className={s.title}>2. Момент заключения договора</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        2.1. Текст данного Договора является публичной офертой (в соответствии со ст. 638 и ст. 641
                        Гражданского кодекса Украины).
                    </p>
                    <p className={s.text}>
                        2.2. В соответствии со ст. 642 Гражданского кодекса Украины, в случае принятия изложенных ниже
                        условий и внесения добровольного благотворительного пожертвования, юридическое или физическое
                        лицо, производящее акцепт этой оферты, становится Благотворителем (в соответствии с ч. 2 ст. 642
                        ГК Украины акцепт оферты равносилен заключению договора на условиях, изложенных в оферте), а
                        ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ и БЛАГОТВОРИТЕЛЬ совместно — сторонами договора оферты.
                    </p>
                    <p className={s.text}>
                        2.3. Факт осуществления ДЕНЕЖНОГО ПЕРЕВОДА в пользу ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ является
                        безусловным принятием настоящего Договора, и БЛАГОТВОРИТЕЛЬ считается лицом, вступившим в
                        договорные отношения с ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ. Если БЛАГОТВОРИТЕЛЬ не согласен с условиями
                        или с каким-либо пунктом условий, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ предлагает БЛАГОТВОРИТЕЛЮ отказаться
                        от заключения Договора оферты и использования услуг ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ.
                    </p>
                    <p className={s.text}>
                        <b>2.4. Оформление заказа:</b><br/><br/>

                        БЛАГОТВОРИТЕЛЬ проходит процедуру регистрации на САЙТЕ ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ с обязательным
                        подтверждением ознакомления с условиями настоящего Договора оферты. БЛАГОТВОРИТЕЛЬ несет
                        ответственность за правдивость предоставленной при оформлении регистрации и Заказа информации. В
                        противном случае ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не несет ответственности за своевременную доставку.<br/><br/>

                        Зарегистрированный БЛАГОТВОРИТЕЛЬ Интернет-магазина имеет право получить взамен на
                        благотворительный денежный перевод Товар, представленный на Сайте и имеющийся на складе
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ. Осуществляя БЛАГОТВОРИТЕЛЬНЫЙ ДЕНЕЖНЫЙ ПЕРЕВОД на Сайте
                        Интернет-магазина, БЛАГОТВОРИТЕЛЬ принимает на себя обязательства по приему ТОВАРА, а
                        ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ принимает обязательства по доставке и передаче в собственность
                        благодетеля ТОВАРА. Заказы принимаются ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ через систему принятия ЗАКАЗОВ,
                        интегрированную в Сайт ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ, а также по телефону.<br/><br/>

                        ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ вправе ограничить количество ТОВАРОВ, которые благотворитель оформляет
                        в заказе взамен на благотворительный денежный перевод, проинформировав об этом БЛАГОТВОРИТЕЛЯ.
                        После получения Заказа, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ предоставляет ответственного менеджера, который
                        от имени Общественной организации согласовывает с Благотворителем все существенные условия, в
                        том числе доставку.<br/><br/>

                        При отсутствии ТОВАРА на складе ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ, последняя обязана проинформировать об
                        этом БЛАГОТВОРИТЕЛЯ в письменной (посредством электронной почты) или устной форме (посредством
                        телефонной связи). В этом случае Благотворитель вправе заменить отсутствующий ТОВАР аналогичным
                        ТОВАРОМ.<br/><br/>

                        ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ оставляет за собой право в одностороннем порядке прекратить прием
                        Заказов от благотворителя и отгрузки ТОВАРА БЛАГОТВОРИТЕЛЮ, а также ограничить предоставление
                        права участия благотворителя в акциях, проводимых ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ, если БЛАГОТВОРИТЕЛЬ
                        систематически нарушает условия данного Договора оферты или оказывает негативное влияние на
                        работу Интернет-магазина путем чрезмерной загрузки служб Интернет-магазина. Подтверждение
                        согласованных условий отгрузки, доставки и оплаты ТОВАРА высылаются ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ по
                        электронной почте. На основании полученного Заказа и согласованных условий, ОБЩЕСТВЕННАЯ
                        ОРГАНИЗАЦИЯ отгружает Товар БЛАГОТВОРИТЕЛЮ.<br/><br/>

                        Сбор добровольных благотворительных пожертвований продолжается до момента ликвидации
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ, если иной срок не будет определен ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ.
                    </p>
                </div>

                <h5 className={s.title}>3. Цена ТОВАРА</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        3.1. Цены в Интернет-магазине указаны в гривнах за единицу ТОВАРА.
                    </p>
                    <p className={s.text}>
                        3.2. Тарифы на оказание услуг по доставке, погрузке-разгрузке, подъем ТОВАРА указаны в
                        интернет-магазине на каждый ТОВАР в зависимости от его характеристики.
                    </p>
                    <p className={s.text}>
                        3.3. В случае неправильно указанной цены, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ обязуется при первой
                        возможности сообщить об этом Благотворителю. При невозможности связаться с Благотворителем,
                        Заказ считается отмененным.
                    </p>
                    <p className={s.text}>
                        3.4. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ оставляет за собой право изменять цены в одностороннем порядке.
                        При этом цена ТОВАРОВ, оплаченных Благотворителем, изменению не подлежит.
                    </p>
                    <p className={s.text}>
                        3.5. Все расходы по уплате сумм, связанных с перечислением пожертвования, несет БЛАГОТВОРИТЕЛЬ.
                    </p>
                </div>

                <h5 className={s.title}>4. Оплата ТОВАРА</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        4.1. При наличной форме оплаты БЛАГОТВОРИТЕЛЬ обязан оплатить ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ
                        благотворительный денежный перевод в размере цены ТОВАРА в момент его передачи, а ОБЩЕСТВЕННАЯ
                        ОРГАНИЗАЦИЯ обязана предоставить БЛАГОТВОРИТЕЛЮ кассовый или товарный чек, или другой документ,
                        подтверждающий факт осуществления благотворительного денежного перевода взамен на ТОВАР.
                    </p>
                    <p className={s.text}>
                        4.2. Полная стоимость Заказа состоит из стоимости ТОВАРА в Интернет-магазине и стоимости
                        доставки.
                    </p>
                    <p className={s.text}>
                        4.3. БЛАГОТВОРИТЕЛЬ делает добровольное благотворительное пожертвование любым способом,
                        выбранным в Интернет-магазине.
                    </p>
                    <p className={s.text}>
                        4.4. При безналичной форме осуществления благотворительного денежного пожертвования, обязанность
                        Благотворителя по уплате цены ТОВАРА считается исполненной с момента поступления денежных
                        средств на расчетный счет Общественной организации в размере 100% (ста процентов) предоплаты.
                    </p>
                    <p className={s.text}>
                        4.5. При безналичной форме перевода благотворительных денежных средств в обмен на Товар,
                        просрочка оплаты Благотворителем цены ТОВАРА на срок более 3 (трех) дней является существенным
                        нарушением настоящего Договора. В таком случае ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ вправе в одностороннем
                        порядке, без применения к Благотворителю штрафных санкций, отказаться от исполнения настоящего
                        Договора, уведомив об этом Благотворителя.
                    </p>
                    <p className={s.text}>
                        4.6. ТОВАРЫ поставляются БЛАГОТВОРИТЕЛЮ по ценам, наименованию, в количестве, соответствующем
                        ЗАКАЗУ БЛАГОТВОРИТЕЛЯ.
                    </p>
                </div>

                <h5 className={s.title}>5. Доставка ТОВАРА</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        5.1. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ осуществляет доставку ТОВАРОВ с помощью собственной или внешней
                        службы доставки.
                    </p>
                    <p className={s.text}>
                        5.2. Точная стоимость доставки ТОВАРА определяется менеджером ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ при
                        оформлении Заказа и не может быть изменена после согласования Заказа с Благотворителем.
                    </p>
                    <p className={s.text}>
                        5.3. Стоимость доставки может варьироваться в зависимости от веса, размеров ТОВАРА, а также
                        региона и способа доставки.
                    </p>
                    <p className={s.text}>
                        5.4. При передаче ТОВАРА БЛАГОТВОРИТЕЛЮ представитель службы доставки вправе потребовать
                        документ, удостоверяющий личность благотворителя, с целью противодействия мошенничеству.
                    </p>
                    <p className={s.text}>
                        5.5. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ обязуется приложить все усилия для осуществления доставки ТОВАРА,
                        заказанного Благотворителем, в сроки, указанные на Сайте. Однако, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не
                        берет на себя ответственность за задержки, которые произошли не по вине ОБЩЕСТВЕННОЙ
                        ОРГАНИЗАЦИИ.
                    </p>
                    <p className={s.text}>
                        5.6. Право собственности на ТОВАР и все риски, связанные с правом собственности, переходят к
                        БЛАГОТВОРИТЕЛЮ в момент получения ТОВАРА БЛАГОТВОРИТЕЛЕМ, что подтверждается подписью
                        БЛАГОТВОРИТЕЛЯ в товаросопроводительных документах, подтверждающих доставку.
                    </p>
                    <p className={s.text}>
                        5.7. В случае изменения срока доставки, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ обязуется немедленно
                        информировать БЛАГОТВОРИТЕЛЯ об изменении условий доставки с целью получения согласия на новые
                        условия выполнения Заказа. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ информирует БЛАГОТВОРИТЕЛЯ посредством
                        телефонной или электронной связи.
                    </p>
                    <p className={s.text}>
                        5.8. Доставка ТОВАРА БЛАГОТВОРИТЕЛЮ осуществляется по адресу и в сроки, согласованные
                        Благотворителем и менеджером ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ при оформлении ЗАКАЗА.
                    </p>
                    <p className={s.text}>
                        5.9. Неявка благотворителя или не совершение иных необходимых действий для принятия ТОВАРА могут
                        рассматриваться ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ в качестве отказа БЛАГОТВОРИТЕЛЯ от исполнения
                        Договора.
                    </p>
                </div>

                <h5 className={s.title}>6. Права и обязанности сторон</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>6.1. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ обязуется:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.1.1. До заключения Договора предоставить БЛАГОТВОРИТЕЛЮ на сайте Интернет-магазина информацию
                        об основных потребительских свойствах ТОВАРА, об адресе (месте нахождения) ОБЩЕСТВЕННОЙ
                        ОРГАНИЗАЦИИ, о месте изготовления ТОВАРА, о полном фирменном наименовании (названии)
                        Общественной организации, об условиях передачи ТОВАРА взамен на добровольное благотворительное
                        пожертвование, о его доставке, сроке годности, правилах хранения, о порядке осуществления
                        добровольного благотворительного пожертвования в размере цены ТОВАРА, а также о сроке, в течение
                        которого действует предложение о заключении Договора.
                    </p>
                    <p className={s.text}>
                        6.1.2. Не разглашать любую личную информацию БЛАГОТВОРИТЕЛЯ и не предоставлять доступ к этой
                        информации третьим лицам, за исключением случаев, предусмотренных украинским законодательством.
                    </p>
                    <p className={s.text}>
                        6.1.3. Предоставить БЛАГОТВОРИТЕЛЮ возможность получения бесплатных телефонных консультаций по
                        телефонам, указанным на Сайте Интернет-магазина. Объем консультаций ограничивается конкретными
                        вопросами, связанными с выполнением ЗАКАЗА.
                    </p>
                    <p className={s.text}>
                        6.1.4. Получать добровольные благотворительные пожертвования и использовать их для достижения
                        целей, задач, направлений и видов уставной деятельности Общественной организации в соответствии
                        с Договором и Законом Украины «О благотворительной деятельности и благотворительных
                        организациях».
                    </p>
                    <p className={s.text}>
                        6.1.5. По просьбе БЛАГОТВОРИТЕЛЯ предоставлять отчет о полученном добровольном благотворительном
                        пожертвовании и его использовании.
                    </p>
                    <p className={s.text}>
                        6.1.6. Общественная организация оставляет за собой право односторонне изменять данный ДОГОВОР до
                        момента его заключения.
                    </p>
                    <p className={s.text}>
                        <b>6.2. Благотворитель обязуется:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.2.1. До момента заключения Договора ознакомиться с содержанием Договора оферты, условиями
                        перевода добровольного благотворительного пожертвования в размере цены Товара и доставки на
                        Сайте Интернет-магазина.
                    </p>
                    <p className={s.text}>
                        6.2.2. Предоставлять достоверную информацию о себе (ФИО, контактные телефоны, адрес электронной
                        почты) и реквизиты для доставки ТОВАРА.
                    </p>
                    <p className={s.text}>
                        6.2.3. Принять ТОВАР и сделать добровольное благотворительное пожертвование в размеры цены
                        Товара в указанные в настоящем ДОГОВОРЕ сроки.
                    </p>
                </div>

                <h5 className={s.title}>7. Ответственность сторон и разрешение споров</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        7.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение настоящего
                        Договора в порядке, предусмотренном настоящим Договором и действующим законодательством Украины.
                    </p>
                    <p className={s.text}>
                        7.2. Громадська організація не несе відповідальності за доставку Замовлення, якщо Благодійником
                        вказано неправильну адресу доставки.
                    </p>
                    <p className={s.text}>
                        7.3. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не несет ответственности, если ожидания БЛАГОТВОРИТЕЛЯ о
                        потребительских свойствах ТОВАРА оказались не оправданы.
                    </p>
                    <p className={s.text}>
                        7.4. Благотворитель, оформляя Заказ, несет ответственность за достоверность предоставленной
                        информации о себе, а также подтверждает, что с условиями настоящего Договора ознакомлен и
                        согласен.
                    </p>
                    <p className={s.text}>
                        7.5. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не несет ответственности за невозможность обслуживания
                        БЛАГОТВОРИТЕЛЯ по каким-либо независящим от него причинам, включая нарушение работы линий связи,
                        неисправность оборудования, невыполнение обязательств поставщиков тех или иных услуг.
                    </p>
                    <p className={s.text}>
                        7.6. В случае если по какой-либо причине ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не отгрузит ТОВАР
                        Благотворителю или отгрузит ТОВАР с нарушением сроков, ответственность Общественной организации
                        за допущенное нарушение Договора оферты ограничивается исключительно продлением сроков доставки
                        Товара.
                    </p>
                    <p className={s.text}>
                        7.7. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ ни при каких обстоятельствах не несет ответственности по Договору
                        оферты за: a) любые действия и / или бездействия, являющиеся прямым или косвенным результатом
                        действий / бездействия каких-либо третьих сторон; б) любые косвенные убытки и / или упущенную
                        выгоду Благотворителя и / или третьих сторон вне зависимости от того, могла ОБЩЕСТВЕННАЯ
                        ОРГАНИЗАЦИЯ предусмотреть возможность таких убытков или нет; в) использование (невозможность
                        использования) и какие бы то ни было последствия использования (невозможности использования)
                        Благотворителем выбранной им формы оплаты ТОВАРА по Договору оферты.
                    </p>
                    <p className={s.text}>
                        7.8. Совокупная ответственность Общественной организации по Договору оферты, по любому иску или
                        претензии по Договору оферты или его исполнения, ограничивается суммой платежа, уплаченного
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ Благотворителем по Договору оферты.
                    </p>
                    <p className={s.text}>
                        7.9. Не вступая в противоречие с указанным выше, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ освобождается от
                        ответственности за нарушение условий Договора оферты, если такое нарушение вызвано действием
                        обстоятельств непреодолимой силы (форс-мажор), включая: действия органов государственной власти,
                        пожар, наводнение, землетрясение, другие стихийные действия, отсутствие электроэнергии и / или
                        сбои в работе компьютерной сети, забастовки, гражданские беспорядки, беспорядки, любые иные
                        обстоятельства, не ограничиваясь перечисленным, которые могут повлиять на выполнение
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИЕЙ Договора оферты.
                    </p>
                    <p className={s.text}>
                        7.10. Все споры и разногласия, возникающие при исполнении Сторонами обязательств по настоящему
                        Договору, решаются путем переговоров. В случае невозможности их устранения, СТОРОНЫ имеют право
                        обратиться за судебной защитой своих интересов.
                    </p>
                </div>

                <h5 className={s.title}>8. Возврат и обмен товара</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        8.1. ТОВАР, полученный Благотворителем от ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ взамен на добровольное
                        благотворительное пожертвование, не подлежит обмену или возврату.
                    </p>
                    <p className={s.text}>
                        8.2. Пожертвование является добровольным и не подлежит возврату.
                    </p>

                </div>

                <h5 className={s.title}>9. Форс-мажорные обстоятельства</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        9.1. Стороны освобождаются от ответственности за неисполнение или ненадлежащее исполнение
                        обязательств по Договору на время действия непреодолимой силы. Под непреодолимой силой
                        понимаются чрезвычайные и непреодолимые при данных условиях обстоятельства, препятствующие
                        исполнению своих обязательств Сторонами по настоящему Договору. К ним относятся стихийные
                        явления (землетрясения, наводнения и т.д.), обстоятельства общественной жизни (военные действия,
                        чрезвычайные положения, крупнейшие забастовки, эпидемии и т.д.), запрещающие меры
                        государственных органов (запрещение перевозок, валютные ограничения, международные санкции
                        запрета на торговлю и т.д.). В течение этого времени, СТОРОНЫ не имеют взаимных претензий, и
                        каждая из сторон принимает на себя свой риск последствий форс-мажорных обстоятельств.
                    </p>
                </div>

                <h5 className={s.title}>10. Срок действия договора</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        10.1. Настоящий Договор вступает в силу с момента обращения Благотворителя в Интернет-магазин и
                        оформления ЗАКАЗА, осуществления добровольного благотворительного пожертвования взамен на Товар,
                        и заканчивается при полном выполнении обязательств Сторонами.
                    </p>
                </div>

                <h5 className={s.title}>11. Персональные данные</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        11.1. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ собирает и обрабатывает персональные данные БЛАГОТВОРИТЕЛЕЙ (а
                        именно: фамилию, имя, отчество; адрес доставки; контактный телефон) с целью: - Выполнения
                        условий настоящего Договора; - Доставки Благотворителю заказанного Товара.
                    </p>
                    <p className={s.text}>
                        11.2. Осуществляя Заказ ТОВАРА в Интернет-магазине, Благотворитель дает согласие на сбор и
                        обработку своих персональных данных с целью осуществления доставки заказанного ТОВАРА и
                        выполнения условий настоящего Договора.
                    </p>
                    <p className={s.text}>
                        11.3. При сборе и обработке персональных данных БЛАГОТВОРИТЕЛЕЙ, ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ не
                        преследует иных целей, кроме установленных в п. 11.1 настоящего Договора.
                    </p>
                    <p className={s.text}>
                        11.4. Доступ до персональних даних БЛАГОДІЙНИКІВ мають тільки особи, що мають безпосереднє
                        відношення до виконання ЗАМОВЛЕНЬ.
                    </p>
                    <p className={s.text}>
                        11.5. Информация о БЛАГОТВОРИТЕЛЕ может быть передана официальным органам строго в соответствии
                        с требованиями законодательства Украины.
                    </p>
                    <p className={s.text}>
                        11.6. ОБЩЕСТВЕННАЯ ОРГАНИЗАЦИЯ вправе направлять БЛАГОТВОРИТЕЛЮ рекламные или информационные
                        сообщения. Благотворитель вправе отказаться от рекламно-информационных сообщений, направив
                        ОБЩЕСТВЕННОЙ ОРГАНИЗАЦИИ соответствующее письменное уведомление.
                    </p>
                </div>
                <div className={s.logoBlock}>
                    <Link to="/">
                        <Image className={s.logo} src={logo}/>
                    </Link>
                    <div>
                        <Link to="/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default ContractOfferUA;