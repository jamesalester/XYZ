import sfereImage from '../assets/portfolio/sfere/sfere-hero.jpg';

export const developmentBricks = {

  /*------*/

  'pnt' : {
    title: 'Paranormal Today Series',
    description: 'A Series of apps...',
    width: '98%'
  },

  /*------*/

  'push' : {
    title: 'Push',
    description: 'An app that...',
    width: '59%'
  },

  'integral' : {
    title: 'Integral Theory',
    description: 'A website explaining...',
    width: '39%'
  },

  /*------*/

  'brooklands' : {
    title: 'Brooklands Motorworks',
    description: 'A website for...',
    width: '39%'
  },

  'andy-hillier' : {
    title: 'Andy Hillier Personal Trainer',
    description: 'A website for...',
    width: '59%'
  },

  /*------*/

}

export const productDesignBricks = {

    /*------*/

    'sfere' : {
      title: 'SFere',
      description: 'An iron for arthritics...',
      width: '49%',
      height: '600px',
      image: sfereImage
    },

    /*------*/

    'bigBrick' : {

      width: '49%',
      height: '600px',

      innerBricks: {

        'cad' : {
          title: 'CAD',
          description: 'A collection of Computer Aided Designs...',
          width: '99%'
        },

        'sketching' : {
          title: 'Sketching',
          description: 'A series of sketches...',
          width: '49%'
        },

        'practical' : {
          title: 'Practical',
          description: 'A series of practical projects...',
          width: '49%'
        }

      }



    }


}
