import {Form as BootstrapForm} from "react-bootstrap";

const CustomTextarea = ({field, form, ...props}) => (
    <>
        <BootstrapForm.Control as="textarea" rows={3} {...field} {...props} />
    </>
);

export default CustomTextarea;
