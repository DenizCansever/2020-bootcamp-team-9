import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../theme/_footer.scss"
import Footer from "../../components/layout/Footer";

export class Main extends Component {
    render() {
        return (
            <div className="initial-top">
                <div className="initial-content">
                    <h1>District X</h1>
                    <h2>DISCOVER ALL MOVIES & TV SERIES</h2>
                    <Link to="/signup" className="initial-btn">JOIN DISTRICTX FOR FREE</Link>
                </div>
            </div>
        )
    }
}

export default Main;
