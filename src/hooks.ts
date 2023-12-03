import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './redux/store';
import {useRef} from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;

export const useScrollActions = () => {

    const aboutRef = useRef<HTMLDivElement>(null);
    const teamRef = useRef<HTMLDivElement>(null);
    const gymsRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const shopRef = useRef<HTMLDivElement>(null);
    const contactsRef = useRef<HTMLDivElement>(null);
    const scrollActions = {
        scrollAbout: () => {
            aboutRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollTeam: () => {
            teamRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollGyms: () => {
            gymsRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollGallery: () => {
            galleryRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollShop: () => {
            shopRef.current!.scrollIntoView({behavior: 'smooth'});
        },
        scrollContacts: () => {
            contactsRef.current!.scrollIntoView({behavior: 'smooth'});
        }
    };

    return { aboutRef, teamRef, gymsRef, galleryRef, shopRef, contactsRef, scrollActions };
}