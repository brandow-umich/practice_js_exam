window.addEventListener("load", function () {
    console.log('Caption from figure 2');
    this.alert(document.querySelectorAll('figcaption')[1].innerHTML);
});

/*
    Part 1:
    1) Listen to the window
    2) Grab all the figcaptions using SelectAll..
    3) Grab just the 2nd one using [] ... [1]
    4) Find the right attribute... innerHTML

    Part 2:
    1) When the mouse goes over an image three things should happen:
        a) The background image of the display should change to the same
        image being hovered over.
        b) The text in the display should show the alt attribute of the image
        c) The image should no longer be visible - but it should still take up the same space
 */

images = document.querySelectorAll('.thumbnail');
for (let i = 0; i < images.length; i++) {
    // For hover
    images[i].addEventListener('mouseenter', function () {
        document.querySelector('#display').style.backgroundImage = 'url(' + images[i].src + ')';
        document.querySelector('#display').innerHTML = images[i].alt;
    });
    images[i].addEventListener('mouseleave', function () {
        document.querySelector('#display').style.backgroundImage = '';
        document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
        images[i].style.visibility = 'visible';
    });
    // if image doesn't have tab index, add it
    if (!images[i].hasAttribute('tabindex')) {
        images[i].setAttribute('tabindex', '0');
    }
    // for tab navigation
    images[i].addEventListener('focus', function () {
        document.querySelector('#display').style.backgroundImage = 'url(' + images[i].src + ')';
        document.querySelector('#display').innerHTML = images[i].alt;
    });
    images[i].addEventListener('focusout', function () {
        document.querySelector('#display').style.backgroundImage = '';
        document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
        images[i].style.visibility = 'visible';
    });
}




