import { Component } from "react";
import { I404PageProps, I404PageState } from "./_404Page.interfaces";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Button from "../../components/button/Button";

class _404Page extends Component<I404PageProps & RouteComponentProps, I404PageState> {

    constructor(props: I404PageProps & RouteComponentProps) {
        super(props);
        this.state = {

        }
    }

    goToHomePage = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="flex justify-center flex-col h-screen items-center">
                <div className="">
                    <p className="text-9xl font-bold">404</p>
                    <p className="text-3xl mt-5 mb-2 font-bold">Oops! You're lost.</p>
                    <p className="text-lg">The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the application.
                    </p>
                    <Button
                        text='Back to App'
                        color='bg-yellow-600 hover:bg-amber-600'
                        container=''
                        onClick={this.goToHomePage}
                    />
                </div>
            </div>
        )
    }

}

export default withRouter(_404Page)