$(document).ready(function() {
    $('#start').click(function() {
        let width = parseInt($('#width').val());
        let growthAmount = parseInt($('#growth-amount').val());
        let interval = parseInt($('#interval').val());
        let numberCircles = parseInt($('#number-circles').val());
        
        let container = $('#circle-container');
        container.empty(); // Clear any existing circles
        
        for (let i = 0; i < numberCircles; i++) {
            let color = getRandomColor();
            let circle = $('<div>', {
                class: 'circle',
                css: {
                    width: width,
                    height: width,
                    top: getRandomCentralPosition(container.height(), width),
                    left: getRandomCentralPosition(container.width(), width),
                    backgroundColor: color
                }
            });

            container.append(circle);
            growCircle(circle, width, growthAmount, interval);
        }
        
        container.on('click', '.circle', function() {
            $(this).remove();
        });
    });

    function growCircle(circle, initialWidth, growthAmount, interval) {
        setInterval(function() {
            let newWidth = circle.width() + growthAmount;
            circle.css({
                width: newWidth,
                height: newWidth
            });
        }, interval);
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomCentralPosition(containerSize, elementSize) {
        let centralStart = containerSize / 3;
        let centralEnd = 2 * containerSize / 3 - elementSize;
        return Math.random() * (centralEnd - centralStart) + centralStart;
    }

    $('#circle-container').on('mousemove', '.circle', function() {
        $(this).css('opacity', 0.5);
    });

    $('#circle-container').on('mouseleave', '.circle', function() {
        $(this).css('opacity', 1);
    });
});
