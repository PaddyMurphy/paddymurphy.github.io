function detectBrowser() {
    $("html").addClass("nowebkitbrowser"), $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase()), $.browser.chrome && ($(".small-nav").length ? ($("html").removeClass("nowebkitbrowser"), $("html").addClass("webkitbrowser"), $.browser.safari = !1) : ($("html").removeClass("nowebkitbrowser"), $("html").addClass("webkitbrowser"), $("html").addClass("chromebrowser"), $.browser.safari = !1)), $.browser.safari && ($("html").addClass("webkitbrowser"), $("html").removeClass("nowebkitbrowser")), -1 != navigator.appVersion.indexOf("Mac") || $("body").addClass("performance-boost")
}

function preLoader() {
    for (var t = ["img/blood.png", "img/textured-ui/green-texture.png", "img/bg/grad-bg.png", "img/textured-ui/green-texture-circle.png", "img/textured-ui/black-texture.png", "img/textured-ui/red-texture.png", "img/textured-ui/red-texture-2.png", "img/textured-ui/mini-texture.png", "img/textured-ui/repeat-white.png", "img/textured-ui/white-texture.png", "img/textured-ui/social.png", "img/textured-ui/threat.png", "img/textured-ui/mute-1.png", "img/textured-ui/mute-2.png", "img/textured-ui/popout-left.png", "img/textured-ui/popout-right.png", "img/textured-ui/popout-mid.png", "img/textured-ui/play-icon.png", "img/textured-ui/popout-red-end.png", "img/textured-ui/popout-red-mid.png"], a = [], e = 0; e < t.length; e++) ! function(t, a) {
        var e = new Image;
        e.onload = function() {
            a.resolve()
        }, e.src = t
    }(t[e], a[e] = $.Deferred());
    $.when.apply($, a).done(function() {
        setTimeout(function() {
            $(".nowebkitbrowser").length || $(window).width() < 700 ? $("body").addClass("thirty-pieces-titles") : startupSequence()
        }, preloaderTimeout)
    })
}

function sizeshards() {
    $(".wrap").each(function() {
        var t = .99 * $(window).width(),
            a = .7 * t,
            e = -1 * (t / 2),
            n = -1 * (a / 2) - 0;
        $(this).each(function() {
            $(this).css({
                width: t,
                height: a,
                "margin-top": n,
                "margin-left": e
            })
        })
    }), $(window).width() < 700 || $("html.touch").length || $(".nowebkitbrowser").length ? $("html").addClass("small-nav") : $("html.webkitbrowser").length && $("html").removeClass("small-nav")
}

function startupSequence() {
    $("body").addClass("start-up-seq"), introinterval = 3100, setTimeout(function() {
        $(".intro-sequence p:nth-child(1), .intro-sequence").addClass("active"), setTimeout(function() {
            0 == skipped && $("#animalchanger").addClass("vaquita-shards")
        }, 2600), setTimeout(function() {
            0 == skipped && ($(".intro-sequence p.active").removeClass("active"), $(".intro-sequence p:nth-child(2)").addClass("active")), setTimeout(function() {
                0 == skipped && ($(".intro-sequence p.active").removeClass("active"), $(".intro-sequence p:nth-child(3)").addClass("active")), setTimeout(function() {
                    0 == skipped && ($(".intro-sequence p.active").removeClass("active"), $(".intro-sequence p:nth-child(4)").addClass("active"), $("#animalchanger").removeClass("vaquita-shards")), setTimeout(function() {
                        $(".intro-sequence p.active").removeClass("active")
                    }, introinterval)
                }, 4e3)
            }, introinterval)
        }, introinterval)
    }, 1400), setTimeout(function() {
        0 == skipped && $("body").addClass("thirty-pieces-titles")
    }, 15500)
}

function startexperience() {
    $("body").addClass("titles-out"), setTimeout(function() {
        $("body").removeClass("thirty-pieces-titles preloader titles-out start-up-seq"), $(".intro-sequence").hide(), prevAnimal = 2, nextorprevanimal(), animationstatequestion(), setTimeout(function() {
            $("body").removeClass("preloader-layer-2")
        }, 1400), $(".nowebkitbrowser").length && nowebkitnextorprevanimal()
    }, 400), $(".nowebkitbrowser").length && $(".main-nav").addClass("no-mute")
}

