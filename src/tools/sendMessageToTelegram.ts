import axios from "axios";

export const sendMessageToTelegram = (values) => {
    const TOKEN = "6256749568:AAHTtPs90MP3gNYCio0QQCbTZHkyHLv0am4";
    const CHAT_ID = "-1002036629099";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Iм'я: ${values.name}</b>\n`;
    if (values.age) {
        message += `<b>Вік: ${values.age}</b>\n`;
    }
    message += `<b>Телефон: ${values.phone}</b>\n`;

    if (values.comment) {
        message += `<b>Коментар: ${values.comment}</b>\n`;
    }



    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    })
}