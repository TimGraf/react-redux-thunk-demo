import React from 'react';
import { connect } from 'react-redux';
import './SiteStatus.css';
import { getSiteStatus } from '../redux/actions';

class SiteStatus extends React.Component {

    componentDidMount() {
        this.props.getSiteStatus(this.props.site);
    }

    handleStatusCheck(e) {
        this.props.getSiteStatus(this.props.site);
    }

    getColorClass() {
        switch (this.props[this.props.site]) {
            case 200:
                return 'Green';
            case 404:
                return 'Gray';
            case 500:
                return 'Red';
            default:
                return 'White';
        }
    }

    render() {
        return (
            <div className="Component">
                <p className="SiteName">{ this.props.site }</p>
                <input className="SiteButton" type="button" value="Check Status" onClick={this.handleStatusCheck.bind(this)}/>
                <p className={"SiteStatus " + this.getColorClass()} >{ this.props[this.props.site] }</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({...ownProps, [ownProps.site]: state[ownProps.site] });
const mapDispatchToProps = { getSiteStatus };
export default connect(mapStateToProps, mapDispatchToProps)(SiteStatus);