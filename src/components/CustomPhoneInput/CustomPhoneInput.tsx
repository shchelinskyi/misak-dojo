import {Form as BootstrapForm} from "react-bootstrap";
import InputMask from 'react-input-mask';

const CustomPhoneInput = (props) => (
    <InputMask mask="+380 (99)-999-99-99" {...props} placeholder="+380 (__) ___-__-__">
        {(inputProps) => <BootstrapForm.Control  {...inputProps} />}
    </InputMask>
)

export default CustomPhoneInput;