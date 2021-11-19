# Password-Generator-JS
An application to generate random passwords.
I created a repo in GitHub and since the application required to generate random passwords I used the repo name Password-Generator-JS. 
The first step was to create a pseudo code to help understand the application without the use of codes but to have an idea on how the application needs to work.
HTML and CSS files didn't need any changes. 
Javascript was updated as per the requirements of the projects and with reference to the pseudcode created. 


Link to the deployed application - 
https://aryakris.github.io/Password-Generator-JS/Develop

Psuedocode:
============
# How does my application need to function?

- When I hit the URL the application should show the Password generator page with the box and button-generate Password.

- The user should click on the generate password button 

- We need to #declare a variable to store the value for the length of the password. var passwordLength

- On clicking the user should see a prompt which displays a message asking for the desired length of the password. (Minimum length of the password should be eight charecters and maximum length should be 128 charecters.)
    If (length of the entered value <8) {
        alert("value of the password length should be atleast 8")
    }
    else if (length of the entered value > 128){
        alert(value of the password should not be more than 128")
    }else{
        save the value
        continue to next alert 
    }


- Next prompts should ask the rest of the questions 

- should numbers be included?

- Declare a variable for the numbers - Var Numbers
If (Var Numbers = True) {
    save the value(call the function to generate random number) and continue to next alert
}
else {
    skip the number and continue to next alert
}

- should uppercase letters be included?
- should lowercase be included?
- should special charecters be included?

For each of the following , 'Declare' a variable to store the value

# What steps are needed to build a password? (when)

- List for all needed numbers (0-9)
- List for all lower case letter (a-z)
- List for all uppercase letter (A-Z)
- List for all special charecters (!-*)

- Asking the user for criteria
- Make a list that only has the type of charecters we are looking for 
- Randomnly select the charecters from my list 
- Add our randomnly selected charecter to our password
- Repeat until the password reaches the requested length




