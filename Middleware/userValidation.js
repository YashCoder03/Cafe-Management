const {body , validationResult} = require("express-validator");
const userService = require("../Services/userService");

const checkUser = () =>{
        return[
        body('name')
            .isLength({min : 6})
            .withMessage('Name is cannot be less than 6 character')
            .isLength({max : 20})
            .withMessage('Name cannot be greater than 20 character')
            .exists()
            .withMessage('Name cannot be empty')
            .matches(/^[a-zA-Z ]*$/)
            .withMessage('Only Characters with white space are allowed'),
        body('mobile')
            .isLength({min : 10 , max : 10})
            .withMessage('Mobile Number should be 10')
            .exists()
            .withMessage('Mobile number is required')
            .isNumeric()
            .withMessage('Enter Valid Mobile Number'),
        body('email').custom(async value =>{
            if(userService.isEmailExists(value))
            {
                throw new Error('Email already exist');
            }
            })
            .isEmail()
            .withMessage('Enter Valid Email Address'),
        body('password')
            .isLength({min : 8, max : 20})
            .withMessage('Password lenght should be 8 to 20 charachter')
            .matches(/(?=.*?[A-Z])/)
            .withMessage('At least one Uppercase')
            .matches(/(?=.*?[a-z])/)
            .withMessage('At least one Lowercase')
            .matches(/(?=.*?[0-9])/)
            .withMessage('At least one Number')
            .matches(/(?=.*?[#?!@$%^&*-])/)
            .withMessage('At least one special character')
            .not()
            .matches(/^$|\s+/)
            .withMessage('White space not allowed')
        ];
}

module.exports = {checkUser}