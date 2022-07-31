const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

//thu nho cd
const cd = $('.cd')
//loadCurrentSong
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
//lang nghe play
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');



const app = {
  currentIndex : 0,
  isPlaying : false,
  isRandom : false,
  isRepeat : false,
  config : JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Nobody Can Drag Me Down",
      singer: "One Direction",
      path: "https://mp3.filmisongs.com/go.php?id=Drag%20Me%20Down%20-%20One%20Direction.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/01/Drag-Me-Down-One-Direction.jpg"
    },
    {
      name: "Dynamite",
      singer: "BTS",
      path:
        "https://mp3.filmisongs.com/go.php?id=Dynamite%20-%20BTS.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/01/Dynamite-BTS.jpg"
    },
    {
      name: "Life Goes On Song",
      singer: "BTS",
      path: "https://mp3.filmisongs.com/go.php?id=BTS%20-%20Life%20Goes%20On%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/08/BTS-Life-Goes-On-Mp3-Song-Download.jpg"
    },
    {
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },{
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },{
      name: "See You Again",
      singer: "Charlie Puth",
      path: "https://mp3.filmisongs.com/go.php?id=See%20You%20Again%20Mp3%20By%20Charlie%20Puth%20and%20Wiz%20Khalifa.mp3",
      image: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/278880926_3242538162699636_2391553243487416837_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ktvb1zbQSU4AX8kSOss&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_G75dmLc8jGseW3AWR2cfuzszrKMKwwiWvPvPqe3y4XA&oe=62EB6554"
    },
    {
      name: "Baby",
      singer: "Justin Bieber x Ludacris",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Baby%20Mp3%20Song%20Download%20Ft%20Ludacris.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-Baby-Mp3-Song-Download-Ft-Ludacris.jpg"
    },
    {
      name: "What Do You Mean",
      singer: "Justin Bieber",
      path:
        "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20What%20Do%20You%20Mean%20Mp3%20Song%20Download.mp3",
      image: "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    },
    {
      name: "Love Yourself",
      singer: "Justin Bieber",
      path: "https://mp3.filmisongs.com/go.php?id=Justin%20Bieber%20-%20Love%20Yourself%20Mp3%20Song%20Download.mp3",
      image:
        "https://filmisongs.net/wp-content/uploads/2021/09/Justin-Bieber-What-Do-You-Mean-Mp3-Song-Download.jpg"
    }
  ],
  setConfig : function(key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  //render hiển thị list bài hát
  render: function () {
        const hmtls = this.songs.map((song, index) => {
            return ` 
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index ="${index}" >
                <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
          `
        })
        playlist.innerHTML = hmtls.join('')
    },

  //hiển thị bài hát đang phát 
  defineProperties: function(){
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },

  // các thao tác tương tác 
  handleEvents: function() {  
    const _this = this
    const cdWidth = cd.offsetWidth

    // xử lí CD quay và dừng 
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)'}
    ], { 
      duration: 10000, // 10seconds
      iterations: Infinity
    })
    cdThumbAnimate.pause()
    
    
    // xử lí khi phóng to thu nhỏ CD
    document.onscroll = function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const newCDWidth = cdWidth - scrollTop

      cd.style.width = newCDWidth > 0 ? newCDWidth + 'px' : 0
      cd.style.opacity = newCDWidth / cdWidth
    }

    //xử lí khí kích play
    playBtn.onclick = function() {
      if (_this.isPlaying){
        audio.pause()     
      }
      else {
        audio.play()
      }
    }

    // khi song được play
    audio.onplay = function() {
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    // khi song bị pause
    audio.onpause = function() {
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    }

    // khi tiến độ bài hát thay đổi 
    audio.ontimeupdate = function() {
      if (audio.duration) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration *100)
        progress.value = progressPercent
      }
    }

    // xử lí khi tua song
    progress.onchange = function(e) {
      const seekTime = audio.duration / 100 * e.target.value
      audio.currentTime = seekTime
    }

    // khi next bài hát
    nextBtn.onclick = function() {
      if (_this.isRandom){
        _this.playRandomSong()
      } else {
         _this.nextSong() 
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    //khi pre bài hát 
    prevBtn.onclick = function() {
      if (_this.isRandom){
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play() 
      _this.render()
      _this.scrollToActiveSong()
    }

    //nút ramdom bật tắt
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    }

    //xử lý next song khi end bài hát
    audio.onended = function() {
      if (_this.isRepeat){
        audio.play()
      } else {
      nextBtn.click()
      }
    }
    //xu li nut repeat
    repeatBtn.onclick = function () {
      _this.isRepeat =!_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    }

    //lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)')
      if (songNode || e.target.closest('.option')){
         // xử lí khi click vào song
         if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
          
         }

         // xử lí khi click vào song option
         if (e.target.closest('.option')){}

      }
    }
  },

  //load bài hát đang phát
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },

  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
  },

  //next song
  nextSong: function () {
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong()
  },

 // prev song
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0 ) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },

  scrollToActiveSong : function () {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    },100)
  },


  // hàm chạy js
  start: function () {
    //gán cấu hình từ config vào ứng dụng
    this.loadConfig() 

    // Định nghĩa các thuộc tính cho object
    this.defineProperties()
    
    // Lắng nghe và xử lí các sự kiến
    this.render()

    //  Tải thông tin bài hát đầu tiên vào UI chạy ứng dụng
    this.loadCurrentSong()

    // Render playlist
    this.handleEvents()

    // hiển trị trạng thái ban đầu của button 
    randomBtn.classList.toggle("active", this.isRandom)
    repeatBtn.classList.toggle("active", this.isRepeat)
  }
}

app.start();