function overlayprocess() {
    turnoffslideshow(), $("body").removeClass("animal-animations-on"), animationstateaddition(), $(overlayContent).toggleClass("active"), setTimeout(function() {
        $(".overlay").toggleClass("active")
    }, 10)
}

function animalPrevKey() {
    $(".smash").length || $(".all-animals").length || $(".preloader-layer-2").length || $(".overlay.active").length || previousAnimalProcess()
}

function animalNextKey() {
    $(".smash").length || $(".all-animals").length || $(".preloader-layer-2").length || $(".overlay.active").length || nextAnimalProcess()
}

function animalSmashKey() {
    $(".smash").length || $(".all-animals").length || $(".preloader-layer-2").length || $(".overlay.active").length || (turnoffslideshow(), smashanimalprocess())
}

function nextAnimalProcess() {
    $("body").removeClass("animal-animations-on"), turnoffslideshow(), prevAnimal = animalList.indexOf($("#animalchanger").attr("class")), newAnimal = prevAnimal + 1, 30 == newAnimal && (newAnimal = 0), nextorprevanimal(), animationstatequestion()
}

function previousAnimalProcess() {
    $("body").removeClass("animal-animations-on"), turnoffslideshow(), prevAnimal = animalList.indexOf($("#animalchanger").attr("class")), newAnimal = prevAnimal - 1, -1 == newAnimal && (newAnimal = 29), nextorprevanimal(), animationstatequestion()
}

function nextorprevanimal() {
    setTimeout(function() {
        $(".shadow").removeClass("inactive")
    }, 200), prevAnimal > newAnimal ? ($(".wrap").addClass("right-to-left"), $(".wrap.left-to-right").removeClass("left-to-right")) : ($(".wrap").addClass("left-to-right"), $(".wrap.right-to-left").removeClass("right-to-left")), $("#animalchanger").attr("class", animalList[newAnimal]), $(".next .popout").attr("popanimal", animalList[newAnimal]), $(".prev .popout").attr("popanimal", animalList[newAnimal]), $(".popout").addClass("text-change"), $(".animalinfo").addClass("text-change"), $(".content-wrap .content-info .infos ul li:nth-child(1) span").html(animalScientificName[newAnimal]), $(".content-wrap .content-info .infos ul li:nth-child(3) span").html(animalRange[newAnimal]), $(".content-wrap .content-info .infos p:nth-child(3)").html(animalCopyOne[newAnimal]), $(".content-wrap .content-info .infos p:nth-child(4)").html(animalCopyTwo[newAnimal]), $(".content-wrap .content-info .infos p:nth-child(5)").html(animalCopyThree[newAnimal]), $(".content-wrap .content-info .ctas li:nth-child(3)").html(animalCharity[newAnimal]), setTimeout(function() {
        $(".animalinfo h2").text(animalNames[newAnimal]), $(".animalinfo li:nth-child(1) span").text(newAnimal + 1), $(".popout").removeClass("text-change"), $(".animalinfo").removeClass("text-change"), 0 == newAnimal ? ($(".prev .popout").text(animalNames[29]), $(".next .popout").text(animalNames[1])) : 29 == newAnimal ? ($(".prev .popout").text(animalNames[28]), $(".next .popout").text(animalNames[0])) : ($(".prev .popout").text(animalNames[newAnimal - 1]), $(".next .popout").text(animalNames[newAnimal + 1]))
    }, 150)
}

function animationstatequestion() {
    animalanimationstate += 1;
    var t = animalanimationstate;
    animalanimationstimeoutnext = setTimeout(function() {
        t == animalanimationstate && $("body").addClass("animal-animations-on")
    }, 2e3)
}

function animationstateaddition() {
    animalanimationstate += 1
}

