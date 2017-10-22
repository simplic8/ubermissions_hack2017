import React from 'react';
import LoginRegisterWidget from './LoginRegisterWidget.js';

export default class SearchTrip extends React.Component {

    render() {
        
        var youtube_link = "https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ";
        
        var styleA = {
            position: 'fixed',
            zIndex: 1000,
            top: '0px',
            left: '0px',
            width: "100%", 
            height: "100%"
        }

        return (
            <div>
                <div class="video-background">
                    <div class="video-foreground">
                        <iframe 
                            frameborder="0" allowfullscreen
                            src={youtube_link}>
                        </iframe>
                    </div>
                </div>

                <LoginRegisterWidget />

            </div>
        );
    }
}