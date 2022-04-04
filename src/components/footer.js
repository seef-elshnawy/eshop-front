import './style.css'


function Footer(){
return(
    <footer>
        <h1>MechTech</h1>
        <div>
            <div class="reach-us">
                <div class="reach-us-items">
                    <a href="#"><img src="/time.png" alt=""/></a>
                    <p>Working Hours</p>
                </div>
                <div class="reach-us-items">
                    <a href="#"><img src="/custservies.png" alt=""/></a>
                    <p>Customer Service</p>
                </div>
                <div class="reach-us-items">
                    <a href="#"><img src="/location.png" alt=""/></a>
                    <p>Locations</p>
                </div>
            </div>
            <div class="copyright">
                &copy; Copyright <strong><span>Team 12</span></strong>. All Rights Reserved
            </div>
        </div>
    </footer>
)
}

export default Footer