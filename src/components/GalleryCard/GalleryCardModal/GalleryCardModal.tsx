import s from "./GalleryCardModal.module.scss";
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import {FC} from "react";

type GalleryCardModalProps = {
    images:string[],
    onClose: () => void
}


const GalleryCardModal:FC<GalleryCardModalProps> = ({images, onClose}) => {
    console.log(images)

    return (
        <div className={s.overlay}  onClick={onClose}>
            <div className={s.content} onClick={(e) => e.stopPropagation()}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="mySwiper"

                >
                    {images.length > 0 && images.map((itemSrc) => (
                        <SwiperSlide key={itemSrc}>
                            <div className={s.imageWrapper}>
                            <img src={itemSrc} className={s.image} loading="lazy" alt="event-picture"/>
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default GalleryCardModal;
