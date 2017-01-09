// TODO: test for clip-path support
// deliver svg illustrations instead? or png

var mountainData = mountainData || {};

// mountaindrawn
$(function() {
    var dataMountain = document.body.dataset.mountain,
        navLeft = document.querySelector('.nav-left'),
        navRight = document.querySelector('.nav-right'),
        swipeElement = document.querySelector('.container'),
        mtnShortcuts = document.querySelectorAll('.earth-mtn'),
        touch = new Hammer(swipeElement),
        supportsClipPath = false,
        mountainList = Object.keys(mountainData),
        length = mountainList.length,
        nLength = length - 1, // normalized length
        route = {},
        currentMountain, newMountain;

    // events
    if (navLeft && navRight) {
        navLeft.addEventListener('click', navigateLeft);
        navRight.addEventListener('click', navigateRight);
    }

    window.addEventListener('resize', sizeshards);
    // delay image download
    window.addEventListener('load', getFlickrImages(dataMountain));

    // keyboard navigation
    document.onkeydown = checkKey;
    // allow lightbox to launch
    $('.photos').on('click', 'a', function(e) {
        e.preventDefault();
    });

    // listen to swipe events...
    // TODO: fix swipe events
    touch.on('swipeleft', function(e) {
        console.log('swipeleft');
        navigateLeft(e);
    });

    touch.on('swipeRight', function(e) {
        console.log('swipeRight');
        navigateRight(e);
    });

    function initialize() {
        // populate the first mountain
        setData(dataMountain);
        routes();
        // earthSequence();
        sizeshards();
        // lightbox options
        lightbox.option({
            'resizeDuration': 250,
            'wrapAround': true
        });
        // test for clip-path support
        if (areClipPathShapesSupported()) {
            supportsClipPath = true;
            document.body.classList.remove('no-clip-path');
            document.body.classList.add('supports-clip-path');
            setMtnClickEvents();
        }
    }

    function navigateRight(e) {
        e.preventDefault();
        currentMountain = mountainList.indexOf($('body').attr('data-mountain'));
        // start at beginning again if at end
        newMountain = (currentMountain === nLength) ? 0 : (currentMountain + 1);
        // change mountain
        navigate(newMountain);
    }

    function navigateLeft(e) {
        e.preventDefault();
        currentMountain = mountainList.indexOf($('body').attr('data-mountain'));
        // start at end again if at beginning
        newMountain = (currentMountain === 0) ? nLength : (currentMountain - 1);
        // change mountain
        navigate(newMountain);
    }

    function navigate(newMountain) {
        document.body.dataset.mountain = mountainList[newMountain];
        setData(mountainList[newMountain]);
        Router.navigate('#/' + mountainList[newMountain]);
        getFlickrImages(mountainList[newMountain]);
    }

    function setData(newMountain) {
        // console.log('setData: ' + newMountain);
        var newMountainData = mountainData[newMountain],
            title = document.querySelector('.title'),
            data = document.querySelector('.data'),
            template = '<h2 class="data-title"><%this.title%></h2>' +
            '<p class="data-elevation">elevation <b><%this.elevation%></b></p>' +
            '<p class="data-prominence">prominence <%this.prominence%></p>' +
            '<p class="data-description"><%this.description%></p>';

        // set title
        if (title) {
            title.innerHTML = TemplateEngine('<%this.title%>', newMountainData);
            // set data
            data.innerHTML = TemplateEngine(template, newMountainData);
            data.classList.remove('transparent');
        }
    }

    function sizeshards() {
        // NOTE: maintain aspect ration of 5:3
        // calc height & width
        // height = new width * (original height / original width)
        // i.e. (600 / 1000) x 500 = 300
        // width = new height * (original width / original height)
        var width = document.body.offsetWidth,
            height = document.body.offsetHeight,
            maxHeight = document.querySelector('.container').offsetHeight - 50,
            mountains = document.querySelector('.mountains'),
            w = width,
            h = Math.round(.60 * w),
            ratio = (w / h); // 5:3

        if (h > maxHeight) {
            // console.log('maxed');
            w = maxHeight * ratio;
            h = maxHeight;
        }

        mountains.style.width = w + 'px';
        mountains.style.height = h + 'px';
    }

    // earth sequence
    function earthSequence() {
        console.log('earthSequence');
        // TODO: use svg instead... for click event
        var container = document.getElementById('mountains'),
            renderer = new FSS.CanvasRenderer(),
            scene = new FSS.Scene(),
            light = new FSS.Light('#001888', '#00ffc3'),
            geometry = new FSS.Plane(container.offsetWidth, container.offsetHeight, 12, 12),
            material = new FSS.Material('#555555', '#FFFFFF'),
            mesh = new FSS.Mesh(geometry, material),
            now, start = Date.now();

        function initialise() {
            scene.add(mesh);
            scene.add(light);

            container.appendChild(renderer.element);

            window.addEventListener('resize', resizeCanvas);
        }

        function resizeCanvas() {
            var width = container.offsetWidth, // No need to query these twice, when in an onresize they can be expensive
                height = container.offsetHeight;

            renderer.setSize(width, height);

            scene.remove(mesh); // Remove the mesh and clear the canvas
            renderer.clear();

            geometry = new FSS.Plane(width, height, 12, 12); // Recreate the plane and then mesh
            mesh = new FSS.Mesh(geometry, material);

            scene.add(mesh); // Readd the mesh
        }

        function animate() {
            now = Date.now() - start;

            light.setPosition(300 * Math.sin(now * 0.001), 200 * Math.cos(now * 0.0005), 60);

            renderer.render(scene);
            requestAnimationFrame(animate);
        }

        initialise();
        resizeCanvas();
        animate();
    }

    // click mtn shortcut
    function setMtnClickEvents(e) {
        for (var i = 0; i < mtnShortcuts.length; i++) {
          mtnShortcuts[i].addEventListener('click', clickMtnShortcut);
        }
    }

    function clickMtnShortcut(e) {
        console.log(e.target);
    }

    // flicker tag: classname + '-site'
    // i.e bugaboo-site
    function getFlickrImages(mountain) {
        // create document fragment to add all at once
        var apiKey = '6c6069e831fb567b86c7d9b75c82624f',
            baseURL = 'https://api.flickr.com/services/rest/?&method=flickr.photos.search',
            docFrag = document.createDocumentFragment(),
            images = document.querySelector('.photos'),
            flickrTag = mountain + '-site';

        // get the new ones
        $.getJSON(baseURL +
                '&api_key=' + apiKey +
                '&tags=' + flickrTag +
                '&per_page=' + 6 +
                '&tag_mode=' + 'all' +
                '&sort=' + 'interestingness-asc' +
                '&format=' + 'json' +
                '&jsoncallback=' + '?',
                function(data) {})
            .done(function(data) {
                //loop through the results with the following function
                $.each(data.photos.photo, function(i, item) {

                    var photoURL = '//farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret,
                        square = photoURL + '_q.jpg', // q = 150sq
                        photoLarge = photoURL + '_b.jpg', // b = 1024 on longest side,
                        // set the photo href for larger views
                        photoHref = '//www.flickr.com/photos/' + item.owner + '/' + item.id,
                        photo = '<img src="' + square + '" />';
                    // add photo to the docFrag
                    $("<a/>").attr('href', photoLarge)
                        .attr('rel', 'prefetch')
                        .attr('data-photohref', photoHref)
                        .attr('data-lightbox', 'mountaindrawn')
                        .appendTo(docFrag).append(photo);

                }); // END $.each

                // append once
                // TODO: why does this insert [object DocumentFragment]
                //flowApp.config.images.innerHTML = docFrag;
                $(images).html(docFrag);

            })
            .fail(function(msg) {
                // TODO: load something else?
                console.log(msg);
            });
    } // END getFlickrImages

    function checkKey(e) {
        if (e.keyCode == '37') {
            // left arrow
            navigateLeft(e);
        } else if (e.keyCode == '39') {
            // right arrow
            navigateRight(e);
        }
    }

    function routes() {
        // change mountain
        var mainRoute = {
            path: '#/:name',
            before: function() {
                // if currentMountain is not === name then set dataMountain
                if (document.body.dataset.mountain !== this.params.name) {
                    navigate(mountainList.indexOf(this.params.name));
                }
                // if (document.body.dataset.mountain === 'earth') {
                //     earthSequence();
                // }
                this.task.done();
            },
            on: function() {
                // check if name is list and redirect if undefined
                if (mountainList.indexOf(this.params.name) === -1) {
                    navigate(1);
                }
            }
        };

        var onRouteNotFound =  function(route) {
            // suppress notfound error
        }

        Router.add(mainRoute);
        Router.init(null, onRouteNotFound);
    }

    initialize();
});
