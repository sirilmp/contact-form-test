// // import $ from 'jquery';
// import React, { Component } from 'react';
// // window.$ = window.jQuery = require('jquery')

// class App extends Component {
//     constructor(props) {
//         super(props)

//         state = {
//             email: '',
//             first: '',
//             last: '',
//             interest: '',
//             price: '',
//             number: '',
//             addClass: false
//         }
//     }
//     toggle() {
//         setState({ addClass: !state.addClass });
//     }

//     handleEmailChange = (event) => {
//         setState({
//             email: event.target.value
//         })
//         // $(".js-expand").on('click',function () {
//         //     if ($('#email').val()) {
//         //         //validate form
//         //     } else {
//         //         $(".js-hiddenform").slideDown();
//         //     }
//         // });
//     }
//     handleFirstChange = (event) => {
//         setState({
//             first: event.target.value
//         })
//     }
//     handleLastChange = (event) => {
//         setState({
//             last: event.target.value
//         })
//     }
//     handleInterestChange = (event) => {
//         setState({
//             interest: event.target.value
//         })
//     }
//     handlePriceChange = (event) => {
//         setState({
//             price: event.target.value
//         })
//     }
//     handleNumberChange = (event) => {
//         setState({
//             number: event.target.value
//         })
//     }



//     handleSubmit = (event) => {
//         event.preventDefault()
//         // alert(`${state.email}`)
//         console.log(event.number);
//     }



//     render() {
//         let boxClass = ["js-hiddenform"];
//         if (state.addClass) {
//             boxClass.push('js-form');
//         }

//     }
// }
// export default App



import { addDoc, collection, getFirestore } from './Firebase'
import React, { useState } from 'react'

function App() {

    const fireStore = getFirestore()

    const [contactData, setContactData] = useState({
        email: '',
        first: '',
        last: '',
        interest: '',
        price: '',
        number: ''
    })

    const [showFields, setShowFields] = useState(true)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(contactData);

        const upload = collection(fireStore, 'contacts')

        async function uploadData() {

            await addDoc(upload, contactData).then((res) => {
                alert('Form submitted successfully')
                setContactData({
                    email: '',
                    first: '',
                    last: '',
                    interest: '',
                    price: '',
                    number: '',
                })
                setShowFields(true)
                setLoading(false)
            }).catch((error) => {
                alert('something wrong pleas try later')
                setLoading(false)
            })
        }
        uploadData()

    }
    const handleEmailChange = (e) => {
        setContactData({
            ...contactData,
            email: e.target.value,
        })

        if (e.target.value !== '') {
            setShowFields(false)
        } else {
            setShowFields(true)
        }

    }
    const handleFirstChange = (e) => {
        setContactData({
            ...contactData,
            first: e.target.value
        })
    }
    const handleLastChange = (e) => {
        setContactData({
            ...contactData,
            last: e.target.value
        })
    }
    const handleInterestChange = (e) => {
        setContactData({
            ...contactData,
            interest: e.target.value
        })
    }
    const handlePriceChange = (e) => {
        setContactData({
            ...contactData,
            price: e.target.value
        })
    }
    const handleNumberChange = (e) => {
        setContactData({
            ...contactData,
            number: e.target.value
        })
    }


    return (
        <div className="email">
            <h2 className="section-title">Contact Us</h2>
            <div className="form-container">
                <form id="email-form" onSubmit={handleSubmit}>
                    <input type="email" id="email" size="50" value={contactData.email} className="form-field js-expand" onChange={handleEmailChange} placeholder="Enter your email address" />
                    <div className={`${showFields && 'js-hiddenform'}`} >
                        <div className="half-width">
                            <label className="label" htmlFor="first">First Name</label>
                            <input type="text" id="first" size="30" value={contactData.first} onChange={handleFirstChange} required="" className="form-field" placeholder="First Name" />
                        </div>
                        <div className="half-width">
                            <label className="label" htmlFor="last">Last Name</label>
                            <input type="text" id="last" size="30" value={contactData.last} onChange={handleLastChange} required="" className="form-field" placeholder="Last Name" />
                        </div>
                        <div className="clear"></div>
                        <label className="label" htmlFor="interest">Requirements </label>
                        <select id="interest" value={contactData.interest} onChange={handleInterestChange} size="1" required="" className="form-field">
                            <option disabled="" value="selected">Select Your Needs</option>
                            <optgroup label="Front End:">
                                <option value="GMAT">GMAT</option>
                            </optgroup>
                            <optgroup label="Back End:">
                                <option value="SAT">SAT</option>
                            </optgroup>
                            <optgroup label="Other:">
                                <option value="UNKNOWN">Don't Know</option>
                            </optgroup>
                        </select>
                        <div className="half-width">
                            <label className="label" htmlFor="price">Price</label>
                            <input type="text" id="price" size="" required="" value={contactData.price} onChange={handlePriceChange} className=" form-field" placeholder="Price" />
                        </div>
                        <div className="half-width">
                            <label className="label" htmlFor="number">Contact No.</label>
                            <input type="text" id="number" size="" required="" maxLength="13" value={contactData.number} onChange={handleNumberChange} className=" form-field" placeholder="Contact Number" />
                        </div>
                        <div className="clear"></div>
                    </div>
                  {
                      loading?<p className="">Loading</p>:  <button id="submit" className="submit js-expand" type="submit" value="Send!">Submit</button>
                  }
                </form>
            </div>
        </div>
    );
}

export default App