function smashanimalprocess() {
    $(".chromebrowser").length && SOUNDS.play("smashpiano"), $("body .content-wrap").show(), $("body .content-wrap .content").addClass("copy-delays"), $("body").removeClass("animal-animations-on"), animationstateaddition(), currentChartNumber = 1, chartquery(), $(".shadow").addClass("inactive"), setTimeout(function() {
        $("body .content-wrap").addClass("show"), $("body .chart").addClass("show")
    }, 10), setTimeout(function() {
        $("body .content-wrap .content").removeClass("copy-delays")
    }, 1200), $("body").toggleClass("smash")
}

function turnOnAnimalNav() {
    prevAnimal = $("#animalchanger").attr("class"), $(".all-animals-off-btn .popout span").text(animalNames[newAnimal]), $("#animalchanger").removeClass(), $("body").addClass("all-animals"), $("body").removeClass("animal-animations-on"), animationstateaddition(), $(".shadow").addClass("inactive"), $(".hover-detector").removeClass("inactive"), $(".animal-nav-content").removeClass("inactive"), $("body").addClass("earlyburst"), setTimeout(function() {
        $("body").removeClass("earlyburst")
    }, 500), setTimeout(function() {
        $(".hover-detector div:nth-child(" + (newAnimal + 1) + ")").addClass("active-animal")
    }, 700), setTimeout(function() {
        $(".hover-detector").addClass("active"), $(".animal-nav-content").addClass("active")
    }, 5)
}

function turnoffanimalnav() {
    "" != prevAnimal && $("#animalchanger").attr("class", prevAnimal), $("body").removeClass("all-animals"), $("body").addClass("slow-polygons"), animationstatequestion(), $(".hover-detector").removeClass("active"), $(".hover-detector div").removeClass("active-animal"), $(".animal-nav-content").removeClass("active"), setTimeout(function() {
        $(".animal-nav-content").addClass("inactive"), $(".hover-detector").addClass("inactive")
    }, 500), setTimeout(function() {
        $(".shadow").removeClass("inactive")
    }, 1e3), setTimeout(function() {
        $("body").removeClass("slow-polygons")
    }, 1500)
}

function activeChartLinks(t) {
    $(".statistics .active").removeClass("active"), t.addClass("active"), chartquery()
}

function chartquery() {
    if ($(".statistics .stats-ui").removeClass("one two three four"), $(".statistics .chart").removeClass("show-chart-1 show-chart-2 show-chart-3"), $(".statistics .stats-ui").addClass(animalChart[newAnimal][0]), $(".chart").addClass("remove-stats"), $(".statistics-on").length) {
        var t = "show-chart-" + currentChartNumber;
        $(".statistics .chart").addClass(t)
    }
    statisticschangetimeout = setTimeout(function() {
        $(".statistics .stats-ui li:nth-child(2) a span").text(animalChart[newAnimal][1][1]), $(".statistics .stats-ui li:nth-child(3) a span").text(animalChart[newAnimal][2][1]), $(".statistics .stats-ui li:nth-child(4) a span").text(animalChart[newAnimal][3][1]), $(".statistics .chart").removeClass("one-stat four-stats five-stats six-stats eight-stats"), $(".statistics .chart").addClass(animalChart[newAnimal][currentChartNumber][0]), setTimeout(function() {
            $(".content-wrap .statistics .chart .chart-bg div").each(function() {
                $(this).css({
                    top: "50%"
                })
            })
        }, 20), $(".statistics .chart-info p:nth-child(1) span").html(animalChart[newAnimal][currentChartNumber][2]), $(".statistics .chart-info p:nth-child(2) span").html(animalChart[newAnimal][currentChartNumber][3]), $(".statistics .chart-info p:nth-child(3) span").html(animalChart[newAnimal][currentChartNumber][4]), $(".statistics .chart-info p:nth-child(4) span").html(animalChart[newAnimal][currentChartNumber][5]), $(".statistics .chart-info p:nth-child(5) span").html(animalChart[newAnimal][currentChartNumber][6]), $(".statistics .chart-info p:nth-child(6) span").html(animalChart[newAnimal][currentChartNumber][7]), $(".statistics .chart-info p:nth-child(7) span").html(animalChart[newAnimal][currentChartNumber][8]), $(".statistics .chart-info p:nth-child(8) span").html(animalChart[newAnimal][currentChartNumber][9]), $(".statistics .chart-info p:nth-child(9) span").html(animalChart[newAnimal][currentChartNumber][10]), $(".chart").removeClass("remove-stats")
    }, 200)
}

