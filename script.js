const narutoCharacters = [
    {
        name: 'Naruto Uzumaki',
        bio: 'Naruto Uzumaki is a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.',
        image: 'Images/naruto_image.jpg', 
    },
    {
        name: 'Sasuke Uchiha',
        bio: 'Sasuke Uchiha is a skilled ninja with a complex history. He seeks power to avenge his clan and has a complicated relationship with Naruto.',
        image: 'Images/sasuke.jpg', 
    },
    {
        name: 'Sakura Haruno',
        bio: 'Sakura Haruno is a ninja with a strong will and a talent for medical jutsu. She is a key member of Team 7 alongside Naruto and Sasuke.',
        image: 'Images/sakura.jpg', 
    },
    // Add more Naruto characters as needed
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
        window.location.href = 'https://www.netflix.com/title/70205012';
    });

    const narutopediaLink = document.getElementById('narutopediaLink');
    narutopediaLink.addEventListener('click', function () {
        window.location.href = 'https://naruto.fandom.com/wiki/Narutopedia';
    });

    // Image Hover Effect
    const originalImagePath = 'placeholder.jpg'; // Set the path to your original image
    const hoverImagePath = 'hover_image.jpg'; // Set the path to your hover image

    hoverImage.src = originalImagePath;

    hoverImage.addEventListener('mouseover', function () {
        hoverImage.src = hoverImagePath;
    });

    hoverImage.addEventListener('mouseout', function () {
        hoverImage.src = originalImagePath;
    });
});
