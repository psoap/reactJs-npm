import React, {Component} from 'react';

class Auth extends Component{
    render(){
        return (
            <form>
                <input type="text" name="username"/><br/>
                <input type="text" name="password"/><br/>
                <button>Log</button>
                <button>Reg</button>
            </form>
        )
    }
}

export default Auth;