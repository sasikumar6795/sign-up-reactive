import {FormGroup} from '@angular/forms'
// class way or funtion way
export function PasswordValidator(controlName: string, compareControlName: string)
{
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[compareControlName];

        if(password.value!==confPassword.value)
        {
            //key value pair
          confPassword.setErrors({mustMatch: true}) ; 
        }
        else
        {
            confPassword.setErrors(null);
        }
    }
}