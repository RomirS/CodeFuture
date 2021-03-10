import React, { useState, useEffect, useRef } from 'react';
import { withFirestore } from 'react-firestore';
import useOutsideMouse from 'helpers/useOutsideMouse';

import Background from '../../background';
import Animate from 'helpers/Animate';
import Toast from './Toast';
import colors from 'data/colors';
import './signup.css';

const Signup = ({ firestore }) => {
    const [showForm, setShowForm] = useState(false);
    const [toast, setToast] = useState({
        show: false,
        message: '',
        color: 'red'
    });
    const [formState, setFormState] = useState({
        email: null,
        first: null,
        last: null,
        grade: null,
        school: null
    })
    const formBubble = useRef(null);
    const [clickedOut, setClickedOut] = useOutsideMouse(formBubble);

    const color = colors[2][1];

    useEffect(() => {
        if (showForm && clickedOut) {
            setShowForm(false);
            setClickedOut(false);
        }
    }, [showForm, clickedOut, setClickedOut]);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, first, last, grade, school } = formState;

        if (email && first && last && grade && school) {
            const emails = [];
            firestore.collection('registrees').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    emails.push(doc.data().email);
                });
                if (emails.includes(email)) {
                    setToast({
                        show: true,
                        message: 'Email already provided',
                        color: 'red'
                    });
                } else {
                    firestore.collection('registrees').add(formState).then(() => {
                        setToast({
                            show: true,
                            message: 'Signup successful',
                            color: 'green'
                        });
                        setFormState({
                            email: null,
                            first: null,
                            last: null,
                            grade: null,
                            school: null
                        })
                    }).catch((e) => {
                        console.error("Error adding document: ", e);
                    });
                }
            })
        } else {
            setToast({
                show: true,
                message: 'Please enter all fields',
                color: 'red'
            });
        }
    }

    const toastStyles = {
        position: 'absolute',
        top: '-50px',
        left: '0',
        width: '100%',
    }

    return (
        <>
            <div className="signup parent">
                <Animate into="scaleIn" out="scaleOut" show={showForm}>
                    <div className="container valign-wrapper">
                        <div className={`bubble white`} ref={formBubble}>
                            <Animate into="flipIn" out="flipOut" show={toast.show} addStyles={toastStyles} >
                                <Toast clear={() => setToast({...toast, show: false})} message={toast.message} color={toast.color} />
                            </Animate>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <h2>Sign up for our workshop</h2>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input 
                                            id="email"
                                            className="validate"
                                            name="email"
                                            type="email"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={formState.email ? formState.email : ''}
                                        />
                                        <label htmlFor="email" className={formState.email ? 'active' : ''} >Parent's Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m6 s12">
                                        <input 
                                            id="first"
                                            className="validate"
                                            name="first"
                                            type="text"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={formState.first ? formState.first : ''}
                                        />
                                        <label htmlFor="first" className={formState.first ? 'active' : ''} >Student First Name</label>
                                    </div>
                                    <div className="input-field col m6 s12">
                                        <input 
                                            id="last"
                                            className="validate"
                                            name="last"
                                            type="text"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={formState.last ? formState.last : ''}
                                        />
                                        <label htmlFor="last" className={formState.last ? 'active' : ''} >Student Last Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col m3 s12">
                                        <input 
                                            id="grade"
                                            className="validate"
                                            name="grade"
                                            type="number"
                                            min="1" max="8"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={formState.grade ? formState.grade : ''}
                                        />
                                        <label htmlFor="grade" className={formState.grade ? 'active' : ''} >Grade</label>
                                    </div>
                                    <div className="input-field col m9 s12">
                                        <input 
                                            id="school"
                                            className="validate"
                                            name="school"
                                            type="text"
                                            autoComplete="off"
                                            onChange={handleChange}
                                            value={formState.school ? formState.school : ''}
                                        />
                                        <label htmlFor="school" className={formState.school ? 'active' : ''} >School</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col-s4 offset-s8">
                                        <button className={`btn ${color} darken-2`} type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Animate>
                {!showForm && (
                    <div className="opening">
                        <h1>So what are you waiting for?</h1>
                        <div className="signup-link">
                            <span>Signup for a workshop now</span>
                            <button 
                                className="btn-floating btn-small waves-effect waves-light red accent-2"
                                onClick={() => setShowForm(true)}
                            >
                                <i className="material-icons">chevron_right</i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Background color={color} cube />
        </>
    )
};

export default withFirestore(Signup);