function startslideshow() {
    $("body").addClass("slideshow-on"), $(".main-nav li:nth-child(2) a").addClass("stop"), $(".main-nav li:nth-child(2) .popout").addClass("text-change"), setTimeout(function() {
        $(".main-nav li:nth-child(2) .popout").removeClass("text-change"), $(".main-nav li:nth-child(2) .popout").text("stop")
    }, 150), slideshowvar += 1, slideshowquery()
}

function turnoffslideshow() {
    slideshowvar += 1, $(".main-nav li:nth-child(2) a").removeClass("stop"), $(".main-nav li:nth-child(2) .popout").addClass("text-change"), setTimeout(function() {
        $(".main-nav li:nth-child(2) .popout").removeClass("text-change"), $(".main-nav li:nth-child(2) .popout").text("Cycle Through")
    }, 150), $(".slideshow-on").removeClass("slideshow-on"), animationstatequestion()
}

function slideshowquery() {
    randomAnimal(), slideshowvar += 1;
    var t = slideshowvar;
    setTimeout(function() {
        t == slideshowvar && slideshowquery()
    }, 2900)
}

function randomAnimal() {
    $("body").removeClass("animal-animations-on"), newAnimal = Math.floor(Math.random() * finishedAnimals), nextorprevanimal(), $(".nowebkitbrowser").length && nowebkitnextorprevanimal()
}

function animalStates(t) {
    setInterval(function() {
        t.removeClass("state-four"), setTimeout(function() {
            t.addClass("state-two")
        }, 1e3), setTimeout(function() {
            t.removeClass("state-two"), t.addClass("state-three")
        }, 2e3), setTimeout(function() {
            t.removeClass("state-three"), t.addClass("state-four")
        }, 3e3)
    }, 4e3)
}

function animalStatesSecondLevel(t) {
    setInterval(function() {
        setTimeout(function() {
            t.addClass("two-state-two")
        }, 1e3), setTimeout(function() {
            t.removeClass("two-state-two")
        }, 1100), setTimeout(function() {
            t.addClass("two-state-two")
        }, 1400), setTimeout(function() {
            t.removeClass("two-state-two")
        }, 1500)
    }, 3e3)
}

function animalStatesShimmer(t) {
    setInterval(function() {
        setTimeout(function() {
            t.addClass("shimmer")
        }, 4e3), setTimeout(function() {
            t.removeClass("shimmer")
        }, 6e3)
    }, 7e3)
}

function nowebkitnextorprevanimal() {
    $(".wrap .shard-wrap.active").removeClass("active"), $(".wrap .shard-wrap:nth-child(" + (newAnimal + 1) + ")").addClass("active")
}
var preloaderTimeout = 2200;
preLoader();
var app, animalanimationstate = 0,
    currentChartNumber = 0,
    browservar = 0,
    slideshowvar = 0,
    finishedAnimals = 29;
newAnimal = 0;
var prevAnimal = 0,
    skipped = 0,
    forcelinesshift = 50,
    resizingPublicVariable = 1;
