// Get the button and the download link element
const downloadButton = document.getElementById('downloadButton');
const downloadLink = document.getElementById('downloadLink');

// Add click event listener to the button
downloadButton.addEventListener('click', function() {
    // Direct link to the image file
    const imageUrl = 'https://lh3.googleusercontent.com/pw/ADCreHcgQA0u3NqtAl_ce2bkqO5JSPjLG_NDWrlKf29G78octzshUGuSESSJu1Bu1YrCQfSbTRYs-4GDVnjNz1w5nbA0Q4VYjcIsxe8V09r7gjz8iDzBNIYGjHaEvD__On0vGZc4YQxNZie6ZbmoJxQnPoyzVMMBoW73GwDMXi1_BvdSYxF6LUG3FClLlt8SHqmxu_P2uSMiA5XpGnNWKWWyb3rjGmjUXXIH9j3zzdXBdBnFoHGqtivAOs-10SAD0Cf3R1Y6yagBTNtIMvmRgSww6R5A4iAzzZ1Z8-PfuguiPB2WddeGjXpNdxPZvFoV8BdtUjunriE0rW8euRmrZ8IJCupHTkuPz4bQvhYMNl_vAw4ByZm-jiKSp4K3P0UBsqhsd-YE5R9O49KtSSTOk8lRJ56owNu5rLcu-ftkUQ4f8ZTJp7nj04He8sBEQfQo4n88ljW0O-vfkG053_ywU3G848ZXxcnsErOzGTbnkxYw8BsJSEsXLfMrf0OfX8vyu00h9nyG-ScnWxikiZnXCzGd6WcrPIXd_j3KjkqEihZ-ktmkpM-SxqnKkZk3nv2wIJsVRuocAOu5ut-NgVRNrfm13jv9TpxG-yb13LH70nmAUFrz_Yfvw7BG1eBs78_r3ipmDvVVlB_E4wXtYhSuKtwyuycbVZ1B-xi7U6SUg8JX09oPlKEmTPHy3gxv9SmEFzlZV7fNDPuBjuXpOssLusOYVNhzRWfJo7_TOmdzqdeRg91llas0DroxinWvhdtutF9LgJQOEx9wCNeQFFk8bQvB7833ef9ilhdFqfXE6vYIDcKyJ5ZudkMHttgFJ2ib8R9qJnJveIHTAysbGcRbg_HxlGOf6qzkXzfWzqkChhXLq_9tvUBToqRS8xODKPcT_EHLmKrsQyF0QwuJedTHBLudmZeL-HPA2uOOcBr-DMNcLZdTy4MQJUwu5xG58xLTFCnxoxU-A3t3KiPD-q6FyDhR00NTPxbyAHU=w955-h955-s-no?authuser=0';

    // Set the href attribute of the download link to the image URL
    downloadLink.href = imageUrl;

    // Set a different filename for the downloaded file (optional)
    downloadLink.download = 'download.jpg';

    // Trigger a click event on the download link
    downloadLink.click();
});
