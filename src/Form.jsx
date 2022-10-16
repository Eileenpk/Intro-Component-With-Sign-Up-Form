import iconError from './assets/icon-error.svg'
import {useForm} from 'react-hook-form'
export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegistration = (data) => console.log(data)
    const handleError = (errors) => {}
    const registerOptions = {
        firstName: {required: 'First Name cannot be empty' },
        lastName: {required: 'Last Name cannot be empty'},
        email: {required: 'Looks like this is not an email', pattern: {
            value: /@/,
            message: 'Must be a valid email address' 
          }},
        password: {required: 'Password cannot be empty'}
    }
   
    return (
        <div className="form">
            <div className="form--header_wapper">
                <h2 className="form--header_text">
                    <span className="text--bold">Try it free 7 days </span> 
                    then $20/mo. thereafter
                </h2>
            </div>

            <form aria-label="form" onSubmit={handleSubmit(handleRegistration, handleError)}>
                <label htmlFor="first-name" aria-labelledby="first-name">
                    <input 
                    className={errors?.firstName ? "form--missing_input" : ''}
                        aria-label="please type your first name"
                        type="text"
                        name="firstName"
                        {...register('firstName',registerOptions.firstName)} 
                        id="first-name"
                        placeholder={errors?.firstName ? "Your first name here" : "First Name"}
                    />          
            {errors?.firstName && 
            <div className="text-danger">{errors.firstName.message } 
                <img src={iconError} className='form--error_img'/>
            </div>}
          
        
                </label>
                <label htmlFor="last-name" aria-labelledby="last-name">
                    <input 
                    className={errors?.lastName ? "form--missing_input" : ''}
                        aria-label="please type your last name"
                        type="text"
                        name="lastName"
                        {...register('lastName', registerOptions.lastName)} 
                        id="last-name"
                        placeholder={errors?.lastName ? "Your last name here" : "Last Name"}
                    />
                {errors?.lastName && 
                <div className="text-danger">{errors.lastName.message } 
                    <img src={iconError} className='form--error_img'/>
                </div>}
                </label>
                <label htmlFor="email" aria-labelledby="email">
                    <input 
                    className={errors?.email ? "form--missing_input" : ''}
                        aria-label="please type your email"
                        type="email"
                        name="email"
                        {...register('email', registerOptions.email)} 
                        id="email"
                        placeholder={errors?.email ? "email@example/com" : "Email Address"}
                    />
                {errors?.email && 
                <div className="text-danger">{errors.email.message } 
                    <img src={iconError} className='form--error_img'/>
                </div>}
                </label>
                <label htmlFor="password" aria-labelledby="password">
                    <input 
                    className={errors?.password ? "form--missing_input" : ''}
                        aria-label="please type your password"
                        type="text"
                        name="password"
                        {...register('password', registerOptions.password)} 
                        id="password"
                        placeholder={errors?.password ? "Your password here" : "Password"}
                    />
                {errors?.password && 
                <div className="text-danger">{errors.password.message } 
                    <img src={iconError} className='form--error_img'/>
                </div>}
                </label>
                <button className="form--btn">CLAIM YOUR FREE TRIAL</button>
                <footer className="form--footer">By clicking the button, you are agreeing to our <span className="form--footer_alt_color_text">Terms and Services</span></footer>
            </form>
            
        </div>
    )
}