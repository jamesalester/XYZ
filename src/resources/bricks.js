import brooklandsImage from '../assets/portfolio/brooklands/brooklands_hero.png';
import cadImage from '../assets/portfolio/cad/cad_hero.jpg';
import practicalImage from '../assets/portfolio/practical/practical_hero.jpg';
import sfereImage from '../assets/portfolio/sfere/sfere-hero.jpg';
import sketchesImage from '../assets/portfolio/sketches/sketches_hero.jpg';

// Widths: [>1000px, <1000px, <750px, <600px]

export const developmentBricks = {

  /*------*/

  'pnt' : {
    title: 'Paranormal Today Series',
    description: 'A Series of apps...',
    widths: ['100%','100%','100%','100%']
  },

  /*------*/

  'push' : {
    title: 'Push',
    description: 'An app that...',
    widths: ['60%','60%','50%','100%']
  },

  'integral' : {
    title: 'Integral Theory',
    description: 'A website explaining...',
    widths: ['40%','40%','50%','100%']
  },

  /*------*/

  'brooklands' : {
    title: 'Brooklands Motorworks',
    description: 'A website for...',
    widths: ['40%','40%','50%','100%'],
    image: brooklandsImage
  },

  'andy-hillier' : {
    title: 'Andy Hillier Personal Trainer',
    description: 'A website for...',
    widths: ['60%','60%','50%','100%']
  },

  /*------*/

}

export const productDesignBricks = {

    /*------*/

    'sfere' : {
      title: 'SFere',
      description: 'An iron for arthritics...',
      widths: ['50%','100%','100%','100%'],
      height: '600px',
      image: sfereImage
    },

    /*------*/

    'bigBrick' : {

      widths: ['50%','100%','100%','100%'],
      height: '600px',

      innerBricks: {

        'cad' : {
          title: 'CAD',
          description: 'A collection of Computer Aided Designs...',
          widths: ['100%','100%','100%','100%'],
          image: cadImage
        },

        'sketching' : {
          title: 'Sketching',
          description: 'A series of sketches...',
          widths: ['50%','50%','50%','100%'],
          image: sketchesImage
        },

        'practical' : {
          title: 'Practical',
          description: 'A series of practical projects...',
          widths: ['50%','50%','50%','100%'],
          image: practicalImage
        }

      }



    }


}