$(document).ready(function() {
    sizeshards(), detectBrowser(), SOUNDS.init(), setTimeout(function() {
        $(".level-one, .loading").removeClass("hidden-startup")
    }, 130), $(".start-experience, .skip-intro a").on("click", function() {
        skipped = 1, startexperience()
    }), $(".all-animals-btn").on("click", function() {
        turnoffslideshow(), turnOnAnimalNav()
    }), $(".all-animals-off-btn").on("click", function() {
        turnoffanimalnav()
    }), $(".main-nav li:nth-child(2) a").on("click", function() {
        $("body.slideshow-on").length ? turnoffslideshow() : startslideshow()
    }), $(".main-nav li:nth-child(3)").on("click", function() {
        $(".main-nav li:nth-child(3).muted").length ? (soundManager.unmute(), $(this).removeClass("muted"), $(".main-nav li:nth-child(3) .popout").addClass("text-change"), setTimeout(function() {
            $(".main-nav li:nth-child(3) .popout").removeClass("text-change"), $(".main-nav li:nth-child(3) .popout").text("Get that racket off")
        }, 150)) : (soundManager.mute(), $(this).addClass("muted"), $(".main-nav li:nth-child(3) .popout").addClass("text-change"), setTimeout(function() {
            $(".main-nav li:nth-child(3) .popout").removeClass("text-change"), $(".main-nav li:nth-child(3) .popout").text("Beautify with sound")
        }, 150))
    }), $("footer .about").on("click", function() {
        overlayContent = ".overlay .about", overlayprocess()
    }), $("footer .how").on("click", function() {
        overlayContent = ".overlay .how", overlayprocess()
    }), $("footer .sources").on("click", function() {
        overlayContent = ".overlay .sources", overlayprocess()
    }), $("footer .share").on("click", function() {
        overlayContent = ".overlay .sharing-goodies", overlayprocess()
    }), $("footer .footer-nav").on("click", function() {
        $("footer").toggleClass("mobile-footer-active")
    }), $(".animalinfo .wallpaper").on("click", function() {
        overlayContent = ".overlay .download";
        var t = "Give the " + animalNames[newAnimal] + " a digital home by downloading a desktop wallpaper.";
        $(".overlay .download h2").text(t);
        var a = "img/assets/wallpapers/2560x1600/2560x1600_" + animalList[newAnimal] + ".png",
            e = "img/assets/wallpapers/1920x1080/1920x1080_" + animalList[newAnimal] + ".png",
            n = "img/assets/wallpapers/1366x768/1366x768_" + animalList[newAnimal] + ".png",
            i = "img/assets/wallpapers/1024x1024/1024x1024_" + animalList[newAnimal] + ".png";
        $(".overlay .download img").attr("src", n), $(".overlay .download li:nth-child(1) a").attr("href", a), $(".overlay .download li:nth-child(2) a").attr("href", e), $(".overlay .download li:nth-child(3) a").attr("href", n), $(".overlay .download li:nth-child(4) a").attr("href", i), overlayprocess()
    }), $(".overlay .close").on("click", function() {
        animationstatequestion(), $(".overlay").toggleClass("active"), setTimeout(function() {
            $(".overlay div").removeClass("active")
        }, 500)
    }), $(".hover-detector div").on("mouseover", function() {
        $(".shard-wrap .shard").not(this).removeClass("active"), $(".level-one").addClass("shadow-active");
        var t = $(this).index() + 1;
        $(".shard-wrap:nth-child(" + t + ") .shard").addClass("active"), $(".animal-nav-content ul li:nth-child(" + t + ")").addClass("active"), $(".animal-nav-content .title-content").addClass("inactive");
        var a = $(this).attr("data-animalClick");
        $(".animal-nav-content").attr("animal", a), $(".animal-nav-content div").each(function() {
            $(this).hasClass(a) ? $(this).addClass("active") : $(this).removeClass("active")
        })
    }), $(".content-info .close").on("click", function() {
        $("body .content-wrap").removeClass("show"), setTimeout(function() {
            $("body").toggleClass("smash")
        }, 120), setTimeout(function() {
            $(".content-wrap").hide()
        }, 300), setTimeout(function() {
            $(".shadow").removeClass("inactive")
        }, 1e3), animationstatequestion()
    }), $(".prev a").on("click", function() {
        previousAnimalProcess()
    }), $(".next a").on("click", function() {
        nextAnimalProcess()
    }), $(".why-endangered").on("click", function() {
        turnoffslideshow(), smashanimalprocess()
    }), $(".throbbing").on("mouseover", function() {
        $(this).removeClass("throbbing")
    }), $(".hover-detector").on("mouseout", function() {
        $(".shard-wrap .shard").removeClass("active"), $(".level-one").removeClass("shadow-active"), $(".level-one").addClass("shadow-inactive"), $(".animal-nav-content ul li").removeClass("active"), $(".animal-nav-content .title-content").removeClass("inactive"), setTimeout(function() {
            $(".level-one").removeClass("shadow-inactive")
        }, 100)
    }), $(".hover-detector div").on("click", function() {
        $(".hover-detector div").removeClass("active-animal"), prevAnimal = "", newAnimal = animalList.indexOf($(this).attr("data-animalClick")), nextorprevanimal(), $(".animal-nav-content div").each(function() {
            $(this).removeClass("active")
        }), turnoffanimalnav()
    }), $(".animal-nav-content ul li").on("click", function() {
        newAnimal = $(this).index(), turnoffanimalnav(), nextorprevanimal(), $(".nowebkitbrowser").length && nowebkitnextorprevanimal()
    }), $(".videoturnon").on("click", function() {
        soundManager.setVolume("ambientloop", 26), $(".content-wrap .videos").toggleClass("video-show"), $(".content-wrap .videos iframe").attr("src", animalVideo[newAnimal] + "&autoplay=1"), setTimeout(function() {
            $(".content-wrap .videos").toggleClass("video-show-ul")
        }, 2), setTimeout(function() {
            $("body").toggleClass("video-on")
        }, 550)
    }), $(".js-close-video").on("click", function() {
        $(".content-wrap .videos").toggleClass("video-show-ul"), setTimeout(function() {
            $(".content-wrap .videos").toggleClass("video-show"), $("body").toggleClass("video-on"), $(".content-wrap .videos iframe").attr("src", "zero"), $(".content-wrap .videos iframe").attr("src", animalVideo[newAnimal])
        }, 120), setTimeout(function() {
            soundManager.setVolume("ambientloop", 100)
        }, 200)
    }), $(".statistics-on-btn").on("click", function() {
        $(".content-wrap").addClass("statistics-on"), $(".statistics .chart").addClass("chart-info-delays"), currentChartNumber = 1, chartquery(), activeChartLinks($(".statistics .stats-ui li:nth-child(2) .line-link")), setTimeout(function() {
            $(".statistics .chart").removeClass("chart-info-delays")
        }, 1e3)
    }), $(".animalinfo .direct-stats").on("click", function() {
        smashanimalprocess(), setTimeout(function() {
            $(".content-wrap").addClass("statistics-on"), currentChartNumber = 1, chartquery(), activeChartLinks($(".statistics .stats-ui li:nth-child(2) .line-link"))
        }, 400)
    }), $(".statistics .nav-btn").on("click", function() {
        $(".content-wrap").removeClass("statistics-on"), currentChartNumber = 1, activeChartLinks($(this))
    }), $(".statistics .stats-ui li:nth-child(2) .line-link").on("click", function() {
        currentChartNumber = 1, activeChartLinks($(this))
    }), $(".statistics .stats-ui li:nth-child(3) .line-link").on("click", function() {
        $("statistics .statistics li .line-link").removeClass("active"), currentChartNumber = 2, activeChartLinks($(this))
    }), $(".statistics .stats-ui li:nth-child(4) .line-link").on("click", function() {
        currentChartNumber = 3, activeChartLinks($(this))
    }), $(".random-animal-btn").on("click", function() {
        turnoffanimalnav(), randomAnimal()
    }), $(".chromebrowser .nav-btn, .chromebrowser .why-endangered, .chromebrowser .box-link").on("mouseenter", function() {
        SOUNDS.play("hover")
    }), $(".chromebrowser .hover-detector div, .chromebrowser .line-link, .chromebrowser .ctas a, .chromebrowser .animalinfo a").on("mouseenter", function() {
        SOUNDS.play("softhover")
    }), $("body").each(function() {
        animalStates($(this))
    }), $("body").each(function() {
        animalStatesSecondLevel($(this))
    }), $("body").each(function() {
        animalStatesShimmer($(this))
    }), $(".browser-statement .close").on("click", function() {
        $(".browser-statement").addClass("inactive")
    }), $(".nowebkitbrowser .next a, .nowebkitbrowser .prev a").on("click", function() {
        nowebkitnextorprevanimal()
    }), sizeshards()
}), $(window).resize(function() {
    if ($(".touch").length);
    else if ($(".preloader-layer-2").length || $(".all-animals").length) {
        $(".resize-hider").addClass("active"), resizingPublicVariable += 1;
        var t = resizingPublicVariable;
        setTimeout(function() {
            t == resizingPublicVariable && $(".resize-hider").removeClass("active")
        }, 240)
    }
    sizeshards()
}), $("body").bind("mousewheel", function(t) {
    $(".animal-animations-on").length && (t.originalEvent.wheelDelta / 1e3 > 0 ? previousAnimalProcess() : nextAnimalProcess())
}), document.addEventListener("visibilitychange", function() {
    document.hidden ? soundManager.setVolume("ambientloop", 13) : soundManager.setVolume("ambientloop", 100)
}), $(document).keydown(function(t) {
    switch (t.which) {
        case 37:
            animalPrevKey();
            break;
        case 38:
            animalPrevKey();
            break;
        case 39:
            animalNextKey();
            break;
        case 40:
            animalNextKey();
            break;
        case 32:
            animalSmashKey();
            break;
        default:
            return
    }
}), SOUNDS = {
    btn: $("<a>").attr("href", "#").attr("id", "toggle-mute").addClass("toggle-mute").text(""),
    looping: null,
    fading: null,
    init: function() {
        soundManager.setup({
            url: "swf/",
            debugMode: !1,
            waitForWindowLoad: !1,
            useHighPerformance: !0,
            useHTML5Audio: !0,
            flashVersion: 9,
            multiShot: !0,
            onready: SOUNDS.onSoundManagerReady,
            ontimeout: function() {}
        })
    },
    onSoundManagerReady: function() {
        soundManager.createSound({
            id: "ambientloop",
            url: "audio/ambient-loop-piano.mp3",
            autoLoad: !0,
            multiShot: !0,
            onload: function() {
                SOUNDS.playLoop("ambientloop", 44500)
            }
        }), soundManager.createSound({
            id: "hover",
            url: "audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function() {}
        }), soundManager.createSound({
            id: "softhover",
            url: "audio/hover_ui.mp3",
            autoLoad: !0,
            onload: function() {
                this.setVolume(50)
            }
        }), soundManager.createSound({
            id: "smashpiano",
            url: "audio/smash.mp3",
            autoLoad: !0,
            onload: function() {
                this.setVolume(30)
            }
        })
    },
    play: function(t) {
        soundManager.play(t)
    },
    playLoop: function(t, a) {
        SOUNDS[t + "looping"] || (SOUNDS[t + "looping"] = !0, SOUNDS.play(t), SOUNDS["looping" + t] = setInterval(function() {
            SOUNDS.play(t)
        }, a))
    },
    stopLoop: function(t) {
        clearInterval(SOUNDS["looping" + t]), SOUNDS[t + "looping"] = !1
    },
    setVolume: function(t, a) {
        var e = soundManager.getSoundById(soundID);
        e.setVolume(a)
    },
    fadeIn: function(t) {
        if ("out" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (e >= 100) return SOUNDS.fading = "", !1;
                SOUNDS.fading = "in", a.setVolume(Math.min(100, e + 10)), setTimeout(function() {
                    SOUNDS.fadeIn(t)
                }, 50)
            }
        }
    },
    fadeOut: function(t) {
        if ("in" != SOUNDS.fading) {
            var a = soundManager.getSoundById(t);
            if (a) {
                var e = a.volume;
                if (40 >= e) return SOUNDS.fading = "", !1;
                SOUNDS.fading = "out", a.setVolume(Math.max(0, e - 10)), setTimeout(function() {
                    SOUNDS.fadeOut(t)
                }, 50)
            }
        }
    },
    toggleMute: function(t) {
        t.preventDefault(), SOUNDS.btn.hasClass("muted") ? SOUNDS.unmute() : SOUNDS.mute()
    },
    mute: function(t) {
        soundManager.mute(t), SOUNDS.btn.addClass("muted")
    },
    unmute: function(t) {
        soundManager.unmute(t), SOUNDS.btn.removeClass("muted")
    }
};