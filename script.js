/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')
// a
const ctx = document.getElementById("revenues");

Chart.defaults.color = "#fff",
Chart.defaults.font.family = "Open Sans";

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Web Developer",
      "Phographer",
      "Desaigner",
      "Editing",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Crative",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          65, 90, 42, 70, 78, 40, 82, 65,
        ],
        backgroundColor: "aqua",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  // continuation

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "skills & Professional",
        padding: {
          bottom: 16,
        },
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#111",
      },
    },
    scales: {
      x: {
        border: {
          dash: [2, 4],
        },
        grid: {
          color: "#111",
        },
        title: {
          text: "2023",
        },
      },
      y: {
        grid: {
          color: "#111",
        },
        border: {
          dash: [2, 4],
        },
        beginAtZero: true,
        title: {
          display: true,
          text: "Revenue",
        },
      },
    },
  },
});
// music
var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}
// ac
class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.faq-content');
    this.expandIcon = this.summary.querySelector('.expand-icon')
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute('src', 'plus.svg');
      return this.onAnimationFinish(false);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute('src', 'plus.svg');
      return this.isClosing = false;
    }
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + 
                         this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }
    
    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 350,
      easing: 'ease-out'
    });

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute(
        'src', 'minus.svg'
      );
      return this.onAnimationFinish(true);
    }
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute(
        'src', 'minus.svg'
      );
      return this.isExpanding = false;
    }
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = '';
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});
