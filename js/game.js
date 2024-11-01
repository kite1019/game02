(function (e) {
    var gameWidth = $('#main').width();
    var gameHeight = $('#main').height();

    $('ul.btn_wrap li.popup, .game_info .btn_close').click(function () {
        $('.game_popup').toggleClass('show');
        $('html, body').toggleClass('fixed');
    });

    // 計時30秒
    var myTimer;
    function count() {
        myTimer = setInterval(myClock, 1000);
        var clockNum = 30;
        document.getElementById('countdown').innerHTML=clockNum;

        function myClock() {
            document.getElementById("countdown").innerHTML = --clockNum;
            if (clockNum == 0) {
                clearInterval(myTimer);
                b.stop();
            }
        }
    }

    var R = function (e) {
        var t = [];
        return e.createImage = function (e) {
            return typeof t[e] != "undefined" ? t[e] : (t[e] = new Image, t[e].src = e, t[e])
        }, e.loadImage = function (e, n) {
            var r = e.length,
                i = 0;
            for (var s = r; s--;) {
                var o = e[s];
                t[o] = new Image, t[o].onload = function () {
                    i++, r == i && n && n()
                }, t[o].src = o
            }
        }, e
    }({});

    function t() {
        function t() {
            var e = R.createImage("img/bg.png"),
                // t = e.width,
                // n = e.height;
                t = gameWidth,
                n = gameHeight;
            s.drawImage(e, 0, 0, t, n)
        }

        function n() {
            count(),
            e("#start, ul.btn_wrap").hide(), b.init(), b.start()
        }
        t(), R.loadImage(h.gameImg, function () {
            e("#gamePanel").on("touchstart", function () {
                n(), n = function () {}
            })
        })
    }

    function n() {
        function n() {
            var t = e(window).width(),
                n = e(window).height();
            c = n < gameHeight ? n : gameHeight, l = t < gameWidth ? t : gameWidth, e(i).attr({
                height: gameHeight,
                width: gameWidth,
            })
        }
        R.loadImage(h.loadImg, t), n();
        var r = e(i).parent();
        e(window).on("resize", n)
        // gameWidth.on("resize", n)
    }
    var r = {},
        i = document.getElementById("stage"),
        s = i.getContext("2d"),
        o = document.getElementById("score"),
        // u = e(window).width(),
        // a = e(window).height(),
        u = gameWidth,
        a = gameHeight,
        f = "ontouchend" in document,
        l, c, h = {
            loadImg: ["img/bg.png", "img/start.png"],
            gameImg: ["img/ohNO.png", "img/mycar_act.png", "img/oil.png", "img/car_crash01.png", "img/heart_score.png", "img/btn_01.png", "img/btn_02.png", "img/btn_gift.png", "img/replay_01.png", "img/replay_02.png", "img/result_bg01.png", "img/result_bg02.png", "img/score_bg.png"]
        },
        d = function () {
            function e(e, t) {
                n.lastX = n.x, n.lastY = n.y, n.x = e - n.width / 2, n.y = t - n.height / 2, n.x = n.x > l - n.width ? l - n.width : n.x, n.x = n.x < 0 ? 0 : n.x, n.y = n.y > c - n.height ? c - n.height : n.y, n.y = n.y < 0 ? 0 : n.y
            }

            function t(e) {
                if (!n.status) return;
                s.drawImage(b.time % 20 > 15 ? n.model : n.model2, n.x, n.y, n.width, n.height)
            }
            var n = {};
            return n.init = function () {
                n.x, n.y, n.lastX, n.lastY, n.status = !0, n.model = R.createImage("img/mycar_act.png"), n.model2 = R.createImage("img/mycar.png"), n.width = l / 480 * n.model.width, n.height = n.width / n.model.width * n.model.height
            }, n.move = e, n.moving = t, n
        }(),
        v = function () {
            function e(e) {
                this.type = e, this.height = 0, this.width = 0, this.maxSpeed = 0, this.status = !0;
                switch (e) {
                    case 1:
                        this.score = 1, this.maxSpeed = 15;
                        break;
                    case 2:
                        this.score = 0, this.maxSpeed = 25;
                    case 3:
                        this.score = 0, this.maxSpeed = 25
                }
                var t = ["img/oil.png", "img/car_crash01.png", "img/car_crash02.png"];
                this.modelImg = t[this.type - 1], this.model = R.createImage(this.modelImg), this.width = l / 480 * this.model.width, this.height = this.width / this.model.width * this.model.height, this.x = Math.random() * (l - this.width), this.y = -this.height;
                var n = b.time / 800 > 100 ? 100 : b.time / 800;
                this.speed = Math.random() * (n - 1) + 5, this.speed = this.speed < .5 ? Math.random() * .5 + .5 : this.speed, this.speed = this.speed > this.maxSpeed ? this.maxSpeed : this.speed
            }

            function t(t) {
                return new e(t)
            }
            var n = {},
                r = n.planes = [],
                i = n.planesNum = 0;
            n.planes, e.prototype.show = function () {
                s.drawImage(this.model, this.x, this.y, this.width, this.height)
            }, e.prototype.die = function () {
                var e = this.type;
                b.score += this.score, this.status = !1
            };

            //設定場景出現的車 數量   
            var o = n.addSome = function () {
                if (b.time % 30 != 0) return;
                i == 16 && (i = 0), i++;
                switch (!0) {
                    case i % Math.floor(Math.random() * 5) == 0:
                        n.planes.push(t(3));
                        break;
                    case i % Math.floor(Math.random() * 3) == 0:
                        n.planes.push(t(2));
                        break;
                    default:
                        n.planes.push(t(1))
                }
            };
            return n.scrolling = function () {
                function e(e) {
                    var t = [e.x, e.y],
                        n = [e.x + e.width, e.y + e.height],
                        r = [d.x + 16, d.y + 10],
                        i = [d.x + d.width - 16, d.y + d.height - 26],
                        s = [Math.max(t[0], r[0]), Math.max(t[1], r[1])],
                        o = [Math.min(n[0], i[0]), Math.min(n[1], i[1])];
                    return s[0] < o[0] && s[1] < o[1] ? !0 : !1
                }
                o();
                var t = n.planes.length;
                for (var r = t; r--;) {
                    var i = n.planes[r];
                    if (i.y > c || i.status == 0) {
                        n.planes.splice(r, 1);
                        continue
                    }
                    i.show(), e(i) && (i.type == "1" ? m.showheart() : b.stop(), i.die()), i.y = i.y + i.speed
                }
            }, n
        }(),

        m = function () {

            var t = {};
            return t.format = function (e) {
                return function (t, n) {
                    // 分數顯示幾位數 
                    return n = n || 2, 0 >= (n -= t.toString().length) ? t : (e[n] || (e[n] = Array(n + 1).join(0))) + t
                }
            }([]), t.showheart = function () {
                // 吃到分數時的動態
                e("#score").removeClass("scale").addClass("scale"), setTimeout(function () {
                    e("#score").removeClass("scale")
                }, 200)
            }, t.show = function () {
                e(".score-wrap").show()
            }, t
        }(),
        g = function () {
            var t = e("#resultPanel"),
                n = function () {
                    var n = "click";
                    f && (n = "touchstart"), t.find(".replay").on(n, function () {
                        b.init(), b.start(), count()
                    })
                },
                r = {
                    show: function () {
                        t.show(), r.showScore()
                    },
                    hide: function () {
                        t.hide()
                    },
                    showScore: function () {
                        // 最後得分結果
                        var e = 1,
                            n = b.score;
                        // console.log('score',n);
                        $('.resultScore span').html(n);
                        myArray= new Array();
                        myArray = [
                            {
                                "gift": "阿一年菜禮盒<br>2件9折",
                                "link": "https://24h.pchome.com.tw/store/?fq=/A/118720"
                            },
                            {
                                "gift": "過年禮盒<br>結帳88折",
                                "link": "https://24h.pchome.com.tw/store/?fq=/A/117434"
                            },
                            {
                                "gift": "過年食用油禮盒<br>75折up",
                                "link": "https://24h.pchome.com.tw/store/DBBR0J"
                            },
                        ];
                        //抽簽
                        function getRandom (min, max) { 
                            return Math.floor(Math.random() * (max - min)) + min; 
                        } 
                        getNum = getRandom(0,3);
                        console.log('getNum',getNum);
                        if (n == 0) {
                            $('.tips').html('真遺憾...<br>你的行車技術<br>要再加油!');
                        } else if (n >= 1) {
                            $('ul.btn_wrap').addClass('show');
                            $('#resultPanel').addClass('winner');
                            $('.tips').html('車神無誤!');
                            $('.tips_win').html('恭喜獲得');
                            $('.gift_text').html(myArray[getNum]['gift']);
                            $('.gift_btn').html('<a href="' +  myArray[getNum]['link'] + '"><img src="img/btn_gift.png"></a>');
                            $('.game_result .btn').attr('href', myArray[getNum]['link']);
                        }
            
                    }
                };
            return n(), r
        }();

    var b = new Best.Game({
            FPS: 60,
            score: 0,
            time: 0,
            bgImg: R.createImage("img/bg.png"),
            bgScrollTime: 0,
            initGraphicContext: function () {
                this.canvas = document.getElementById("stage"), this.context = this.canvas.getContext("2d")
            },
            onInit: function () {
                d.init()
            },
            onStart: function () {

                this.scene = this.getScene(0), this.scene.init(this), this.scene.enter()
            },
            getScene: function (e) {
                var t = w[e];
                return t
            },
            bgScroll: function () {
                // var e = this.bgImg.height,
                //     t = this.bgImg.width;
                var e = gameHeight,
                    t = gameWidth;
                this.bgScrollTime += 12 + ((this.time + this.time * .9) / 1e3 > 20 ? 20 : (this.time + this.time * .9) / 1e3), this.bgScrollTime > e && (this.bgScrollTime = 0), s.drawImage(this.bgImg, 0, this.bgScrollTime - e, t, e), s.drawImage(this.bgImg, 0, this.bgScrollTime, t, e)
            },
            onStop: function () {
                clearInterval(myTimer);
                e("#gameoverPanel").show(), setTimeout(function () {
                    g.show(), e("#gameoverPanel").hide()
                }, 1e3)
            }
        }),
        w = {};
    (function () {
        var t = new Best.Scene({
            id: 0,
            init: function (t) {
                this.game = t, e(i).addClass("playing"), m.show(), this.initEvent()
            },
            initEvent: function () {
                this.clear(), d.move(e(i).width() / 2, e(i).height()), i = e(i);
                if (f) {
                    var t = function (e) {
                        e.preventDefault();
                        var t = e.targetTouches[0],
                            n = t.pageX - i.offset().left,
                            r = t.pageY - i.offset().top;
                        d.move(n, r)
                    };
                    i.get(0).removeEventListener("touchmove", t), i.get(0).addEventListener("touchmove", t, !1)
                } else i.off("mousemove").on("mousemove", function (e) {
                    var t = e.clientX - i.offset().left,
                        n = e.clientY - i.offset().top;
                    d.move(t, n)
                })
            },
            clear: function () {
                // 清除資料
                $('.tips_win, .gift_text, .gift_btn').empty();
                // $('#countdown').html(10);
                $('ul.btn_wrap').removeClass('show');
                $('#resultPanel').removeClass('winner');

                this.game.time = 0, this.game.score = 0, this.game.bgScrollTime = 0, d.status = !0, v.planes = [], v.planesNum = 0, o.innerHTML = m.format(this.game.score), g.hide()
            },
            enter: function () {},
            update: function () {
                this.game.time++, this.game.bgScroll(), v.scrolling(), d.moving(this.game.time), o.innerHTML = m.format(this.game.score)
            },
            handleInput: function () {},
            render: function () {},
            
        });
        w[t.id] = t


    })(), n()

    // 禁用雙指縮放
    document.documentElement.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, false);

    // 禁用手指雙擊縮放
    var lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', function (event) {
        var now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    document.body.addEventListener('touchmove', function (e) {
      e.preventDefault(); //阻止默認的處理方式(阻止下拉滑動的效果)
    }, {passive: false}); //passive 參數不能省略，用來兼容ios和android



})(jQuery);