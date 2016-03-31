$(document).ready(function() {
    var hideButton = document.getElementById("hideButton");
	var showButton = document.getElementById("showButton");

    hideButton.onclick = function()
    { 
        var allImages = { left:"leftimage", center:"centerimage", right:"rightimage"};

        if (document.getElementById("leftimage").style.visibility == 'visible')
        {
            for ( var image in allImages)
            {
                document.getElementById(allImages[image]).style.visibility = 'hidden'; 
            }
        }
    };

    showButton.onclick = function()
    { 
        var allImages = { left:"leftimage", center:"centerimage", right:"rightimage"};

        if (document.getElementById("leftimage").style.visibility == 'hidden')
        {
            for ( var image in allImages)
            {
                document.getElementById(allImages[image]).style.visibility = 'visible'; 
            }
        }
    };
});