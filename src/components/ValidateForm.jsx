import { useState } from "react"

function ValidateForm() {
    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneNo: ""
    });
    const [data, setDate] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phoneNo: ""

    });
    const handlesSub = () => {
        let foo = validate();
        if (foo) {
            alert(" all data set")
        } else {
            alert('all data not set')
        }
    }
    const validate = () => {
        let errors = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phoneNo: ""
        }
        let isValid = true;

        if (data.firstname === "") {
            errors.firstname = "enter firstname";
            isValid = false;
        }
        if (data.lastname === "") {
            errors.lastname = "enter lastname";
            isValid = false;
        }
        if (data.email === "") {
            errors.email = "enter email";
            isValid = false;
        }
        if (data.password === "") {
            errors.password = "enter password";
            isValid = false;
        }
        if (data.phoneNo === "") {
            errors.phoneNo = "enter phoneNo";
            isValid = false;
        }
        setErrors(errors);
        return isValid;

    }
    const handleChe = (e) => {
        const { name, value } = e.target;
        setDate({ ...data, [name]: value });
        setErrors({ ...errors, [name]: "" });
    }
    return (
        <div>
            <center>
                <h2>validate Form</h2>
                <table>
                    <thead>
                        <tr>
                            <td>
                                <tr>
                                    <td>
                                        EnterFirstName:
                                    </td>
                                    <td>
                                        <input type="text" name="firstname" placeholder="EnterFirstName" onChange={handleChe} />
                                        <div>{errors.firstname}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        EnterLastName:
                                    </td>
                                    <td>
                                        <input type="text" name="lastname" placeholder="EnterLastName" onChange={handleChe} />
                                        <div>{errors.lastname}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        EnterEmail:
                                    </td>
                                    <td>
                                        <input type="email" name="email" placeholder="EnterEmail" onChange={handleChe} />
                                        <div>{errors.email}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        EnterPassword:
                                    </td>
                                    <td>
                                        <input type="password" name="password" placeholder="EnterPassword" onChange={handleChe} />
                                        <div>{errors.password}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        EnterPhoneNo:
                                    </td>
                                    <td>
                                        <input type="phone" name="phoneNo" placeholder="EnterPhoneNo" onChange={handleChe} />
                                        <div>{errors.phoneNo}</div>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </thead>
                </table><br />
                <button onClick={e => handlesSub()}>SAVE</button>
            </center>
        </div>
    )
}
export default ValidateForm;
