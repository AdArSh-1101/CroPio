const cropRotationPatterns = {
    corn: {
        sandy: {
            spring: 'Soybeans',
            summer: 'Wheat',
            fall: 'Winter Wheat'
        },
        loamy: {
            spring: 'Soybeans',
            summer: 'Wheat',
            fall: 'Winter Wheat'
        },
        clay: {
            spring: 'Soybeans',
            summer: 'Wheat',
            fall: 'Winter Wheat'
        }
    },
    wheat: {
        sandy: {
            spring: 'Corn',
            summer: 'Soybeans',
            fall: 'Winter Wheat'
        },
        loamy: {
            spring: 'Corn',
            summer: 'Soybeans',
            fall: 'Winter Wheat'
        },
        clay: {
            spring: 'Corn',
            summer: 'Soybeans',
            fall: 'Winter Wheat'
        }
    },
    soybeans: {
        sandy: {
            spring: 'Wheat',
            summer: 'Corn',
            fall: 'Winter Wheat'
        },
        loamy: {
            spring: 'Wheat',
            summer: 'Corn',
            fall: 'Winter Wheat'
        },
        clay: {
            spring: 'Wheat',
            summer: 'Corn',
            fall: 'Winter Wheat'
        }
    }
};

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentCrop = document.getElementById('current-crop').value;
    const soilType = document.getElementById('soil-type').value;
    const season = document.getElementById('season').value;

    const recommendedCrop = cropRotationPatterns[currentCrop][soilType][season];
    
    window.location.href = `${recommendedCrop}.html`;
}); 

var points = [
    "Find the best crops to plant based on your current crops and topography.",
    "Consider the current crops on your land when selecting new crops to plant.",
    "Research local climate patterns and conduct soil tests to make informed decisions.",
    "Consult with agricultural experts or local farmers for valuable insights and recommendations."
  ];
  var i = 0;
  var j = 0;
  function typing() {
    var text = points[j];
    if (i < text.length) {
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 30);
    } else {
      setTimeout(erase, 2000);
    }
  }
  function erase() {
    if (i > 0) {
      var text = points[j];
      document.getElementById("text").innerHTML = text.substring(0, i - 1);
      i--;
      setTimeout(erase, 1);
    } else {
      j++;
      if (j >= points.length) {
        j = 0;
      }
      setTimeout(typing, 1000);
    }
}
typing();
