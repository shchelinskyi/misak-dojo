import { FC, ReactNode} from 'react';
import s from "./InformModal.module.scss";
import {useTranslation} from "react-i18next";
import {useAppDispatch} from "../../hooks.ts";
import {closeInfoModal, openInfoModal} from "../../redux/slices/formTrialSessionSlice.ts";



const InformModal = () => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(closeInfoModal())
    }

    return (
        <div className={s.overlay} onClick={handleClose}>
            <div className={s.contentWrapper} onClick={(e) => e.stopPropagation()}>
                <div className={s.content}>
                    {t("infoText")}
                </div>
                <span className={s.closeBtn} onClick={handleClose}>&times;</span>
            </div>
        </div>
    );
};

export default InformModal;
