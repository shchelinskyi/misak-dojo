import {FC} from "react"
import {Container, Image, Nav, Navbar, Form} from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import bucket from "../../assets/images/bucket.png";
import CustomButton from "../CustomButton";
import s from "./TheHeader.module.scss";
interface TheHeaderProps {
    scrollActions: {
        scrollAbout : () => void,
        scrollTeam : () => void,
        scrollGyms : () => void,
        scrollGallery : () => void,
        scrollShop : () => void,
        scrollContacts : () => void,
    }
}

const TheHeader:FC<TheHeaderProps> = ({scrollActions}) => {
    return (
        <Navbar expand="lg" className="bg-transparent position-relative">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={logo} style={{width:"145px", height:"77px"}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => scrollActions.scrollAbout()}>ПРО НАС</Nav.Link>
                        <Nav.Link onClick={() => scrollActions.scrollTeam()}>КОМАНДА</Nav.Link>
                        <Nav.Link onClick={() => scrollActions.scrollGyms()}>ЗАЛА</Nav.Link>
                        <Nav.Link onClick={() => scrollActions.scrollGallery()}>ГАЛЕРЕЯ</Nav.Link>
                        <Nav.Link onClick={() => scrollActions.scrollShop()}>МАГАЗИН</Nav.Link>
                        <Nav.Link onClick={() => scrollActions.scrollContacts()}>КОНТАКТИ</Nav.Link>
                    </Nav>

                    <Form.Select className={s.formSelect} aria-label="Default select example" style={{width:"75px", marginRight:"20px"}}>
                        <option value="1">UA</option>
                        <option value="2">RU</option>
                        <option value="3">ENG</option>
                    </Form.Select>
                    <div style={{zIndex:"15"}}>

                        <CustomButton label="записатися" onClick={()=> console.log("Hi")}/>
                    </div>

                </Navbar.Collapse>
            </Container>
            <div className="position-relative bg-secondary rounded-circle position-absolute d-flex justify-content-center align-items-center"
                 style={{width:"64px", height:"64px", right:"10px", top:"90px"}}>
                <Image src={bucket} width={39}/>
                <div className="position-absolute text-light" style={{top: "18px", right:"25px", fontSize:"12px"}}>2</div>

            </div>

        </Navbar>
    );
};

export default TheHeader;
