const splide = new Splide( '.splide', {
    type       : 'loop',
    height     : 'auto',
    perPage    : 2,
    perMove    : 4,
    arrows     : false,
    breakpoints : {
      900 : {
        perPage : 1
      }
    },
    grid       : {
      // You can define rows/cols instead of dimensions.
      gap: {
        row: '10px',
        col: '6px',
      },
    }
  } );
  splide.mount( window.splide.Extensions);




// var splide02 = new Splide( '#splide', {
//   perPage: 3,
//   rewind : true,
// } );

// splide.mount();