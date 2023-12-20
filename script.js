const narutoCharacters = [
    {
        name: 'Naruto Uzumaki',
        bio: 'Naruto Uzumaki is a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
        image: 'Images/naruto.jpg', 
        // Image ref: https://www.pinterest.com/pin/uzumaki-naruto-photo-naruto-uzumaki--536843218051845379/
    },
    {
        name: 'Sasuke Uchiha',
        bio: 'Sasuke Uchiha is a skilled ninja with a complex history. He seeks power to avenge his clan and has a complicated relationship with Naruto.',
        image: 'Images/sasuke.jpg', 
        // Image ref: https://www.pinterest.com/pin/10203536641697354/
    },
    {
        name: 'Sakura Haruno',
        bio: 'Sakura Haruno is a ninja with a strong will and a talent for medical jutsu. She is a key member of Team 7 alongside Naruto and Sasuke.',
        image: 'Images/sakura.jpg', 
        // Image ref: https://www.pinterest.com/pin/324962929340171726/
    },
];

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuLinks = document.querySelector('.menuLinks');
    const playButton = document.getElementById('playButton');
    const characterImage = document.getElementById('characterImage');
    const characterBio = document.getElementById('characterBio');
    const hoverImage = document.getElementById('hoverImage');
    const ratingInput = document.getElementById('ratingInput');
    const favoriteCharacterInput = document.getElementById('favoriteCharacter');
    const displayFavoriteCharacterButton = document.getElementById('displayFavoriteCharacter');
    const displayedText = document.getElementById('displayedText');

    displayFavoriteCharacterButton.addEventListener('click', function () {
        const enteredText = favoriteCharacterInput.value;
        displayEnteredText(enteredText);
    });

   function displayEnteredText(text) {
    displayedText.innerHTML = `<span>You entered:</span><br>${text}`;
	}

    ratingInput.addEventListener('input', function () {
        const rating = parseInt(ratingInput.value);
        handleRatingResponse(rating);
    });

    function handleRatingResponse(rating) {
        const responseContainer = document.getElementById('webScore');
        const responseText = document.createElement('p');
        responseContainer.innerHTML = '';

        switch (rating) {
            case 1:
                responseText.textContent = '1/5. What.';
                break;
            case 2:
                responseText.textContent = '2/5. Mid.';
                break;
            case 3:
                responseText.textContent = '3/5. Quite nice!';
                break;
            case 4:
                responseText.textContent = '4/5. Fun!';
                break;
            case 5:
                responseText.textContent = '5/5! Awesome!';
                break;
        }

        responseContainer.appendChild(responseText);
    }

	// Show/hide menuLinks when the mouse is over the button
	menuButton.addEventListener('mouseenter', function () {
    menuLinks.style.display = 'block';
	});

	menuButton.addEventListener('mouseleave', function () {
    hideMenuIfNotHovered();
	});

	// Toggle menuLinks on button click
	menuButton.addEventListener('click', function () {
    toggleMenuVisibility();
	});

	// Hide menuLinks when the mouse leaves the links
	menuLinks.addEventListener('mouseleave', function () {
    hideMenuIfNotHovered();
	});

	function hideMenuIfNotHovered() {
    if (!menuButton.matches(':hover') && !menuLinks.matches(':hover')) {
        menuLinks.style.display = 'none';
		}
	}

	function toggleMenuVisibility() {
    menuLinks.style.display = (menuLinks.style.display === 'block') ? 'none' : 'block';
	}
	
	// Image Ref: https://co.pinterest.com/pin/480055641537997860/
	const placeholderImageSrc = 'Images/narutoteam.jpg';

	// Function to set the character image with the provided source
	function setCharacterImage(src) {
    characterImage.src = src;
	}

	// Set placeholder image initially
	setCharacterImage(placeholderImageSrc);

    // Event listener for playButton click
    playButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * narutoCharacters.length);
        const selectedCharacter = narutoCharacters[randomIndex];
		
		characterName = selectedCharacter.name; // Store the character name
        setCharacterImage(selectedCharacter.image);
        characterBio.innerHTML = `<span class="character-name">${selectedCharacter.name}: </span><span class="character-bio">${selectedCharacter.bio}</span>`;
    });

    // Navigation Links
    const narutoLink = document.getElementById('narutoLink');
    narutoLink.addEventListener('click', function () {
        window.location.href = 'https://www.crunchyroll.com/series/GY9PJ5KWR/naruto';
    });

    const narutopediaLink = document.getElementById('narutopediaLink');
    narutopediaLink.addEventListener('click', function () {
        window.location.href = 'https://naruto.fandom.com/wiki/Narutopedia';
    });

    // Image Hover Effect
	hoverImage.addEventListener('mouseout', function () {
		hoverImage.style.transform = 'scale(1)';
	});
});
