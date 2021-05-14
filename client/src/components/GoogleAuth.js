import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    state={isSignedIn:null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'564061242491-l5qkj33l21lvcipgl9nrpvr4lcldi1oi.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
            })
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>Sign in</div>
        }else if(this.state.isSignedIn){
            return <div>I am signed in</div>
        }else{
            return <div>Not signed in</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
