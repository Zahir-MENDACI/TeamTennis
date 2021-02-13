import React from 'react'
import photo from '../components/coach.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Coach = () => {
    var tab = [];
    for (let i = 0; i < 9; i++) {
        tab.push(
            <div className="div">
                <img src={photo}/>
                <h4>NOM Prenom</h4>
                <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
            </div>                        
        )
        }
    return (
            <>
                <Navbar />
                <div class="Coach">
                    <div className="card">
                        {tab};                
                    </div>
                </div>
                <Footer />
            </>
    )
}

export default Coach
