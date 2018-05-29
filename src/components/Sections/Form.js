import React, { Component } from 'react';

class Form extends Component {
    state = {}
    render() { 
        return ( 
            <form id="form" acceptCharset="UTF-8" action="https://usebasin.com/f/ce8f486ac27f" method="POST">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="field">
                            <label className="label"> Name </label>
                            <div className="control is-expanded">
                                <input className="input is-large" name="name" type="text" required />
                            </div>
                        </div>
                    </div>

                    <div className="column is-half">
                        <div className="field">
                            <label className="label"> Email </label>
                            <div className="control is-expanded">
                                <input className="input is-large" name="email" type="email" required />
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className="columns is-centered">
                    <div className="column">
                        <div className="field">
                            <label className="label"> Message </label>
                            <div className="control is-expanded">
                                <textarea className="textarea is-large" name="message" rows="5" required>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <div className="field">
                            <div className="control">
                                <button className="button is-primary is-outlined is-medium is-fullwidth is-rounded">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
         )
    }
}
 
export default Form;