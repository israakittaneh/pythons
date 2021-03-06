import { Grid, TextField } from "@material-ui/core";
import React from "react";
import store from "../../store";
import { updateuserinfo } from "../../store/actions/userActions";
import './profilestyle.css'
interface State {
    userbio: any,
    userphone: any,
    username: any,


}
interface Props {
    userId: any
    handleClose: any,

}
class Popup extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            userbio: this.props.userId.user_bio,
            userphone: this.props.userId.user_phon,
            username: this.props.userId.user_name,
        }
        this.handelclikckimg = this.handelclikckimg.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeUserBio = this.changeUserBio.bind(this)
        this.changeUserPhone = this.changeUserPhone.bind(this)


    }

    handelclikckimg() {
        store.dispatch(updateuserinfo(this.props.userId._id, {
            user_bio: this.state.userbio,
            user_phon: this.state.userphone, user_name: this.state.username
        }))

    }
    changeUserName = (value: string): void => {
        this.setState({ username: value });
        console.log(this.state)
    }

    changeUserBio = (value: string): void => {
        this.setState({ userbio: value });
        console.log(this.state)
    }
    changeUserPhone = (value: string): void => {
        this.setState({ userphone: value });
        console.log(this.state)
    }



    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        defaultValue={this.state.username}
                                        label="User Name"
                                        name="username"
                                        size="small"
                                        onChange={(e) => this.changeUserName(e.target.value)}
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        defaultValue={this.state.userphone}
                                        onChange={(e) => this.changeUserPhone(e.target.value)}
                                        label="User Phone"
                                        name="userphone"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        defaultValue={this.state.userbio}
                                        onChange={(e) => this.changeUserBio(e.target.value)}
                                        label="User Bio"
                                        name="userbio"
                                        size="small"
                                        type='textfield'
                                        variant="outlined"
                                        multiline
                                        rowsMax={6}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <div>
                        <button onClick={() => {
                            console.log('change image')
                            this.handelclikckimg()
                        }}>Test button</button>
                    </div>

                </div>
            </div>
        );
    }
};

export default Popup;