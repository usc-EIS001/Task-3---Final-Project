import './pages.css'
import RecipieSharing from "/src/Images/Recipie Sharing.jpg"
import Speghetti from "/src/Images/Speghetti Bolognese.jpg"

export function Home() {
    // Simple Home Page:
    return(
        <div class="border">
        <img src={RecipieSharing} width='20%'/>
            <h1>Welcome To Recipie Sharing</h1>
            <div class="separator"></div>
            <p1>The community's choice for the best recipie sharing platfoom. Below are some of the community's ttop picks for the weeks, or you can click the <i>'Recipies'</i> page above to view all published recipies.
                If you are feeling crerative of your own and wnat to share your favourite recipies, you can publish them in the <i>'Create Recipies'</i> tab above. We hope you enjoy your time.
            </p1>
            <div class="separator"></div>
            <h2>Top Pick Of The Week</h2>
            <img src={Speghetti} width='50%'/>
            <h3>Speghetti Bolognese</h3> 
        </div>
    )
}