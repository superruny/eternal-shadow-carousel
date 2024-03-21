# Eternal Shadow Carousel

Eternal Shadow Carousel is a React component for creating image carousels with a unique eternal shadow effect.

## Installation

You can install the Eternal Shadow Carousel package via npm:

```bash
npm install eternal-shadow-carousel
```

## Usage

To use the Eternal Shadow Carousel component in your React application, import it and pass an array of image URLs as props.

```javascript
import React from 'react';
import EternalShadowCarousel from 'eternal-shadow-carousel';
import 'eternal-shadow-carousel/dist/index.css'; // Import the component's CSS

function App() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image URLs
  return (
    <div>
      <h1>My Eternal Shadow Carousel</h1>
      <EternalShadowCarousel images={images} />
    </div>
  );
}

export default App;
```

### Props

- `images` (required): An array of image URLs to be displayed in the carousel.
- `interval` (optional): Interval between slides in milliseconds (default is 5000).
- `autoPlay` (optional): Whether to automatically play the carousel (default is true).

## Example

Here's a more advanced example demonstrating how to use the Eternal Shadow Carousel component with custom interval and autoplay settings:

```javascript
import React from 'react';
import EternalShadowCarousel from 'eternal-shadow-carousel';
import 'eternal-shadow-carousel/dist/index.css'; // Import the component's CSS

function App() {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image URLs
  return (
    <div>
      <h1>My Advanced Eternal Shadow Carousel</h1>
      <EternalShadowCarousel
        images={images}
        interval={3000} // Change interval to 3 seconds
        autoPlay={false} // Disable autoplay
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
