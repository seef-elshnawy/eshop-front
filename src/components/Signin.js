import './style1.css'

function Signin(){
    return(
        <body className='body'>
    <form action="" method="post">
        <mains className='mains'>
            <div className="title">
                <h2>Sign-In</h2>
            </div>
            <div className="flex">
                <label for="email" className='label'>Email</label>
                <input type="email" name="email" required/>
            </div>
            <div className="flex">
                <label for="password">Password</label>
                <input type="password" name="password" required/>
            </div>
            <div className="signin">
                <button className='signsubmit' type="submit">SIGN IN</button>
            </div>
            <div className="redirect_Signin">
                <p>Don`t have an account? <a href="signup">Sign-Up</a></p>
            </div>
        </mains>
    </form>
     </body>
    )
}

export default Signin