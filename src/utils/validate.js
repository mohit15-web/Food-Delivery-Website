export const validateForm = (email,password) =>{
    const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    .test(password)

    if(!validEmail) return "Enter Valid Email";
    if(!validPassword) return "Enter Valid Password";


    return null;
    
}