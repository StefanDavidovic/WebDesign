class State extends EventTarget {
  state = {};

  constructor(state, onStateChange) {
    super();
    this.state = state;

    this.setupEventListeners(onStateChange);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };

    const stateChangedEvent = new CustomEvent('state_changed', {
      detail: newState
    });

    this.dispatchEvent(stateChangedEvent);
  }

  setupEventListeners(onStateChange) {
    this.addEventListener('state_changed', onStateChange);
  }
}

(function () {
  // ovde cuvaj sve sto ti treba. kao bazu na frontendu
  // ako ti trebaju `users` npr. stavi posle `scores`, i "users: []"
  const state = new State(
    {
      scores: []
    },
    onStateChange
  );

  function onStateChange(state) {
    // ovde je ceo objekat prosledjen na liniji 46
    const { detail } = state;
    // console.log(detail);
    singleBook(detail.scores)
    // TODO: ovde pozivaj funkcije u kojima hoces da se odrazi promena kad se popuni scores
  }


  function initializeFirebaseApp() {
    var firebaseConfig = {
      apiKey: 'AIzaSyDgKP_Dt1-5h5DAndcREBknkVzyJZR41Zo',
      authDomain: 'knjizara-firebase.firebaseapp.com',
      databaseURL: 'https://knjizara-firebase-default-rtdb.firebaseio.com',
      projectId: 'knjizara-firebase',
      storageBucket: 'knjizara-firebase.appspot.com',
      messagingSenderId: '468985595360',
      appId: '1:468985595360:web:1ff435e789d75503a7d785'
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }

  initializeFirebaseApp();

  function gotData(data) {
    var scores = data.val();
    state.setState({ scores });

    // mozes i ovako
    for (const k in scores) {
      var imeK = scores[k].ime;
      var cenaK = scores[k].cena;
      var slikaK = scores[k].slika;
      var isbn = scores[k].isbn;

      var glavniDiv = document.getElementById('glavniDiv');
      var knjigaDiv = document.createElement('div');
      glavniDiv.className = 'row';
      glavniDiv.append(knjigaDiv);
      knjigaDiv.className = 'col-4';

      var srcSlike = document.createElement('img');
      srcSlike.className = 'slike';
      srcSlike.setAttribute('src', slikaK);
      knjigaDiv.appendChild(srcSlike);

      var nazivKnjige = document.createElement('h4');
      const linkKnjige = document.createElement('a');
      linkKnjige.setAttribute('href', `file:///C:/Users/stefo/OneDrive/Desktop/Projekat%20-%20Knjizara/book_details.html#${isbn}`);
      linkKnjige.innerHTML = imeK;
      nazivKnjige.append(linkKnjige);
      knjigaDiv.append(nazivKnjige);

      var cenaSpan = document.createElement('span');
      cenaSpan.innerHTML = '<br>' + 'Cena: ' + cenaK;

      var paragraphCena = (document.createElement('p').innerHTML = cenaSpan);
      knjigaDiv.append(paragraphCena);
    }
  }
  loadBooks(gotData);
  console.log(state.scores)



  // pozivaj svoje funkcije iz drugog fajla ovde
  // npr. imas funkciju sledeceGodineUovoDobaCuBitiMilioner(state.scores) (funkcija je u drugom fajlu fajl.js)

  var menuItems = document.getElementById('MenuItems');
  menuItems.style.maxHeight = '0px';
  function closeMenu() {
    if (menuItems.style.maxHeight == '0px') {
      menuItems.style.maxHeight = '200px';
    } else {
      menuItems.style.maxHeight = '0px';
    }
  }

  var slike = document.getElementsByClassName('col-4');
  for (var i = 0; i < slike.length; i++) {
    slike.item(i).addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'book_details.html';
    });
  }

  var LoginForm = document.getElementById('LoginForm');
  var RegForm = document.getElementById('RegForm');
  var Reg = document.getElementById('createAcc');
  var accIcon = document.getElementById('acc');
  var popWin = document.getElementById('popup');
  var popUp = document.getElementById('popup-content');

  function login() {
    RegForm.style.transform = 'translateX(0px)';
    LoginForm.style.transform = 'translateX(0px)';
  }

  function register() {
    RegForm.style.transform = 'translateX(300px)';
    LoginForm.style.transform = 'translateX(300px)';
  }

  accIcon.addEventListener('click', function (e) {
    popWin.style.display = 'grid';
  });

  // Reg.addEventListener('click', register);

})();
