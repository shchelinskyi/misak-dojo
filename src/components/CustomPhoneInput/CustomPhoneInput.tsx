import React, {ChangeEvent} from 'react';
import { Form as BootstrapForm, FormControlProps } from 'react-bootstrap';
import InputMask from 'react-input-mask';


interface CustomPhoneInputProps extends FormControlProps {
    type:string;
    name:string;
    className?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e:  React.FocusEvent<HTMLInputElement>) => void;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = (props) => (
    <InputMask mask="+380 (99)-999-99-99" {...props} placeholder="+380 (__) ___-__-__">
        {(inputProps) => <BootstrapForm.Control {...inputProps} />}
    </InputMask>
);

export default CustomPhoneInput;
