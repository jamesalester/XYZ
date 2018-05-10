import andyhillerImage from '../assets/portfolio/andyhillier/andyhillier_hero.jpg';
import brooklandsImage from '../assets/portfolio/brooklands/brooklands_hero.png';
import cadImage from '../assets/portfolio/cad/cad_hero.jpg';
import integralImage from '../assets/portfolio/integral/integral_hero.jpg';
import pntImage from '../assets/portfolio/pnt/pnt_hero.jpg';
import practicalImage from '../assets/portfolio/practical/practical_hero.jpg';
import pushImage from '../assets/portfolio/push/push_hero.jpg';
import sfereImage from '../assets/portfolio/sfere/sfere-hero.jpg';
import sketchesImage from '../assets/portfolio/sketches/sketches_hero.jpg';
import snakesImage from '../assets/portfolio/snakes/snakes_hero.jpg';

// Widths: [>1000px, <1000px, <750px, <600px]

export const developmentBricks = {

  /*------*/

  'pnt' : {
    title: 'Paranormal Today Series',
    description: 'A Series of apps...',
    widths: ['100%','100%','100%','100%'],
    image: pntImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['left', 'center']
    }
  },

  /*------*/

  'push' : {
    title: 'Push',
    description: 'An app that...',
    widths: ['60%','50%','100%','100%'],
    image: pushImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['right', 'right']
    }
  },

  'integral' : {
    title: 'Integral Theory',
    description: 'A website explaining...',
    widths: ['40%','50%','100%','100%'],
    image: integralImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['left', 'left']
    }
  },

  /*------*/

  'brooklands' : {
    title: 'Brooklands Motorworks',
    description: 'A website for...',
    widths: ['40%','50%','100%','100%'],
    image: brooklandsImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['left', 'left']
    }
  },

  'andy-hillier' : {
    title: 'Andy Hillier Personal Trainer',
    description: 'A website for...',
    widths: ['60%','50%','100%','100%'],
    image: andyhillerImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['right', 'right']
    }
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
    image: sfereImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['right', 'right']
    }
  },

  /*------*/

  'bigBrick' : {

    widths: ['50%','100%','100%','100%'],
    height: '600px',

    innerBricks: {

      'cad' : {
        title: 'Computer Aided Design',
        description: 'A collection of Computer Aided Designs...',
        widths: ['100%','100%','100%','100%'],
        image: cadImage,
        textAttr: {
          color: '#FFFFFF',
          alignment: ['right', 'right']
        }
      },

      'sketching' : {
        title: 'Sketching',
        description: 'A series of sketches...',
        widths: ['50%','50%','50%','100%'],
        image: sketchesImage,
        textAttr: {
          color: '#FFFFFF',
          alignment: ['left', 'left']
        }
      },

      'practical' : {
        title: 'Practical',
        description: 'A series of practical projects...',
        widths: ['50%','50%','50%','100%'],
        image: practicalImage,
        textAttr: {
          color: '#FFFFFF',
          alignment: ['right', 'right']
        }
      }

    }

  }

}

export const snakesAndLaddersBrick = {

  'snakes' : {
    title: 'My First Foray into Coding',
    description: 'The coding experience that began my development career started in an electronics course whilst I was studying at Loughborough University. It was a basic C program of a Snakes & Ladders game...',
    widths: ['100%','100%','100%','100%'],
    image: snakesImage,
    textAttr: {
      color: '#FFFFFF',
      alignment: ['left', 'left']
    }
  }

}
