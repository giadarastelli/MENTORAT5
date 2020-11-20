//notification auslösen:
var updateProgress = function() {
  // calculate values
  var scroll = $(window).scrollTop();
  var height = $(document).height() - $(window).height();
  var percentage = Math.round(scroll * 100 / height);

  // mail notification paula:
  let search = document.querySelectorAll(".email");
  search.forEach(function() {
    let dataset = document.querySelector(".email").className
    console.log(dataset);

    //trigger the FIRST mail:
    if (percentage === 75 && dataset === "email trigger1") {
      document.querySelector(".email").classList.remove("trigger1");
      show_email1();
    }

    //trigger the SECOND mail:
    // if (percentage === 90 && dataset === "email") {
    //   document.querySelector(".email").classList.add("trigger1");
    //   show_email2();
    // }
  })
}
updateProgress();
$(window).scroll(updateProgress);


//notification Drew
function show_email1() {
  console.log('works')
  disableScroll();
  toast.create({
    title: 'From: Mr Bosstitch <br> Subject: New Project',
    text: '----------------------------<br> Hi Drew,<br> I have a new task for you, design a logo.<br><br> Cheers,<br> Mr. B',
    icon: "img/button-mail.png",
    callback: function() {
      enableScroll();
      SecondPart();
    }
  });
};

//notification Drew
function show_email2() {
  console.log('works')
  disableScroll();
  toast.create({
    title: 'From: Mr Bosstitch <br> Subject: i forgot...',
    text: '----------------------------<br> Hi Drew,<br>please finish the project by the end of the week.<br><br> Cheers,<br> Mr. B',
    icon: "img/button-mail.png",
    callback: function() {
      enableScroll();
      SecondPart();
    }

  });
};


function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
  window.onscroll = function() {};
}

function SecondPart() {
  window.open("part2.html");
}


(function(root, factory) {
  try {
    // commonjs
    if (typeof exports === 'object') {
      module.exports = factory();
      // global
    } else {
      root.toast = factory();
    }
  } catch (error) {
    console.log('Isomorphic compatibility is not supported at this time for toast.')
  }
})(this, function() {

  // We need DOM to be ready
  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }

  // Create toast object
  toast = {
    // In case toast creation is attempted before dom has finished loading!
    create: function() {
      console.error([
        'DOM has not finished loading.',
        '\tInvoke create method when DOM\s readyState is complete'
      ].join('\n'))
    }
  };
  var autoincrement = 0;

  // Initialize library
  function init() {
    // Toast container
    var container = document.createElement('div');
    container.id = 'cooltoast-container';
    document.body.appendChild(container);

    // @Override
    // Replace create method when DOM has finished loading
    toast.create = function(options) {
      var toast = document.createElement('div');
      toast.id = ++autoincrement;
      toast.id = 'toast-' + toast.id;
      toast.className = 'cooltoast-toast';

      // title
      if (options.title) {
        var h4 = document.createElement('h4');
        h4.className = 'cooltoast-title';
        h4.innerHTML = options.title;
        toast.appendChild(h4);
      }

      // text
      if (options.text) {
        var p = document.createElement('p');
        p.className = 'cooltoast-text';
        p.innerHTML = options.text;
        toast.appendChild(p);
      }

      // icon
      if (options.icon) {
        var img = document.createElement('img');
        img.src = options.icon;
        img.className = 'cooltoast-icon';
        toast.appendChild(img);
      }

      // click callback
      if (typeof options.callback === 'function') {
        toast.addEventListener('click', options.callback);
      }

      // toast api
      toast.hide = function() {
        toast.className += ' cooltoast-fadeOut';
        toast.addEventListener('animationend', removeToast, false);
      };

      // autohide
      if (options.timeout) {
        setTimeout(toast.hide, options.timeout);
      }
      // else setTimeout(toast.hide, 2000);

      if (options.type) {
        toast.className += ' cooltoast-' + options.type;
      }

      toast.addEventListener('click', toast.hide);


      function removeToast() {
        document.getElementById('cooltoast-container').removeChild(toast);
      }

      document.getElementById('cooltoast-container').appendChild(toast);
      return toast;

    }
  }

  return toast;

});
