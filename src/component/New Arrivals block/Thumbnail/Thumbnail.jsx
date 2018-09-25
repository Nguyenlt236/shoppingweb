import React , {Component} from 'react'

export default class Thumbnail extends Component{
    render(){
        return(
            <div className="product-item col-lg-3 men" style={{ padding: 0 }}>
                <div className="product discount product_filter">
                <div className="product_image">
                <img src={this.props.thumbnail} alt="" />
            </div>
            </div>
            </div>
        );
    }
}