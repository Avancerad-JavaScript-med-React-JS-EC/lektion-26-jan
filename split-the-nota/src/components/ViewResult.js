import React from 'react';

function ViewResult(props) {
    return (
        <section className="form">
            <article>
                <h2>Varje person ska betala</h2>
                <h3>{ props.friendSum }</h3>
            </article>
        </section>
    )
}

export default ViewResult;