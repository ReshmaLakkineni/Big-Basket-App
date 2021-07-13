import React from 'react';

interface IProps{}
interface IState{}

let Home:React.FC<IProps> = ({}) => {
    return(
        <React.Fragment>
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h2 className="display-1">BigBasket</h2>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quis amet, sunt veniam architecto voluptatem dolore officia aperiam minus totam quam reiciendis similique id corrupti dolor fuga voluptatibus pariatur facere.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Home;