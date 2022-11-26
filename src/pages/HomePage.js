import React from "react";

const HomePage = () => {
    return (
        <>
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi USER!</h1>
                <p>You're logged in with React!!</p>
                <h3>All registered users:</h3>
                <ul>
                    <li>TODO</li>
                </ul>
                <p>
                    {/*<Link to="/login">Logout</Link>*/}
                </p>
            </div>
        </>
    )
};

export default HomePage;