import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component{
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }
    componentDidMount() {
       this.updateUsers();
    }
 
    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            return <User key={id} name={name} altname={altname} src={photo} min/>
        })
    }
    render() {
        const {error, users} = this.state;

        if(error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(users);
        return (
            <div className="right">
                <User
                src="https://img.buzzfeed.com/buzzfeed-static/static/2015-01/8/12/campaign_images/webdr06/24-things-that-happen-when-you-date-a-man-with-a--2-17654-1420738954-5_dblbig.jpg" 
                alt="man" 
                name="just_a_man"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}