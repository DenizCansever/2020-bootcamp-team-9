import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../../theme/_footer.scss"
import Footer from "../../components/layout/Footer";

export class Main extends Component {
    render() {
        return (
            <div>

                <div className="initial-top">
                    <div className="initial-content">
                        <h1>District X</h1>
                        <h2>DISCOVER ALL MOVIES & TV SERIES</h2>
                        <Link to="/signup" className="initial-btn">JOIN DISTRICT X FOR FREE</Link>
                    </div>
                </div>
                <div className="initial-second">
                    <div className="initial-content2">
                        <h3>DistrictX is a platform that primarily keeps track of TV shows and movies you watched or plan to watch in the future. Sign up now, start managing your personal TV & movie lists, see what's trending and popular.</h3>
                        <Link to="/about" className="initial-btn ">About DISTRICT X</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Main;
