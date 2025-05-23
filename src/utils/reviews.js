    const placeId = '6431884795903318327'; // You can get it from Google Maps Place ID Finder
    const apiKey = 'AIzaSyDdcGgOBn7h5FKYuXPfFrZzIpnDgXZHVMs';

    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const reviewsDiv = document.getElementById('reviews');
        const reviews = data.result.reviews;
        console.log(reviews);
        if (reviews && reviews.length > 0) {
          reviewsDiv.innerHTML = reviews.map(review => `
            <div style="border-bottom: 1px solid #ccc; padding: 10px;">
              <strong>${review.author_name}</strong> (${review.rating}★)<br>
              ${review.text}
            </div>
          `).join('');
        } else {
          reviewsDiv.innerHTML = 'No reviews found.';
        }
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
