var progressPath = document.querySelector(".progress path");
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition =
    "none";
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 300ms linear";


var updateProgress = function () {
    // calculate values
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var percentage = Math.round(scroll * 100 / height);
    var progress = pathLength - (scroll * pathLength / height);
    // update dashOffset
    progressPath.style.strokeDashoffset = progress;

    // neu mail notification paula:
    let search = document.querySelectorAll(".container");
    search.forEach(function () {
            let dataset = document.querySelector(".container").className
            console.log(dataset);
            //trigger wenn bei 30:
            if (percentage === 20 && dataset === "container no-mail firsttime"){
              document.querySelector(".container").classList.remove("firsttime");
              document.querySelector(".container").classList.add("new-mail");
              document.querySelector(".container").classList.remove("no-mail");
              show();
            }
            //zum trigger reseten:
            if (percentage < 16 || percentage > 24) {
              document.querySelector(".container").classList.add("firsttime");
            }
            //damit kein unendliche mailspam gibt:
            else{
              document.querySelector(".container").classList.remove("new-mail");
              document.querySelector(".container").classList.add("no-mail");
            }
        })
}

updateProgress();
$(window).scroll(updateProgress);
