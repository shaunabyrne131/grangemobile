import { FormBuilder } from "@angular/forms";
import { LoginPageForm } from "./login.page.form"; 

describe('LoginPageForm', () => {
    it('should create login form empty', () => {
        const loginPageForm = new LoginPageForm(new FormBuilder()); // Corrected variable name
        const form = loginPageForm.createForm(); // Call the createForm() method

        expect(form).not.toBeNull(); // Check if the form is not null
        expect(form.get('email')).not.toBeNull(); // Check if the email form control is not null
        expect(form.get('email').value).toEqual(""); // Check if the email value is empty
        expect(form.get('email').valid).toBeFalsy(); // Check if the email form control is invalid

        expect(form.get('password')).not.toBeNull(); // Check if the password form control is not null
        expect(form.get('password').value).toEqual(""); // Check if the password value is empty
        expect(form.get('password').valid).toBeFalsy(); // Check if the password form control is invalid
    });
});
