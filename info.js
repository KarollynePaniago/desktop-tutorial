function Band(name, famous, favorite, origin, genre, vocal, guitarist , bass, drummer, album){
    this.BandName = name;
    this.famousSong = famous;
    this.favoriteSong = favorite;
    this.origin = origin;
    this.genre = genre;
    this.vocalist = vocal;
    this.guitarist = guitarist;
    this.bassGuitarist = bass;
    this.drummer = drummer;
    this.album = album;
    this.formed = function() {
      return this.vocalist + ", " + this.guitarist + ", " + this.bassGuitarist + ", " + this.drummer + ".";
    }
  };
  document.getElementById("msc1-btn").addEventListener("click", function() {
  displayBand(msc1)
  });
  document.getElementById("msc2-btn").addEventListener("click", function() {
  displayBand(msc2)
  });
  document.getElementById("msc3-btn").addEventListener("click", function() {
  displayBand(msc3)
  });
  document.getElementById("msc4-btn").addEventListener("click", function() {
  displayBand(msc4)
  });
  
  const msc1 = new Band ("Maneskin", "Beggin", "I Wanna Be Your Slave", "Rome, Italy.", "Pop rock, alternative rock, glam rock and hard rock." , "Damiano David" ,"Thomas Raggi","Victoria Di Angelis","Ethan Torchio","https://upload.wikimedia.org/wikipedia/en/1/10/M%C3%A5neskin_-_Teatro_d%27ira_Vol._1.png");
  
  const msc2 = new Band("Arctic Monkeys","Do I Wanna Know?","505", "Sheffield, United Kingdom.", "Indie rock/ post-punk revival.", "Alex Turner","Jamie Cook","Nick O'Malley","Matt Helders", "https://prodimage.images-bn.com/pimages/5034202018810_p0_v1_s600x595.jpg");
  
  const msc3 = new Band ("AC/DC","Shoot To Thrill", "Thunderstruck " ,"Sydney, Australia.","Heavy metal." , "Brian Johnson","Angus Young", "Cliff Williams","Phil Rudd","https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/ACDC-LetThereBeRock.jpg/220px-ACDC-LetThereBeRock.jpg");
  
  const msc4 = new Band("Gorillaz", "Feel Good Inc.", "Rhinestone Eyes", "London, England", "Alternative/Indie.", "Damon Albarn", "Jeff Wootton", "Murdoc Faust Niccals", "Russel Hobbs", "https://media.pitchfork.com/photos/5929a89f9d034d5c69bf3ac0/1:1/w_450%2Cc_limit/843000ca.jpg");
  
  function displayBand(msc){
    document.getElementById("band-info").classList.remove("d-none");
    document.getElementById("band-img").src = msc.album;
    document.getElementById("band-name").innerHTML = msc.BandName;
    document.getElementById("famous-song").innerHTML = "Most famous song: " + msc.famousSong;
    document.getElementById("favorite-song").innerHTML ="My favorite song: " + msc.favoriteSong;
    document.getElementById("band-origin").innerHTML = "Origin: " + msc.origin;
    document.getElementById("band-genre").innerHTML = "Genres: " + msc.genre;
    document.getElementById("band-members").innerHTML = "Band members: " + msc.formed();
   
  };