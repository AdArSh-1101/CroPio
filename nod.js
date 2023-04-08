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
const recommendedCropEl = document.querySelector('.crop-list');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const currentCrop = document.getElementById('current-crop').value;
    const soilType = document.getElementById('soil-type').value;
    const season = document.getElementById('season').value;

    const recommendedCrop = cropRotationPatterns[currentCrop][soilType][season];

    recommendedCropEl.innerHTML = `<li>${recommendedCrop}</li>`;
});
