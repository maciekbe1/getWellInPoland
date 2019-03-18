import React, {Component} from 'react'
// import data from '../../database/findPopularClinicProcedures.json';
import { Link } from 'react-router-dom'

class PopularClinics extends Component{
    state = {
        clinics: this.props.location.state
    };
    render() {
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <div className="container d-flex">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.clinics.title}</li>
                        </div>
                    </ol>
                </nav>
                <div className="container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum at tempor commodo ullamcorper a lacus. Gravida cum sociis natoque penatibus et magnis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Urna porttitor rhoncus dolor purus. Libero nunc consequat interdum varius sit. Porta non pulvinar neque laoreet. Non arcu risus quis varius quam quisque id. Quisque non tellus orci ac auctor augue mauris augue. Montes nascetur ridiculus mus mauris vitae ultricies leo. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Egestas sed tempus urna et pharetra pharetra massa massa. Dolor sed viverra ipsum nunc. Faucibus purus in massa tempor nec. Proin sagittis nisl rhoncus mattis rhoncus urna. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Lobortis mattis aliquam faucibus purus in massa. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Pellentesque habitant morbi tristique senectus et netus.
                    </p>
                </div>
            </div>
        )
    }
}
export default PopularClinics;