autoSlider();

function autoSlider(timer)
{
    timer = setInterval(sliderLeft, 1000)
}

function sliderLeft (line, left)
{
    line = document.getElementById('line');
    left = left - 128;

    if (left == -512)
    {
        left = 0;
    }
    line.style.left = left +'px';
}
