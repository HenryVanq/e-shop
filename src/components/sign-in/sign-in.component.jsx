import React from 'react'
import FormInput from '../../components/form-input/form-input.component'

import './sing-in.style.sass'


class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>sign in with your email and password</span>
                <form >
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label={'email'} required />
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label={'password'} required />
                    <input type='submit' value='submit' onSubmit={this.handleSubmit} />
                </form>
            </div>

        )
    }
}

export default Signin