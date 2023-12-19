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
    const playButton = document.getElementById('playButton');
    const characterImage = document.getElementById('characterImage');
    const characterBio = document.getElementById('characterBio');
    const hoverImage = document.getElementById('hoverImage');

    playButton.addEventListener('click', function () {
        const randomIndex = Math.floor(Math.random() * narutoCharacters.length);
        const selectedCharacter = narutoCharacters[randomIndex];

        characterImage.src = selectedCharacter.image;
        characterBio.textContent = `${selectedCharacter.name}: ${selectedCharacter.bio}`;
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
    const originalImagePath = 'placeholder.jpg';
    const hoverImagePath = 'hover_image.jpg'; 

    hoverImage.src = originalImagePath;

    hoverImage.addEventListener('mouseover', function () {
        hoverImage.src = hoverImagePath;
    });

    hoverImage.addEventListener('mouseout', function () {
        hoverImage.src = originalImagePath;
    });
});
