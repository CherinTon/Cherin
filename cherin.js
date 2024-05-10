const display_clock = () => {
    const today = new Date();
    const date_options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const locale = "en-EN";
    const time = today.toLocaleTimeString(locale);
    const date = today.toLocaleDateString(locale, date_options);

    document.querySelector(".time").innerHTML = time;
    document.querySelector(".date").innerHTML = date;

    setTimeout(display_clock, 100);
};

display_clock();
e9df40;
/* Music */

const playlist =$('.playlist')

const app = {
    currentIndex:0,
    songs: [
        {
            name: 'Zing Mp3',
            singer: 'Online Singer'
        },
    ]
    render:function() {
        const htmls = this.songs.map(song) => {
            return `
            <div class="song ${
              index === this.currentIndex ? "active" : ""
            }" data-index="${index}">
                <div class="thumb"
                    style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `;
        });
        $('.playlist').innerHTML =htmls.join("");
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong',{
          get: function(){
            return this.songs[this.currentIndex]
          }  
        })
    }
        start: function() {
            this.defineProperties()
            this.render()
        }
}

app.start()