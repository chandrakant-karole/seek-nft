import { React } from 'react'
// import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
// import { CookieState } from '../context/cookiesProvider'

export default function Login() {
    const [cookies, setCookie] = useCookies(["user"]);
    // const { user } = CookieState();


    // console.log("chatproveiser",user)
    console.log(cookies)
    // function handleCookie() {
    // //     setCookie(JSON.stringify({"Jon's User ID": 1,
    // //     "Mike's User ID": 2,
    // //     "Jeremy's User ID": 3
    // // }), 
    // // setCookie("user", {
    // //     "Jon's User ID": 1,
    // //     "Mike's User ID": 2,
    // //     "Jeremy's User ID": 3
    // // }, {
    // //       path: "/login"
    // //     });
    //   }

    // const [postID, setPostID] = useState(null)

    // userEmail = userEmail.value;
    // userPassword = userPassword.value;
    // console.log(userEmail)
    // console.log(userPassword)
    async function submit(e) {
        e.preventDefault();
        var userEmail = document.getElementById('email');
        var userPassword = document.getElementById('password');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail.value, password: userPassword.value })
        };

        await fetch('https://seeknftmint.com:80/api/login', requestOptions)
            .then(response => response.json().then((res) => {
                console.log('responseNew', res)
                console.log('data', res.data)

                console.log('res.status', res.status)
                let response1 = res.status
                console.log(response1)

                if (response1 === 1) {
                    setCookie("_SeekUser", res.data.cookie_id,
                    ///cookie Data ID
                        console.log('cookie_id', res.data.cookie_id)

                        //  {
                        //       path: "/login"
                        //     }
                    );
                    localStorage.setItem('loginToken', JSON.stringify({
                        "login": true
                    }))
                    window.location.href = 'https://www.seeknft.com/byu/upload'
                }
                else {
                    window.location.href = 'https://www.seeknft.com/byu/'
                }
                // setPostID(response1)
                // console.log(postID)
            }))
        // console.log(response1)

        // setPostID(0)
        // .then(status => setPostID(status));

        // if(postID === 1){
        //     window.location.href = '/upload'
        // } 
        // else {
        //     window.location.href = '/'
        // }

        //  console.log(postID,'postID')

        //     console.log(userEmail.value)
        //    console.log(userPassword.value)
    }

    console.log(cookies.user)

    return (
        <>
            <div className="container" style={{ marginTop: '40px', marginBottom: '50px' }}>

                <div className='et_pb_section et_pb_section_0 et_section_regular'>
                    <div className="et_pb_row et_pb_row_0" >
                        <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">


                            <div className="et_pb_module et_pb_code et_pb_code_0">


                                <div className="et_pb_code_inner"><center>
                                    <p className=""><img loading="lazy" className="aligncenter wp-image-425" src="https://www.seeknft.com/wp-content/uploads/2022/01/NFT-icon-lockup-alpha.png" alt="" width="200" height="200" /></p>
                                    <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: '500' }}>Studio Login</h1>
                                    <p><input id='email' className="wpforms-field-large" style={{ width: '200px', padding: '0px 10px', fontSize: '.9em' }} type="text" placeholder="username or email" /></p>
                                    <p><input id='password' className="wpforms-field-large" type="password" style={{ width: '200px', padding: '0px 10px', fontSize: '.9em' }} placeholder="password" /></p>
                                </center></div>
                            </div><div className="et_pb_module et_pb_code et_pb_code_1">


                                <div className="et_pb_code_inner"><center>
                                    <button style={{ width: '120px', padding: '3px 37px', textDecoration: 'none', border: '1px solid #15AAF7', background: 'white', fontSize: '14px', borderRadius: '0' }} onClick={submit}>
                                        Login</button>
                                </center></div>
                            </div><div className="et_pb_module et_pb_code et_pb_code_2">


                                <div className="et_pb_code_inner"><center>
                                    <hr style={{ width: '50%', maxWidth: '200px' }} />
                                    <p><a style={{ color: '#2ea3f2', fontSize: '.9em' }} href="https://www.seeknft.com/contact">Lost Password</a> | <a style={{ color: '#2ea3f2', fontSize: '.9em' }} href="https://www.seeknft.com/contact">Register</a></p>
                                </center></div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}
